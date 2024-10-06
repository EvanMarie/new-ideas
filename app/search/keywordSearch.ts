import { redis } from "~/utils/redis.server";
import type {
  SearchDocMetadata,
  SearchDocFieldSpecs,
  SearchResult,
} from "./vectorSearch";

const keyWordKey = (keyword: string) => `keyword:${keyword}`;

export type KeywordSearchDocFieldSpecs = Omit<
  SearchDocFieldSpecs,
  "contentFields"
> & {
  keywordFields: string[];
};

const excludedKeywords = new Set([
  "the",
  "a",
  "an",
  "and",
  "or",
  "but",
  "if",
  "then",
  "else",
  "when",
  "at",
  "from",
  "by",
  "on",
  "off",
  "for",
  "in",
  "out",
  "over",
  "to",
  "into",
  "with",
]);

export const addDocsToKeywordIndex = async <T>({
  documents,
  fieldSpecs,
}: {
  documents: T[];
  fieldSpecs: KeywordSearchDocFieldSpecs;
}) => {
  const keywordFields = fieldSpecs.keywordFields;
  documents.map(async (doc) => {
    const keywords = keywordFields
      .flatMap((field) => {
        const value = doc[field];
        if (typeof value == "string") {
          return value.split(/[\s\p{P}]+/u);
        }
        if (Array.isArray(value)) {
          return value;
        }
        return "";
      })
      .filter(
        (keyword) => keyword.length > 1 && !excludedKeywords.has(keyword)
      );

    const id = doc[fieldSpecs.idField] as string;
    const title = (doc[fieldSpecs.titleField || "title"] as string) || "";
    const slug = (doc[fieldSpecs.slugField || "slug"] as string) || "";
    const additionalMeta =
      typeof fieldSpecs.additionalMeta === "function"
        ? fieldSpecs.additionalMeta(doc)
        : fieldSpecs.additionalMeta;
    const metadata: SearchDocMetadata = {
      ...additionalMeta,
      id,
      title,
      slug,
    };
    await Promise.all(
      keywords.map(async (keyword) => {
        const keywordKey = keyWordKey(keyword);
        await redis.zadd(keywordKey, Date.now(), JSON.stringify(metadata));
      })
    );
  });
};

export const searchKeywordIndex = async ({
  keyword,
}: {
  keyword: string;
}): Promise<SearchResult[]> => {
  const keywordKey = keyWordKey(keyword);
  const results = await redis.zrange(keywordKey, 0, -1);
  return results.map((result) => JSON.parse(result) as SearchResult);
};
