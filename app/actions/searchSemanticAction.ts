import { ActionFunctionArgs } from "@remix-run/node";
import { vectorSearch } from "~/search/vectorSearch";

export const searchSemanticAction = async ({
  request,
  params,
}: ActionFunctionArgs) => {
  const formData = await request.formData();
  const searchQuery = formData.get("searchQuery") as string;
  const results = await vectorSearch({
    query: searchQuery,
    maxResults: 5,
    threshold: 0.5,
  });
  return { results };
};
