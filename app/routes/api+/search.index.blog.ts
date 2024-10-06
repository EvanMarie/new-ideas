
import {
  insertDocuments,
  type SearchDocFieldSpecs,
  clearStore,
} from "~/search/vectorSearch";
import { LoaderFunctionArgs } from "@remix-run/node";
import {
  KeywordSearchDocFieldSpecs,
  addDocsToKeywordIndex,
} from "~/search/keywordSearch";
import { blogArray } from "../blog+/blog-posts/blogsArray";


export const loader = async ({ request }: LoaderFunctionArgs) => {
  await clearStore();
  const fieldSpecs: SearchDocFieldSpecs = {
    idField: "id",
    titleField: "title",
    slugField: "slug",
    contentFields: ["paragraphs", "summary"],
  };
  await insertDocuments({
    documents: blogArray,
    fieldSpecs,
  });

  const keywordFieldSpecs: KeywordSearchDocFieldSpecs = {
    idField: "id",
    titleField: "title",
    slugField: "slug",
    keywordFields: ["tags", "title", "author"],
  };

  await addDocsToKeywordIndex({
    documents: blogArray,
    fieldSpecs: keywordFieldSpecs,
  });
  return { message: "Indexing complete" };
};
