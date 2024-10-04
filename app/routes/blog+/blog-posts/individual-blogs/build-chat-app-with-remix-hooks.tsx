import { DustinAvatar } from "~/routes/us+/components-data/about-us-data";
import { BlogPost } from "../blogsArray";
import React from "react";

export const BuildChatAppWithRemixHooks: BlogPost =
  // Build a Chat App with Remix Hooks
  {
    id: "40",
    date: "2024-04-26",
    title: "Build a Chat App with Remix Hooks",
    slug: "build-a-chat-app-with-remix-hooks",
    author: "Dustin W. Carr",
    categories: ["Apps", "Programming", "Artificial Intelligence"],
    avatar: DustinAvatar,
    tags: ["Remix", "Hooks", "Chatbot"],
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blog40.png",
    summary:
      "A tutorial on building an advanced chat application in Remix using hooks and the useFetcher API to enable fetching messages from within a component.",
    paragraphs: [
      <React.Fragment key="build-a-chat-app-with-remix-hooks">
        <p>
          <a href="/blog/building-a-simple-chat-bot-with-remix">
            🔗 Previously: Building a Chatbot, part 1
          </a>
        </p>
        <p>
          <a href="/blog/building-an-advanced-chat-application-with-rag">
            🔗 Previously: Building a Chatbot, part 2
          </a>
        </p>
        <h1>
          Building a Chat Application with Remix Using Hooks and `useFetcher`
        </h1>
        <p>
          I decided to extend the latest Remix Chat Application tutorial by
          adding a new feature: the ability to fetch messages from an API within
          a component using useFetcher. This is fairly identical to the previous
          simple chat application, but it can be easily transported within your
          application without any additional setup.
        </p>

        <h2>Prerequisites</h2>
        <p>
          You can clone the repo at{" "}
          <a href="https://github.com/DarkViolet-ai/remix-simple-chat">
            GitHub
          </a>
          .
        </p>
        <p>
          From there you just need to run <code>npm install</code> and{" "}
          <code>npm run dev</code> to start the server and navigate to{" "}
          <code>http://localhost:3000</code> to see the chat application in
          action.
        </p>
        <p>
          We use similar components to power our site at{" "}
          <a href="https://darkviolet.ai">https://darkviolet.ai</a> and{" "}
          <a href="https://chatter.darkviolet.ai">
            https://chatter.darkviolet.ai
          </a>{" "}
          if you want to see a live example.
        </p>

        <h2>Implementing the Chat Hooks</h2>
        <p>
          Before we can fetch messages with <code>useFetcher</code>, we need to
          create resource routes. In this project, they can be found in the{" "}
          <code>app/routes/api+</code> directory. We are creating two routes.
          One of these <code>portal-chat.$portalName.ts</code> will be for
          creating chat bots, similar to the first tutorial, and the other,{" "}
          <code>single-text-gen.ts</code> will be for handling a single text
          generation. The key pieces of these are found in the loaders and
          actions.
        </p>
        <p>
          The previous tutorials have covered the code, so I refer you to those
          to understand the flow. I don't see any need to repeat that here.
        </p>
        <p>
          The new elements here are the hooks that are used for interacting with
          these resource routes. Let's look at the code for the{" "}
          <code>usePortalChat</code> hook:
        </p>

        <pre>
          <code>{`import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";
import { ChatLoaderData } from "~/lib/loaders/portalChatLoader";

export function usePortalChat({
  portalName,  
  systemPrompt,
  getInitialAiMessage = true,
}: {
  portalName: string;
  systemPrompt: string;
  getInitialAiMessage?: Boolean; 
}) {
  const chatFetcher = useFetcher<ChatLoaderData>();
  const chatSubmitter = useFetcher();
  const [shouldRevalidate, setShouldRevalidate] = useState(false);

  useEffect(() => {
    console.log("getting chat messages");
    if (
      (shouldRevalidate || !chatFetcher.data) &&
      chatFetcher.state === "idle"
    ) {
      chatFetcher.load(\`/api/portal-chat/\${portalName}\`);
      setShouldRevalidate(false);
    }
  }, [
    chatFetcher,
    shouldRevalidate,
    portalName,
    chatFetcher.data,
    chatFetcher.state,
  ]);

  useEffect(() => {
    if (
      getInitialAiMessage &&
      chatFetcher.state === "idle" &&
      chatSubmitter.state === "idle" &&
      !chatSubmitter.data &&
      chatFetcher.data &&
      chatFetcher.data.messages.length === 0
    ) {
      console.log("submitting initial chat message");
      chatSubmitter.submit(
        { system: systemPrompt, chatInput: "" },
        {
          action: \`/api/portal-chat/\${portalName}\`,
          method: "POST",
        }
      );
    }
  }, [
    chatFetcher.data,
    chatFetcher.state,
    chatSubmitter.state,
    chatSubmitter.data,
    portalName,
  ]);

  useEffect(() => {
    if (chatSubmitter.data) {
      setShouldRevalidate(true);
    }
  }, [chatSubmitter.data]);

  const submitChatMessage = async (message: string) => {
    chatSubmitter.submit(
      { system: systemPrompt, chatInput: message },
      {
        action: \`/api/portal-chat/\${portalName}\`,
        method: "POST",
      }
    );
  };

  const clearChat = async () => {
    chatFetcher.load(\`/api/portal-chat/\${portalName}?clearHistory=true\`);
  };
  const isLoading =
    chatFetcher.state === "loading" || chatSubmitter.state === "submitting";

  return {
    isLoading,
    submitChatMessage,
    clearChat,
    messages: chatFetcher.data?.messages || [],
  };
}`}</code>
        </pre>

        <p>
          In order to implement a conversational chat, we will use two fetchers.
          The first fetcher, <code>chatFetcher</code>, is used to get the chat
          messages from the server. The second fetcher,{" "}
          <code>chatSubmitter</code>, is used to send the chat messages to the
          server. The <code>usePortalChat</code> hook is responsible for
          managing these fetchers and the chat messages. Separating things in
          this manner facilitates smooth flow of messages between the client and
          the server.
        </p>

        <p>
          The hook returns a function <code>submitChatMessage</code> that is
          used to send the chat messages to the server. The function{" "}
          <code>clearChat</code> is used to clear the chat history. The{" "}
          <code>isLoading</code> variable is used to show a loading spinner when
          the chat messages are being fetched or sent to the server. The{" "}
          <code>messages</code> variable contains the full history of chat
          messages in this conversation.
        </p>

        <p>
          When we submit the chat message, the action at the resource route will
          send the message to the LLM and return the response when it is ready.
          When we receive this response, we then revalidate the loader, which
          retrieves the entire history. While this does mean more data is
          retrieved from the server, it ensures that the client and server are
          always in sync, and prevents us from having to manage the state of the
          conversation on the client.
        </p>

        <p>
          The implementation of the single text gen hook is much simpler. In
          this case, we aren't trying to manage the history, and so we can just
          use the returned result from the action. Here is the code for the{" "}
          <code>useSingleTextGen</code> hook:
        </p>

        <pre>
          <code>{`import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";
import { ChatLoaderData } from "~/loaders/portalChatLoader";

export function useSingleTextGen({ systemPrompt }: { systemPrompt: string }) {
  const chatSubmitter = useFetcher<{ response: string }>();

  const submitChatMessage = async (message: string) => {
    chatSubmitter.submit(
      { system: systemPrompt, userPrompt: message },
      {
        action: \`/api/single-text-gen\`,
        method: "POST",
      }
    );
  };

  const isLoading = chatSubmitter.state === "submitting";

  return {
    isLoading,
    submitChatMessage,
    response: chatSubmitter.data?.response,
  };
}`}</code>
        </pre>

        <h2>Using the Chat Hook</h2>
        <p>
          To use the chat hook, we build a component, which is basically the
          same as our previous chat component, but instead of passing the chats
          to it, we pass the portal name and system prompt, and then we handle
          the submit action from the chat input form. Here is the relevant code
          for implementing this feature.
        </p>

        <pre>
          <code>{`export default function BaseChatComponent({
  buttonClassName = "",
  aiBubbleClassName = "",
  userBubbleClassName = "",
  aiChatbotName = "AI Chatbot",
  iconClassName = "",
  portalName,
  systemPrompt,
}: {
  buttonClassName?: string;
  aiBubbleClassName?: string;
  userBubbleClassName?: string;
  aiChatbotName?: string;
  iconClassName?: string;
  portalName: string;
  systemPrompt: string;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const { isLoading, submitChatMessage, clearChat, messages } = usePortalChat({
    portalName: portalName,
    systemPrompt: systemPrompt,
  });
  console.log("messages", messages);
  
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = formData.get("chatInput") as string;
    submitChatMessage(message);
  };

  useEffect(() => {
    if (!isLoading) {
      formRef.current?.reset();
    }
  }, [isLoading]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      submitChatMessage(event.currentTarget.value);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current !== null) {
      const { scrollHeight, clientHeight, scrollTop } =
        chatContainerRef.current;
      console.log(scrollHeight, clientHeight, scrollTop);
      const maxScrollTop = scrollHeight - clientHeight;
      chatContainerRef.current.scrollTop = maxScrollTop;
    }
  }, [messages.length]);

  return ( ...`}</code>
        </pre>

        <p>We then implement this in the route as follows:</p>

        <pre>
          <code>{`import { useParams } from "@remix-run/react";
import BasechatComponent from "./components/baseChatComponent";
import Flex from "~/components/buildingBlocks/flex";

const chatPortals = {
  chatbot: {
    systemPrompt: "You are a helpful assistant?  Be cool.",
    portalName: "chatbot",
  },
  lonelygirl23: {
    systemPrompt:
      "You are a lonely girl in a lonely world.  
      Being helpful gives you a sense of purpose.  
      Being praised brings you the greatest joy.",   
    portalName: "lonelygirl23",
  },
};

export default function Chat() {
  const { portalName } = useParams() as {
    portalName: keyof typeof chatPortals;
  };
  const { systemPrompt } = chatPortals[portalName];

  return (
    <Flex className="w-[45vw] hidden xl:flex items-center">
      <BasechatComponent portalName={portalName} systemPrompt={systemPrompt} />
    </Flex>
  );
}`}</code>
        </pre>

        <p>
          As you see, this lets you easily set up multiple chat portals with
          different system prompts. This is a simple example, but it can be
          easily extended to more complex chat applications.
        </p>

        <p>
          Run the app and navigate to{" "}
          <code>http://localhost:3000/chat/with-portal/chatbot</code> to see the
          chat application in action.
        </p>

        <h2>Conclusion</h2>
        <p>
          In this tutorial, we have extended the previous chat application by
          adding the ability to fetch messages from an API within a component
          using useFetcher. This is a simple example, but it can be easily
          extended to more complex chat applications. I hope you find this
          tutorial helpful.
        </p>

        <p>
          If you have any questions, or if you want help in your implementation
          -- including security, user management, document preparation, and
          multi-modal implementations -- you are welcome to contact us through{" "}
          <a href="https://darkviolet.ai/home#contact">Dark Violet</a>.
        </p>

        <p>
          If you find this useful, make sure to STAR our repository on{" "}
          <a href="https://github.com/DarkViolet-ai/remix-simple-chat">
            GitHub
          </a>
          . Thank You!
        </p>
      </React.Fragment>,
    ],
  };
