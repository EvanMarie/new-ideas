import { ChatDeepInfra } from "~/utils/deepInfraLangChain";
import { searchClassifierGenAction } from "./searchClassifierGenAction";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";
import { searchKeywordIndex } from "~/search/keywordSearch";
import { vectorSearch } from "~/search/vectorSearch";

const classifyQuery = async (query: string) => {
  // you can use the OpenAI, TogetherAI or DeepInfra models.  Just copy and
  // paste the name of the model you want to use below.  A number of examples are shown.
  // const chatModel = new ChatOpenAI({
  // const chatModel = new ChatTogetherAI({
  const chatModel = new ChatDeepInfra({
    //modelName: "Gryphe/MythoMax-L2-13b", // deepinfra
    //modelName: "gpt-4-turbo-preview", // openai
    temperature: 0,
    //modelName: "NousResearch/Nous-Hermes-2-Mixtral-8x7B-DPO", // together
    //modelName: "snorkelai/Snorkel-Mistral-PairRM-DPO", // together
    //modelName: "Qwen/Qwen1.5-72B-Chat", // together
    //modelName: "upstage/SOLAR-10.7B-Instruct-v1.0", //together
    //modelName: "DeepInfra/pygmalion-13b-4bit-128g", // deepinfra
    //modelName: "lizpreciatior/lzlv_70b_fp16_hf", // deepinfra
    //modelName: "cognitivecomputations/dolphin-2.6-mixtral-8x7b", // deepinfra
    //modelName: "meta-llama/Meta-Llama-3-70B-Instruct",
    modelName: "meta-llama/Meta-Llama-3-8B-Instruct",
    maxTokens: 10,
  });

  const prompt = ChatPromptTemplate.fromMessages([
    [
      "system",
      `The user has entered a search query below.  Decide if this is a keyword search or a semantic search.  If it is a keyword search, then respond with the text 'keyword'.  If it is a semantic search, then respond with the text 'semantic'.  Keyword searches are going to appear as disjointed collection of words, separated by a space or comma.  A semantic search is a phrase of words that appear to be a coherent sentence or clause.  
    Examples  
    user: 'science, quantum, electronics' 
    assistant: 'keyword'

    user: 'What is the capital of France?'
    assistant: 'semantic'`,
    ],
    ["human", "{query}"],
  ]);

  const outputParser = new StringOutputParser();

  let response: string | null = null;

  response = await prompt.pipe(chatModel).pipe(outputParser).invoke({ query });

  return response;
};

const keywordSearch = async (searchQuery: string) => {
  const keywords = searchQuery.split(/[\s\p{P}]+/u);
  const results = await Promise.all(
    keywords.map(async (keyword) => {
      return await searchKeywordIndex({ keyword });
    })
  );
  const resultsSet = new Set(results.flat());
  return { results: Array.from(resultsSet) };
};

const semanticSearch = async (searchQuery: string) => {
  const results = await vectorSearch({
    query: searchQuery,
    maxResults: 5,
    threshold: 0.5,
  });
  return { results };
};

export const searchSemanticAction = async ({
  request,
  params,
}: ActionFunctionArgs) => {
  const formData = await request.formData();
  const searchQuery = formData.get("searchQuery") as string;
  const results = await classifyQuery(searchQuery);
  return { results };
};

export const searchAction = async ({ request, params }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const searchQuery = formData.get("searchQuery") as string;
  const searchWords = searchQuery.split(/[\s\p{P}]+/u);
  if (searchWords.length < 3) {
    return await keywordSearch(searchQuery);
  }
  const classifyResults = await classifyQuery(searchQuery);
  if (classifyResults === "keyword") {
    return await keywordSearch(searchQuery);
  } else {
    return await semanticSearch(searchQuery);
  }
};

export const searchLoader = async ({ request, params }: LoaderFunctionArgs) => {
  const searchParams = new URLSearchParams(request.url.split("?")[1]);
  const searchQuery = searchParams.get("searchQuery") as string;
  const searchWords = searchQuery.split(/[\s\p{P}]+/u);
  if (searchWords.length < 3) {
    return await keywordSearch(searchQuery);
  }
  const classifyResults = await classifyQuery(searchQuery);
  if (classifyResults === "keyword") {
    return await keywordSearch(searchQuery);
  } else {
    return await semanticSearch(searchQuery);
  }
};
