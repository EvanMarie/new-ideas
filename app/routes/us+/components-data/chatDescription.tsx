import { useState } from "react";
import { ChatData } from "./indexChatSection";
import FlexFull from "~/components/buildingBlocks/flexFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Text from "~/components/buildingBlocks/text";
import Button from "~/components/buildingBlocks/button";
import Modal from "~/components/buildingBlocks/modal";
import Flex from "~/components/buildingBlocks/flex";
import ChatComponent from "./chatComponent";
import { shineyGradient, staggerMenuLinkStyles } from "./styleVariables";
import Image from "~/components/buildingBlocks/image";
import Box from "~/components/buildingBlocks/box";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import CenterFull from "~/components/buildingBlocks/centerFull";
import { ChatIcon, CloseIcon } from "styles";
import AnimatedIconButton from "./animatedIconButton";

export default function ChatDescription({ chat }: { chat?: ChatData }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <CenterFull className="justify-center p-[1vh] h-full xl:w-[45vw]">
        <VStackFull
          className={`bg-[url(https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/neuralnetwork.png?width=800&resize=contain&quality=70)] bg-cover bg-center bg-no-repeat bg-sticky border-970-md shadowBroadLoose sm:w-[75vw] md:w-[65vw] lg:w-[55vw] xl:w-[40vw]`}
        >
          <VStackFull className="bg-violet-900/50  xxl:p-[2vh]">
            <Box className="w-[23vh] p-[2vh]">
              <Image
                src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/darkviolet.png?width=900&resize=contain&quality=100"
                alt="Dark Violet"
                ariaLabel="Dark Violet"
              />
            </Box>
            <Text
              className={`text-[3.2vh] xl:text-[3.5vh] xxl:text-[5vh] text-cyan-300 kufam-font textShadow`}
            >
              Chat with Dark Violet
            </Text>
            <FlexFull className="p-[1vh]">
              <FlexFull
                className={`${shineyGradient} p-[0.5vh] shadowBroadLoose border-970-md`}
              >
                <FlexFull className="p-[1.5vh] bg-slate-900/70 insetShadowXl border-970-md">
                  <Text className="sm:text-[2vh] md:text-[2.2vh] xl:text-[2.4vh] xxl:text-[2.5vh]">
                    Dark Violet is more than just our name or our mascot. She is
                    our coworker, offering creative inspiration in all areas of
                    life. We make chatting with her available here for
                    demonstration of the types of things we can build easily and
                    quickly. Note that this is purely for entertainment
                    purposes, though she is pretty smart and can handle tough
                    questions as well. Just know that she can give flawed
                    answers. Her opinions are not necessarily the opinions of
                    darkviolet.ai
                  </Text>
                </FlexFull>
              </FlexFull>
            </FlexFull>
            <CenterHorizontalFull className="flex xl:hidden lg:justify-center pb-[1.5vh] md:p-[2vh]">
              <Button
                iconLeft={ChatIcon}
                buttonText="Click to Chat"
                onClick={() => setModalOpen(true)}
                className="px-[1.5vh]"
              />
            </CenterHorizontalFull>
          </VStackFull>
        </VStackFull>
      </CenterFull>

      <Modal
        isOpen={modalOpen}
        setModalOpen={setModalOpen}
        onClose={() => setModalOpen(false)}
        showTopClose={false}
        modalSize="h-screen w-screen"
        showBottomClose={false}
      >
        {chat && (
          <VStackFull gap="gap-[0px]" className="h-[100svh] justify-between">
            <FlexFull className="items-center justify-center pt-[1vh]">
              <Flex className="w-full h-fit max-w-[85svh] justify-center items-center">
                <ChatComponent
                  messages={chat.messages || []}
                  acceptedTerms={chat.acceptedTerms}
                />
              </Flex>
            </FlexFull>
            <FlexFull className="justify-center items-center h-[5vh] ">
              <AnimatedIconButton
                text="close"
                icon={CloseIcon}
                className={`${staggerMenuLinkStyles} px-[1vh] py-[0px]`}
                onClick={() => {
                  setModalOpen(false);
                }}
              />
            </FlexFull>
          </VStackFull>
        )}
      </Modal>
    </>
  );
}
