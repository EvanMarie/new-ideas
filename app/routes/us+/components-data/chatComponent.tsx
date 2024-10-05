import { BoxCheckedIcon, BoxUncheckedIcon, RefreshIcon } from "styles";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import IconButton from "~/components/buildingBlocks/iconButton";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Flex from "~/components/buildingBlocks/flex";
import ChatBubble, { AIChatBubble, UserChatBubble } from "./chatBubbles";
import { useNavigation, useSearchParams, useSubmit } from "@remix-run/react";
import { useEffect, useRef } from "react";
import Modal from "~/components/buildingBlocks/modal";
import { useState } from "react";
import HStack from "~/components/buildingBlocks/hStack";
import ChatTermsOfServiceContent from "./chatTermsOfService";
import CometTextSubmit from "./cometTextSubmit";
import ScrollProgressBar from "./scrollProgressBar";

export type ChatData = {
  messages: { text: string; timestamp: string; type: "ai" | "human" }[];
  acceptedTerms: { accepted: boolean; timestamp: string } | null;
};

export default function ChatComponent({ messages, acceptedTerms }: ChatData) {
  const [searchParams, setSearchParams] = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);
  const navigation = useNavigation();
  const submit = useSubmit();
  console.log(navigation.state);
  const isSubmitting = navigation.state === "submitting";
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [boxChecked, setBoxChecked] = useState(
    acceptedTerms?.accepted || false
  );
  useEffect(() => {
    if (!isSubmitting) {
      formRef.current?.reset();
    }
  }, [isSubmitting]);

  useEffect(() => {
    setBoxChecked(acceptedTerms?.accepted || false);
  }, [acceptedTerms]);

  const toggleCheckBox = () => {
    setBoxChecked(!boxChecked);
    setSearchParams({ acceptTerms: boxChecked ? "false" : "true" });
  };

  const [modalOpen, setModalOpen] = useState(false);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      submit({ chatInput: event.currentTarget.value }, { method: "post" });
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

  return (
    <>
      <FlexFull className="h-[94svh] bg-500-radial3op75 border-550-md px-[1vh] pt-[1vh] xl:rounded-b-[0.7vh]">
        <VStackFull
          className={`h-full justify-between relative overflow-hidden`}
          gap="gap-[0px]"
        >
          <FlexFull
            ref={chatContainerRef}
            className={`h-[67svh] flex-shrink-0 overflow-x-hidden overflow-y-auto insetShadowXxl bg-col-950 border-900-md hide-scrollbar`}
          >
            <ScrollProgressBar
              containerRef={chatContainerRef}
              position="absolute inset-0"
              height="h-0.5vh"
            />
            <VStackFull className={`h-fit p-[1.5vh]`} gap="gap-[1.5vh]">
              {messages.map((entry, index) => {
                return entry.type === "ai" ? (
                  <ChatBubble
                    key={index}
                    message={entry.text}
                    timestamp={entry.timestamp}
                    userType="assistant"
                  />
                ) : (
                  <ChatBubble
                    key={index}
                    message={entry.text}
                    timestamp={entry.timestamp}
                    userType="user"
                  />
                );
              })}
            </VStackFull>
          </FlexFull>
          <VStackFull className="h-[25svh] flex-shrink-0">
            <HStackFull className="justify-between items-center h-[4svh] px-[1vh]">
              <HStack className="textShadow justify-center text-sm-tight items-center h-[3vh] p-[0.5vh] bg-col-950 text-slate-100">
                <IconButton
                  type="smallUnstyled"
                  icon={boxChecked ? BoxCheckedIcon : BoxUncheckedIcon}
                  label="agree to terms"
                  onClick={() => toggleCheckBox()}
                  tooltipPlacement="topRight"
                />
                I have read and agree to the
                <Flex
                  onClick={() => setModalOpen(true)}
                  className="hover:cursor-pointer text-col-500 hover:text-col-pink text-sm-tight"
                >
                  terms of use.
                </Flex>
              </HStack>
              <IconButton
                icon={RefreshIcon}
                tooltipPlacement="left"
                label="clear chat"
                type="negative"
                onClick={() => setSearchParams({ clearHistory: "true" })}
              />
            </HStackFull>
            <CometTextSubmit
              textAreaHeight="h-[18svh]"
              isLoading={isSubmitting}
              isDisabled={!boxChecked}
              onChange={() => {}}
            />
          </VStackFull>
        </VStackFull>
      </FlexFull>

      <Modal
        modalSize="w-full h-full max-h-full overflow-y-auto md:h-fit md:w-2/3 xl:w-1/2 xxl:w-1/3"
        showBottomClose={false}
        showTopClose={false}
        isOpen={modalOpen}
        setModalOpen={setModalOpen}
        onClose={() => setModalOpen(false)}
      >
        {/* <TermsOfUseContent onClose={() => setModalOpen(false)} /> */}
        <ChatTermsOfServiceContent onClick={() => setModalOpen(false)} />
      </Modal>
    </>
  );
}
