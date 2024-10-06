import { useImageGenerator } from "~/hooks/useImageGenerator";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import FlexFull from "~/components/buildingBlocks/flexFull";
import { motion } from "framer-motion";
import Flex from "~/components/buildingBlocks/flex";
import Image from "~/components/buildingBlocks/image";
import { Form } from "@remix-run/react";
import TextAreaVStack from "~/components/buildingBlocks/textAreaVStack";
import Button from "~/components/buildingBlocks/button";
import { useEffect, useRef, useState } from "react";
import CenterFull from "~/components/buildingBlocks/centerFull";
import Modal from "~/components/buildingBlocks/modal";
import Icon from "~/components/buildingBlocks/icon";
import { CloseIcon, ExpandIcon } from "styles";
import Box from "~/components/buildingBlocks/box";
import { FaExpand } from "react-icons/fa";
import VStack from "~/components/buildingBlocks/vStack";
import Text from "~/components/buildingBlocks/text";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import { IoMdDownload } from "react-icons/io";
import { useSingleTextGen } from "~/hooks/useSingleTextGen";
import Center from "~/components/buildingBlocks/center";

export default function CoolCatQuizzesImage({
  itemDescription,
}: {
  itemDescription: string;
}) {
  const {
    isLoading,
    submitChatMessage,
    response: imagePrompt,
  } = useSingleTextGen({
    systemPrompt:
      "Generate a concise and detailed image prompt for Dall-E 3 from the text provided.  Make sure to specify no text in the image.",
  });

  useEffect(() => {
    if (itemDescription) {
      submitChatMessage(itemDescription);
    }
  }, [itemDescription]);

  const { generateImage, imageData, isSubmitting } = useImageGenerator();

  useEffect(() => {
    if (imagePrompt) {
      console.log("Generating image with prompt: ", imagePrompt);
      generateImage({ prompt: imagePrompt });
    }
  }, [imagePrompt]);

  const [modalOpen, setModalOpen] = useState(false);

  const downloadImage = () => {
    if (imageData?.data?.url) {
      const link = document.createElement("a");
      link.href = imageData.data.url + "?download=cool-cat-quizzes-image.webp";
      link.download = "cool-cat-quizzes-image.webp";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.error("No image URL available for download.");
    }
  };

  function ImageComponent({
    imageURL,
    isModal = false,
  }: {
    imageURL: string;
    isModal?: boolean;
  }) {
    return (
      <FlexFull
        className={`${
          isModal
            ? "h-fit relative max-h-[90vh] max-w-[90vw]"
            : "h-full relative"
        }`}
      >
        <VStack className="absolute z-10 top-[2vh] right-[2vh]">
          {isModal ? (
            <Box
              className=" bg-slate-100/80 p-[0.7vh] hover:cursor-pointer"
              onClick={() => setModalOpen(false)}
              hoverCursor="hover:cursor-pointer"
            >
              <Icon icon={CloseIcon} hoverCursor="hover:cursor-pointer" />
            </Box>
          ) : (
            <Box
              className=" bg-slate-100/80 p-[0.7vh] hover:cursor-pointer"
              hoverCursor="hover:cursor-pointer"
              onClick={() => setModalOpen(true)}
            >
              <Icon icon={FaExpand} hoverCursor="hover:cursor-pointer" />{" "}
            </Box>
          )}{" "}
          <Box
            className=" bg-slate-100/80 p-[0.7vh] hover:cursor-pointer"
            hoverCursor="hover:cursor-pointer"
            onClick={downloadImage}
          >
            <Icon icon={IoMdDownload} hoverCursor="hover:cursor-pointer" />{" "}
          </Box>
        </VStack>

        <Image
          src={imageURL}
          ariaLabel="Cool Cat Quizzes Image"
          alt="Cool Cat Quizzes Image"
          className="w-full h-full rounded-[0.5vh]"
        />
      </FlexFull>
    );
  }

  const imageContainerStyles =
    "w-[80vw] h-[80vw] sm:w-[70vw] sm:h-[70vw] md:w-[50vh] md:h-[50vh] border-970-md shadowBroadNormal";

  return (
    <>
      {imageData ? (
        <Box className={imageContainerStyles}>
          <ImageComponent imageURL={imageData?.data?.url || ""} />
        </Box>
      ) : (
        <Center className={imageContainerStyles}>
          <Text className="animate-ping duration-300">generating image</Text>
        </Center>
      )}
      <Modal
        isOpen={modalOpen}
        showBottomClose={false}
        showTopClose={false}
        setModalOpen={setModalOpen}
        onClose={() => setModalOpen(false)}
        modalSize="w-full h-[100svh] sm:w-[90vw] md:w-[75vw] lg:w-[60vw] xl:w-[50vw] xxl:w-[40vw]"
      >
        <CenterFull>
          <ImageComponent imageURL={imageData?.data?.url || ""} isModal />
        </CenterFull>
      </Modal>
    </>
  );
}
