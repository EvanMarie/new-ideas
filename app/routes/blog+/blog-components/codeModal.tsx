import { useState } from "react";
import { BiCodeAlt } from "react-icons/bi";
import AnimatedIconButton from "~/buildingBlockComponents/animatedIconButton";
import CodeExample from "~/buildingBlockComponents/codeExample";
import IconButton from "~/buildingBlockComponents/iconButton";
import {
  Box,
  Center,
  FlexFull,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import Modal from "~/buildingBlockComponents/modal";
import Text from "~/buildingBlockComponents/text";

export default function CodeModal({
  code,
  title,
  isCenterFull = false,
  buttonText = "view code",
  useIcon = false,
}: {
  code: string;
  title: string;
  buttonText?: string;
  isCenterFull?: boolean;
  useIcon?: boolean;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className={isCenterFull ? "flex w-full justify-center" : ""}>
      {useIcon ? (
        <IconButton
          icon={BiCodeAlt}
          onClick={() => setModalOpen(true)}
          type="smallNormal"
        />
      ) : (
        <Box>
          <AnimatedIconButton
            icon={BiCodeAlt}
            text={buttonText}
            // className="text-slate-900 bg-cyan-400 px-[1vh] border-970-md shadowBroadLooser"
            onClick={() => setModalOpen(true)}
          />
        </Box>
      )}
      <Modal
        isOpen={modalOpen}
        setModalOpen={setModalOpen}
        showBottomClose={false}
        showTopClose={false}
        onClose={() => setModalOpen(false)}
        modalSize="w-full h-fit max-h-[90vh] sm:w-80% md:w-70% lg:w-60% xl:w-50% 2xl:w-40%"
      >
        <VStackFull gap="gap-[0px]" className="border-900-md shadowBroadLooser">
          <FlexFull className="rounded-b-none h-full max-h-[70vh] bg-slate-100 bg-gradient-to-b from-violet-400/50 via-indigo-400/50 to-cyan-500/50 border-900-md">
            <VStackFull
              gap="gap-[0px]"
              className="overflow-y-hidden rounded-none"
            >
              <Center className="w-full bg-indigo-900 rounded-[0.4vh] text-cyan-300 textShadow rounded-b-none">
                <Text className="text-[3vh] font-semibold">{title}</Text>
              </Center>
              <FlexFull className="h-full overflow-y-auto rounded-none insetShadowXl">
                <FlexFull className="h-fit py-[1vh] px-[2vh] ">
                  <CodeExample>{code}</CodeExample>
                </FlexFull>
              </FlexFull>
            </VStackFull>
          </FlexFull>
          <Center className="w-full bg-indigo-900 rounded-t-none">
            <AnimatedIconButton
              icon={BiCodeAlt}
              text="close"
              onClick={() => setModalOpen(false)}
            />
          </Center>
        </VStackFull>
      </Modal>
    </div>
  );
}
