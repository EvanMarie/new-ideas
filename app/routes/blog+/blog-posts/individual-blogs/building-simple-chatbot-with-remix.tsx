import { DustinAvatar } from "~/routes/us+/components-data/about-us-data";
import { BlogPost } from "../blogsArray";
import React from "react";

export const BuildingSimpleChatbotWithRemix: BlogPost =
  // Building a simple chat bot with Remix
  {
    id: "31",
    date: "2024-04-15",
    title: "Building a simple chat bot with Remix",
    slug: "building-a-simple-chat-bot-with-remix",
    author: "Dustin W. Carr",
    categories: ["Artificial Intelligence", "Programming", "Apps"],
    avatar: DustinAvatar,
    tags: ["Chatbot", "Artificial Intelligence", "Remix", "LLMs"],
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blog31.png",
    summary:
      "Building a basic chat bot using Remix, highlighting the integration of different language model service providers through langchain, allowing flexibility in managing conversational interactions within the app.",
    paragraphs: [
      <React.Fragment key="building-a-simple-chat-bot-with-remix">
        <p>
          In this article we will show you how easy it is to build a simple chat
          bot with Remix. The code for this demo app is available on{" "}
          <a href="https://github.com/DarkViolet-ai/remix-simple-chat">
            GitHub
          </a>
          . It is best clone this app and follow along from there, as I am not
          going to cover all of the details of getting setup with remix in this
          article. Nor will I go in depth on the UI components, though I
          encourage you to check out the{" "}
          <a href="git@github.com:EvanMarie/blank_remix_tailwind_template.git">
            template project
          </a>
          that I used, by <a href="https://github.com/EvanMarie">@EvanMarie</a>.
        </p>

        <h1>Getting Started</h1>

        <p>
          Clone the project and do <code>npm install</code>. You can now run the
          project with <code>npm run dev</code>.
        </p>

        <h1>The Simplest Chat Bot</h1>

        <p>
          The first implementation is a very simple conversational chat bot. It
          will responed to every statement the user makes. We will be using
          langchain, as its integrations do reduce the amount of boilerplate
          code we need to write. In this project, you can easily switch between
          different LLM service providers, OpenAI, TogetherAI, and DeepInfra.
          There are many others that can quickly be hooked up to langchain, but
          these are the ones included in the demo.
        </p>

        <p>
          For DeepInfra, there is no built-in integration for langchain.
          Instead, this is included as a util in this project. You can see the
          code for this in{" "}
          <code>/app/lib/server-utils/deepInfraLangChain.ts</code>. (Note that
          as of this writing, there is an error in the langchain code that needs
          to be fixed in order for the deepInfra code to work. I have submitted
          a pull request for this very simple fix, and I expect it to be merged
          soon. If you get errors, please stick to the OpenAI and TogetherAI
          integrations for now.)
        </p>

        <p>
          The route for this first implementation is at /chat, and the code can
          be found in <code>/app/routes/chat/index.tsx</code>. This file
          contains the following code:
        </p>

        <div className="code-wrapper">
          <pre>
            <code>{`import Flex from "~/components/buildingBlocks/flex";
          import ChatComponent from "./components/chatComponent";  
          import { ChatLoaderData, chatLoader } from "./loaders/chatLoader";
          import { chatAction } from "./actions/chatAction";
          import { useLoaderData } from "@remix-run/react";
          
          export const loader = chatLoader;
          
          export const action = chatAction;
          
          export default function Chat() {
            const { messages } = useLoaderData<ChatLoaderData>();
            return (
              <Flex className="w-[45vw] hidden xl:flex items-center">
          <ChatComponent messages={messages} />
              </Flex>
            );  
          }`}</code>
          </pre>
        </div>

        <p>
          This code is pretty simple. It uses the <code>chatLoader</code> to get
          the messages from the server, and then passes them to the{" "}
          <code>ChatComponent</code> to render them. Meanwhile, inside the chat
          component is a form that results in a POST request to the server,
          which is answered by the <code>chatAction</code> above. The{" "}
          <code>chatAction</code> is defined in{" "}
          <code>/app/routes/chat/actions/chatAction.ts</code> and looks like
          this:
        </p>

        <div className="code-wrapper">
          <pre>
            <code>{`import { ActionFunctionArgs, json } from "@remix-run/node";
import { TogetherAI } from "@langchain/community/llms/togetherai";
import { ChatTogetherAI } from "@langchain/community/chat_models/togetherai";
import { ChatOpenAI } from "@langchain/openai";
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { AIMessage, HumanMessage } from "@langchain/core/messages"; 
import { RedisChatMessageHistory } from "@langchain/community/stores/message/ioredis";
import { redis } from "~/lib/server-utils/redis.server";
import { ChatDeepInfra } from "~/lib/server-utils/deepInfraLangChain";
import {
  getSessionIdFromRequest,
  setSessionIdOnResponse,
} from "~/lib/server-utils/session";
import { v4 as uuid } from "uuid";

export const chatAction = async ({ request }: ActionFunctionArgs) => {
  const sessionId = (await getSessionIdFromRequest(request)) || uuid();
  console.log("session id", sessionId);
  
  // you can use the OpenAI, TogetherAI or DeepInfra models.  Just copy and
  // paste the name of the model you want to use below.  A number of examples are shown.
  // const chatModel = new ChatOpenAI({
  // const chatModel = new ChatTogetherAI({
  const chatModel = new ChatDeepInfra({
    //modelName: "Gryphe/MythoMax-L2-13b", // deepinfra
    //modelName: "gpt-4-turbo-preview", // openai 
    temperature: 0.8,
    //modelName: "NousResearch/Nous-Hermes-2-Mixtral-8x7B-DPO", // together
    //modelName: "snorkelai/Snorkel-Mistral-PairRM-DPO", // together
    //modelName: "Qwen/Qwen1.5-72B-Chat", // together
    //modelName: "upstage/SOLAR-10.7B-Instruct-v1.0", //together
    //modelName: "DeepInfra/pygmalion-13b-4bit-128g", // deepinfra
    //modelName: "lizpreciatior/lzlv_70b_fp16_hf", // deepinfra
    modelName: "cognitivecomputations/dolphin-2.6-mixtral-8x7b", // deepinfra
  });

  const prompt = ChatPromptTemplate.fromMessages([
    [
      "system",
      \`You are a helpful assistant, having a conversation with a user. You can help the user with a variety of tasks, such as answering questions, providing information, or assisting with tasks. You are friendly, polite, and professional. You are knowledgeable and can provide accurate information. You are patient and understanding, and you can help the user with any questions or concerns they may have. You are here to help the user and provide them with the information they need.\`,
    ],
    new MessagesPlaceholder("chat"),
  ]);

  const messageHistory = new RedisChatMessageHistory({
    sessionId: \`dv-chat:\${sessionId}\`,
    client: redis,
    url: process.env.REDIS_URL,
  });
  const formData = await request.formData();
  const chatInput = formData.get("chatInput");

  const chatMessage = new HumanMessage(chatInput as string, {
    timestamp: new Date().toISOString(),
  });

  const outputParser = new StringOutputParser();
  await messageHistory.addMessage(chatMessage);
  const messages = await messageHistory.getMessages();

  const response = await prompt
    .pipe(chatModel)
    .pipe(outputParser)
    .invoke({ chat: messages });

  await messageHistory.addMessage(
    new AIMessage(response, { timestamp: new Date().toISOString() })
  );

  console.log("reponse", response);
  const responseJson = json({ response });
  return await setSessionIdOnResponse(responseJson, sessionId);
};`}</code>
          </pre>
        </div>
        <p>
          Let's break this down. The <code>chatAction</code> function is an
          async function that takes an <code>ActionFunctionArgs</code> object as
          an argument. This object contains the request object, which we use to
          get the form data from the POST request. We then create a new{" "}
          <code>HumanMessage</code> object from the chat input, and add it to
          the message history.
        </p>

        <p>
          We are using another langchain integration that uses redis as the
          backing store for our messages. This is very fast and convenient. All
          we have to do is provide a key to the chat conversation, which we get
          from the sessionID found in the cookie, or we create one if there is
          not one already. We append the new message to the history, and then
          retrieve the full history from redis.
        </p>

        <p>
          These messages are passed to the prompt template, which then passes a
          complete prompt that includes the conversation history as well as the
          system prompt. We use a string output parser so that our response is
          just the text content returned by the llm. We then add the new message
          to the message history, returning the response as a JSON object. We
          also set the session ID on the response, so that the session ID is
          stored in the cookie for the next request.
        </p>

        <p>
          After the action completes, remix revalidates all of the loaders, and
          so our loader only needs to retrieve the message history from redis
          and return it. This is done in the <code>chatLoader</code> function,
          which is defined in{" "}
          <code>/app/routes/chat/loaders/chatLoader.ts</code> and looks like
          this:
        </p>

        <div className="code-wrapper">
          <pre>
            <code>{`import { LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import { AIMessage } from "@langchain/core/messages";
import { RedisChatMessageHistory } from "@langchain/community/stores/message/ioredis";
import { redis } from "~/lib/server-utils/redis.server";  
import {
  getSessionIdFromRequest,
  setSessionIdOnResponse,
} from "~/lib/server-utils/session";
import { v4 as uuid } from "uuid";

export const chatLoader = async ({ request }: LoaderFunctionArgs) => {
  const searchParams = new URLSearchParams(request.url.split("?")[1]);
  const clearHistory = searchParams.get("clearHistory");
  console.log("clear history", clearHistory);
  // clear history by changing the session id, keeps the chat in database, but 
  // clears it for user.
  const sessionId = !clearHistory
    ? (await getSessionIdFromRequest(request)) || uuid()
    : uuid();
  if (clearHistory) {
    const response = redirect("/chat");
    return await setSessionIdOnResponse(response, sessionId);
  }

  const messageHistory = new RedisChatMessageHistory({
    sessionId: \`dv-chat:\${sessionId}\`,
    client: redis,
    url: process.env.REDIS_URL,
  });

  //await messageHistory.addMessage(new AIMessage("Hello!"));
  let messages = await messageHistory.getMessages();
  if (messages.length === 0) {
    messageHistory.addMessage(
      new AIMessage(
        "Hello! I'm Dark Violet.  What can I help you with today?",
        { timestamp: new Date().toISOString() }
      )
    );
    messages = await messageHistory.getMessages();
  }
  //console.log(messages);
  const response = json({
    messages: messages.map((message) =>
      message instanceof AIMessage
        ? {
            type: "ai",
            text: message.content,
            timestamp: message.additional_kwargs.timestamp,
          }  
        : {
            type: "human",
            text: message.content,  
            timestamp: message.additional_kwargs.timestamp,
          }
    ),
  });
  return await setSessionIdOnResponse(response, sessionId);
};

export type ChatLoaderData = {
  messages: { type: "ai" | "human"; text: string; timestamp: string }[];
};`}</code>
          </pre>
        </div>
        <p>
          This loader also accommodates a request parameter that will clear the
          chat history for that conversation and start a new chat. The loader
          also retrieves the session ID from the cookie, or creates a new one if
          it does not exist. It then retrieves the message history from redis,
          and if there are no messages, it adds a welcome message to the
          history. The messages are then returned as a JSON object, along with
          the session ID set on the response.
        </p>

        <p>
          And that's it! You now have a simple chat bot that will respond to
          every statement the user makes. You can easily switch between
          different LLM service providers by changing the <code>chatModel</code>{" "}
          variable in the <code>chatAction</code> function. This is a great
          starting point for building more complex chat bots with Remix.
        </p>

        <p>
          In the <a href="/blog/35">next article</a>, we will show you how to
          build a more advanced chat bot that implements RAG (Retrieval
          Augmented Generation) and other features.
        </p>
      </React.Fragment>,
    ],
  };
