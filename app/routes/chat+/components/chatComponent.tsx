import { useNavigation, useSearchParams, useSubmit } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { useState } from "react";
import ChatTermsOfServiceContent from "./chatTermsOfService";
import {
  Box,
  Flex,
  FlexFull,
  HStack,
  HStackFull,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import ScrollProgressBar from "~/mainDesignComponents/visual-elements/scrollProgressBar";
import IconButton from "~/buildingBlockComponents/iconButton";
import Modal from "~/buildingBlockComponents/modal";
import ChatBubble from "./chatBubble";
import { BoxCheckedIcon, BoxUncheckedIcon, RefreshIcon } from "styles";
import CometTextSubmit from "./cometTextSubmit";
import InsetShadowOverlay from "~/mainDesignComponents/visual-elements/insetShadowOverlay";

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

  // const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
  //   if (event.key === "Enter" && !event.shiftKey) {
  //     event.preventDefault();
  //     submit({ chatInput: event.currentTarget.value }, { method: "post" });
  //   }
  // };

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
      <FlexFull className="h-95svh md:h-96svh md:max-w-90vw lg:max-w-70vw xl:max-w-100vh md:p-0.5vh">
        <FlexFull className="h-full bg-500-radial3op75 rounded-none md:rounded-1vh md:border-550-md p-1vh ">
          <VStackFull
            className={`h-full justify-between overflow-hidden`}
            gap="gap-[0px]"
          >
            <Box className="relative">
              <FlexFull
                ref={chatContainerRef}
                className={`h-70svh flex-shrink-0 overflow-x-hidden overflow-y-auto insetShadow6xl bg-col-950 border-800-md hide-scrollbar`}
              >
                <InsetShadowOverlay position="top" size="sm" />
                <InsetShadowOverlay size="sm" />
                <ScrollProgressBar
                  zIndex="z-50"
                  containerRef={chatContainerRef}
                  position="absolute inset-0"
                  height="h-0.5vh"
                  color="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-purple-300"
                />
                <VStackFull className={`h-fit p-1.5vh`} gap="gap-1.5vh">
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
            </Box>
            <VStackFull className="h-25svh flex-shrink-0">
              <HStackFull className="justify-between items-center h-4svh px-1vh">
                <HStack
                  className="textShadow justify-center text-sm-tight items-center h-3vh p-0.5vh bg-slate-800/70 text-slate-100"
                  gap="gap-0.5vh"
                >
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
                    className="hover:cursor-pointer text-col-500 hover:text-fuchsia-300 transition-300 text-sm-tight"
                  >
                    terms of use.
                  </Flex>
                </HStack>
                <IconButton
                  icon={RefreshIcon}
                  tooltipPlacement="left"
                  label="clear chat"
                  type="smallNegative"
                  onClick={() => setSearchParams({ clearHistory: "true" })}
                />
              </HStackFull>
              <CometTextSubmit
                textAreaHeight="h-18svh"
                isLoading={isSubmitting}
                isDisabled={!boxChecked}
                onChange={() => {}}
              />
            </VStackFull>
          </VStackFull>
        </FlexFull>
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
