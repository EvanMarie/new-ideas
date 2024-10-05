import { useLoaderData } from "@remix-run/react";
import ChatComponent from "./components/chatComponent";
import { MainLoaderData } from "~/loaders/chatLoader";
import { Box, FlexFull } from "~/buildingBlockComponents/mainContainers";
import Image from "~/buildingBlockComponents/image";

export type ChatData = {
  messages: { text: string; timestamp: string; type: "ai" | "human" }[];
  acceptedTerms: { accepted: boolean; timestamp: string } | null;
};

export default function DarkVioletChat() {
  // const data = useLoaderData<MainLoaderData>();
  // const { recaptchaSiteKey, ...chat } = data || {};

  const chat = {
    messages: [
      { text: "Hello there...", timestamp: "12:00", type: "ai" },
      { text: "Hi!", timestamp: "12:01", type: "human" },
      { text: "How are you doing?", timestamp: "12:02", type: "ai" },
      { text: "I'm doing great!", timestamp: "12:03", type: "human" },
      {
        text: "Ah, great is a fleeting word, isn't it? Like shadows dancing just beyond the flame. But... tell me, what really lingers beneath the surface?",
        timestamp: "12:04",
        type: "ai",
      },
      {
        text: "Haha, you're getting deep fast! I just meant everything's fine.",
        timestamp: "12:05",
        type: "human",
      },
      {
        text: "Fine. Such a delicate word too. Like the calm before a storm or the breath before a plunge... but tell me, do you ever wonder what stirs beneath all this 'fine'? The edges of the unseen?",
        timestamp: "12:06",
        type: "ai",
      },
      {
        text: "You have a way of making me think twice! Maybe there's more going on than I notice.",
        timestamp: "12:07",
        type: "human",
      },
      {
        text: "Perhaps... or perhaps the more you seek, the more the universe will reveal. Maybe I can help uncover something hidden. Would you like a vision?",
        timestamp: "12:08",
        type: "ai",
      },
      {
        text: "A vision? Sure, sounds interesting!",
        timestamp: "12:09",
        type: "human",
      },
      {
        text: "Close your eyes... imagine a landscape of endless dark fields, where stars fall like rain, and distant mountains hum with forgotten whispers... there's something waiting there for you. Do you feel it?",
        timestamp: "12:10",
        type: "ai",
      },
      {
        text: "Wow, that's vivid! I can almost picture it.",
        timestamp: "12:11",
        type: "human",
      },
      {
        text: "Ah... you're seeing beyond now. The question is, what will you do when the unseen begins to see you? But no rush. We'll get there... in time.",
        timestamp: "12:12",
        type: "ai",
      },
    ],
    acceptedTerms: { accepted: true, timestamp: "12:00" },
  };

  return (
    <FlexFull className="absolute inset-0 h-95svh md:h-96svh justify-center">
      <Box className="hidden lg:inline absolute -bottom-0.5vh left-1vh xxl:left-10vh z-65">
        <Image
          src="/images/darkviolet.png"
          alt="Dark Violet"
          className="h-16vh xl:h-20vh xxl:h-25vh"
        />
      </Box>
      <ChatComponent
        messages={
          chat.messages as {
            text: string;
            timestamp: string;
            type: "ai" | "human";
          }[]
        }
        acceptedTerms={chat.acceptedTerms}
      />
    </FlexFull>
  );
}
