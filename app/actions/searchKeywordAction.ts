import { ActionFunctionArgs } from "@remix-run/node";
import { searchKeywordIndex } from "~/search/keywordSearch";

export const searchKeywordAction = async ({
  request,
  params,
}: ActionFunctionArgs) => {
  const formData = await request.formData();
  const searchQuery = formData.get("searchQuery") as string;
  const keywords = searchQuery.split(/[\s\p{P}]+/u);
  const results = await Promise.all(
    keywords.map(async (keyword) => {
      return await searchKeywordIndex({ keyword });
    })
  );
  const resultsSet = new Set(results.flat());
  return { results: Array.from(resultsSet) };
};
