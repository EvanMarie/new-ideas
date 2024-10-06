import { ActionFunctionArgs, json } from "@remix-run/node";
import { TogetherAI } from "@langchain/community/llms/togetherai";
import { ChatTogetherAI } from "@langchain/community/chat_models/togetherai";
import { ChatOpenAI } from "@langchain/openai";
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import {
  StringOutputParser,
  StructuredOutputParser,
} from "@langchain/core/output_parsers";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import { RedisChatMessageHistory } from "@langchain/community/stores/message/ioredis";
import { redis } from "~/utils/redis.server";
import { ChatDeepInfra } from "~/utils/deepInfraLangChain";
import {
  getSessionIdFromRequest,
  setSessionIdOnResponse,
} from "~/utils/session";
import { v4 as uuid } from "uuid";

export const searchClassifierGenAction = async ({
  request,
  params,
}: ActionFunctionArgs) => {
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
    ["human", "{searchQuery}"],
  ]);

  const formData = await request.formData();
  const searchQuery = formData.get("searchQuery");
  console.log("received search query", searchQuery);

  const outputParser = new StringOutputParser();

  let response: string | null = null;

  while (response === null)
    response = await prompt
      .pipe(chatModel)
      .pipe(outputParser)
      .invoke({ searchQuery });

  const responseJson = json({ response });
  return responseJson;
};
