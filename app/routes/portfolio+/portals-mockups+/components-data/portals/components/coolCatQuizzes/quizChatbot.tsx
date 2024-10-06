import FlexFull from "~/components/buildingBlocks/flexFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import { useRef } from "react";
import { usePortalChat } from "~/hooks/usePortalChat";
import Text from "~/components/buildingBlocks/text";

export type ChatData = {
  messages: { text: string; timestamp: string; type: "ai" | "human" }[];
  acceptedTerms: { accepted: boolean; timestamp: string } | null;
};

export default function BaseChatComponent({
  aiChatbotName = "AI Chatbot",
  portalName,
  systemPrompt,
  promptData,
}: {
  aiChatbotName?: string;
  portalName: string;
  systemPrompt: string;
  promptData: string;
}) {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const { messages } = usePortalChat({
    portalName: portalName,
    systemPrompt: systemPrompt,
  });
  console.log("messages", messages);

  return (
    <>
      <FlexFull className="px-[1vh] pt-[1vh] rounded-b-none xl:rounded-b-[0.7vh]">
        <VStackFull
          className={`h-[88svh] md:h-[87svh] justify-between`}
          gap="gap-[0px]"
        >
          <FlexFull
            ref={chatContainerRef}
            className={`flex-shrink-0 overflow-x-hidden overflow-y-auto insetShadowXl bg-slate-500 border-970-md h-[60svh]`}
          >
            <VStackFull className={`h-fit p-[1.5vh]`} gap="gap-[1.5vh]">
              {messages.map((entry, index) => {
                return entry.type === "ai" ? (
                  <Text>{entry.text}</Text>
                ) : (
                  <Text>{entry.text}</Text>
                );
              })}
            </VStackFull>
          </FlexFull>
        </VStackFull>
      </FlexFull>
    </>
  );
}
