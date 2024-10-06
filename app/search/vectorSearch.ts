import { TogetherAIEmbeddings } from "@langchain/community/embeddings/togetherai";
import { Document } from "@langchain/core/documents";
import { RedisVectorStore } from "@langchain/redis";
import { redisVectorClient } from "~/utils/redis.server";
import { PineconeStore } from "@langchain/pinecone";
import { pinecone } from "~/utils/pineconeDb.server";
import { remember } from "@epic-web/remember";
import { FiEdit } from "react-icons/fi";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { PineconeNotFoundError } from "@pinecone-database/pinecone/dist/errors";

const text = `Hi.\n\nI'm Harrison.\n\nHow? Are? You?\nOkay then f f f f.
This is a weird text to write, but gotta test the splittingggg some how.\n\n
Bye!\n\n-H.`;

export const getStore = (storeName: string) => {
  // memoize singleton store for each store name
  const store = remember(storeName, () => {
    const index = pinecone.index("darkviolet");
    const namespace = storeName;
    const vectorStore = new PineconeStore(
      new TogetherAIEmbeddings({
        modelName: "WhereIsAI/UAE-Large-V1",
      }),
      {
        pineconeIndex: index,
        namespace,
      }
    );
    return vectorStore;
  });
  return store;
};

export type SearchDocFieldSpecs = {
  contentFields: string[];
  idField: string;
  titleField?: string;
  slugField?: string;
  additionalMeta?:
    | Record<string, string>
    | ((doc: Record<string, string | string[]>) => Record<string, string>);
};

export type SearchDocMetadata = {
  id: string;
  title: string;
  slug: string;
} & Record<string, string>;

export const insertDocuments = async <T>({
  storeName = "search",
  documents,
  fieldSpecs,
}: {
  storeName?: string;
  documents: T[];
  fieldSpecs: SearchDocFieldSpecs;
}) => {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 256,
    chunkOverlap: 64,
  });
  const store = getStore(storeName);
  const docs = await Promise.all(
    documents.map(async (doc) => {
      const content = fieldSpecs.contentFields.flatMap((field) => {
        const fieldContent = doc[field] || "";
        if (typeof fieldContent === "string") {
          return fieldContent;
        }
        return JSON.stringify(fieldContent);
      });

      const additionalMeta =
        typeof fieldSpecs.additionalMeta === "function"
          ? fieldSpecs.additionalMeta(doc)
          : fieldSpecs.additionalMeta;

      const metadata: SearchDocMetadata = {
        ...(additionalMeta || {}),
        id: doc[fieldSpecs.idField],
        title: doc[fieldSpecs.titleField || "title"] || "",
        slug: doc[fieldSpecs.slugField || "slug"] || "",
      };
      const metaDatas = content.map((_) => metadata);
      const splitDocs = await splitter.createDocuments(content, metaDatas);
      await store.addDocuments(splitDocs);
    })
  );
};

export const clearStore = async (storeName: string = "search") => {
  try {
    const store = getStore("darkviolet");
    await store.delete({ deleteAll: true, namespace: storeName });
  } catch (e) {
    if (e instanceof PineconeNotFoundError) {
      console.log("namespace not found");
    }
  }
};

export type SearchResult = {
  matchedText?: string;
  score?: number;
} & SearchDocMetadata;

export const vectorSearch = async ({
  storeName = "search",
  query,
  maxResults,
  threshold,
}: {
  storeName?: string;
  query: string;
  maxResults: number;
  threshold: number;
}): Promise<SearchResult[]> => {
  const store = getStore(storeName);
  const results = await store.similaritySearchWithScore(query, maxResults);
  return results
    .map(([result, score]) => ({
      matchedText: result.pageContent,
      ...result.metadata,
      score,
    }))
    .filter((result) => result.score >= threshold) as SearchResult[];
};
