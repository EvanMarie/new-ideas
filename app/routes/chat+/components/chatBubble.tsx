import Image from "~/buildingBlockComponents/image";
import {
  FlexFull,
  HStack,
  HStackFull,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import FormatDate from "~/utils/formatDate";
import CustomMarkdownRenderer from "./customMarkdownRenderer";

const preprocessContent = (content: string): string => {
  // Wrap block LaTeX with $$
  content = content.replace(/\\\[(.*?)\\\]/gs, (_, p1) => `$$${p1}$$`);
  // Wrap inline LaTeX with \( \)
  content = content.replace(/\\\((.*?)\\\)/g, (_, p1) => `\\(${p1}\\)`);
  return content;
};

export default function ChatBubble({
  userType,
  message,
  timestamp,
}: {
  userType: "user" | "assistant";
  message: string;
  timestamp: string;
}) {
  const processedContent = preprocessContent(message);
  const isAi = userType === "assistant";

  return (
    <FlexFull
      className={`${
        isAi
          ? "pr-3vh sm:pr-[4vh] md:pr-5vh xxl:pr-6vh"
          : "pl-3vh sm:pl-[4vh] md:pl-5vh xxl:pl-6vh"
      }`}
    >
      <FlexFull
        className={`h-fit bg-col-100 rounded-[2.7vh] text-col-900 text-sm md:text-md shadowNarrowTight ${
          isAi
            ? "rounded-tl-none border-360-md"
            : "rounded-br-none border-800-md "
        }`}
      >
        <FlexFull
          className={`h-full ${
            isAi ? "p-[1vh]" : "p-[0.5vh]"
          } rounded-[2.5vh] ${
            isAi
              ? "rounded-tl-none bg-col-800 bg-gradient-to-br from-purple-800/30 via-indigo-700/30 to-purple-800/30 text-white subtleTextShadow"
              : "rounded-br-none bg-col-100 bg-gradient-to-br from-indigo-300/30 via-cyan-300/30 to-indigo-300/50"
          }`}
        >
          <VStackFull align="items-start" className="px-1.5vh" gap="gap-[0px]">
            {isAi && (
              <HStackFull className="justify-between">
                <HStack className="items-center">
                  <Image
                    src="/images/darkviolet.png"
                    className="h-2.5vh"
                    alt="Dark Violet"
                  />
                  <span className={`font-semibold ${"text-cyan-300"}`}>
                    Dark Violet
                  </span>
                </HStack>
                <span
                  className={`text-xs md:text-sm ${"text-col-500"} font-semibold`}
                >
                  {FormatDate({ inputDate: timestamp })}
                </span>
              </HStackFull>
            )}
            <CustomMarkdownRenderer content={processedContent} />
          </VStackFull>
        </FlexFull>
      </FlexFull>
    </FlexFull>
  );
}
