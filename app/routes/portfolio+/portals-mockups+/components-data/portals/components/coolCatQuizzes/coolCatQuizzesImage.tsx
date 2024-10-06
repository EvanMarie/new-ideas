import { useEffect, useState } from "react";

import { CloseIcon } from "styles";
import { FaExpand } from "react-icons/fa";

import { IoMdDownload } from "react-icons/io";
import { useSingleTextGen } from "~/hooks/useSingleTextGen";
import { useImageGenerator } from "~/hooks/useImageGenerator";
import {
  Box,
  Center,
  CenterFull,
  FlexFull,
  VStack,
} from "~/buildingBlockComponents/mainContainers";
import Icon from "~/buildingBlockComponents/icon";
import Image from "~/buildingBlockComponents/image";
import Text from "~/buildingBlockComponents/text";
import Modal from "~/buildingBlockComponents/modal";

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
          isModal ? "h-fit relative max-h-90vh max-w-90vw" : "h-full relative"
        }`}
      >
        <VStack className="absolute z-10 top-1vh right-1vh" gap="gap-1vh">
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
