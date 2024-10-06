import { useImageGenerator } from "~/hooks/useImageGenerator";
import DeveloperSectionContainer from "./developerSectionContainer";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import DeveloperTextElement from "./developerTextElement";
import DeveloperTextContainer from "./developerTextContainer";
import FlexFull from "~/components/buildingBlocks/flexFull";
import DeveloperHeading from "./developerHeading";
import { motion } from "framer-motion";
import {
  DeveloperContentStack,
  DeveloperStackHalf,
} from "./developerContentStack";
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

export default function DeveloperImages({
  highlightColor,
  border,
  imageGradient,
  buttonBg,
  buttonHover,
  overlayBackground,
}: {
  highlightColor: string;
  border: string;
  imageGradient: string;
  buttonBg: string;
  buttonHover: string;
  overlayBackground: string;
}) {
  const { generateImage, imageData, isSubmitting } = useImageGenerator();
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (!isSubmitting) {
      formRef.current?.reset();
    }
  }, [isSubmitting]);
  const [modalOpen, setModalOpen] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const prompt = formData.get("imagePrompt") as string;
    const stylePrompt =
      ". techology advanced AI artificial intelligence computer generation brilliant lighting with softglow, backlit, quantum visionary style, evocative hues, highly detailed masterpiece, no text, no words, no alpha";
    generateImage({ prompt: prompt + stylePrompt });
  };

  const downloadImage = () => {
    if (imageData?.data?.url) {
      const link = document.createElement("a");
      link.href = imageData.data.url + "?download=parker-apps-image.webp";
      link.download = "parker-apps-image.webp";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.error("No image URL availa  ble for download.");
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
          alt="user generated image"
          ariaLabel="User Generated Image"
          className="w-full h-full rounded-[0.5vh]"
        />
      </FlexFull>
    );
  }

  return (
    <>
      <DeveloperSectionContainer>
        <DeveloperContentStack className="">
          <DeveloperStackHalf>
            <VStackFull>
              <FlexFull className="px-[1vh] sm:px-[2vh] md:px-[3vh] lg:px-[1vh] xl:px-[3vh] xxl:px-[4vh]">
                <DeveloperTextContainer
                  border={border}
                  containerClassName="h-fit"
                >
                  <DeveloperHeading
                    highlightColor={highlightColor}
                    heading="AI Image Generation"
                    subheading=" from Parker Apps"
                  />
                  <DeveloperTextElement>
                    Developed by the talented team at Parker Apps, our image
                    creator harnesses the power of stable diffusion technology
                    to bring your wildest imaginative ideas to life.
                  </DeveloperTextElement>
                  <DeveloperTextElement>
                    Dive in, experiment, and let your creativity run wild with
                    our state of the art AI image generation reminiscent of
                    quantum visionary art. Get ready to be amazed by the
                    results!
                  </DeveloperTextElement>
                </DeveloperTextContainer>
              </FlexFull>
              <Form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex items-center flex-col gap-[0.5vh]"
              >
                <CenterHorizontalFull className="text-[2vh] font-semibold">
                  <Text>Enter your image prompt:</Text>
                </CenterHorizontalFull>
                <textarea
                  name="imagePrompt"
                  className="w-90% sm:w-80% md:w-70% lg:max-w-[45vw] h-[10vh] border-970-md shadowBroadNormal ring-2 ring-stone-100 focus:ring-2 focus:ring-stone-100 focus:border-stone-100 focus:outline-none rounded-[0.5vh] p-[1vh] text-stone-900 transition-400 focus:insetShadowXl"
                  style={{ resize: "none" }}
                />
                {!isSubmitting ? (
                  <motion.button
                    type="submit"
                    className={`${buttonBg} ${buttonHover} hover:text-stone-100 transition-200 px-[1vh] py-[0.3vh] border-970-md shadowBroadNormal`}
                    whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
                    whileTap={{ scale: 0.9, transition: { duration: 0.4 } }}
                  >
                    generate image
                  </motion.button>
                ) : (
                  <Flex
                    className={`px-[1vh] py-[0.3vh] border-970-md shadowBroadNormal ${buttonBg} `}
                  >
                    your image is being generated
                  </Flex>
                )}
              </Form>
            </VStackFull>
          </DeveloperStackHalf>
          <DeveloperStackHalf className="">
            <VStackFull className="" gap="gap-[2vh]">
              <Flex className="w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[40vw] lg:h-[50vh] xxl:w-[30vw] border-970-md shadowBroadLoose">
                {imageData?.data && !isSubmitting ? (
                  <ImageComponent imageURL={imageData?.data?.url || ""} />
                ) : (
                  <CenterFull
                    className={`${imageGradient} h-[30svh] min-h-[30svh] ${border} text-[2vh] font-semibold`}
                  >
                    {isSubmitting ? (
                      <VStack>
                        <Text className="animate-ping duration-300">
                          generating image
                        </Text>
                      </VStack>
                    ) : (
                      <VStack>
                        <Text className="">Your image will appear here.</Text>
                      </VStack>
                    )}
                  </CenterFull>
                )}
              </Flex>
            </VStackFull>
          </DeveloperStackHalf>
        </DeveloperContentStack>
      </DeveloperSectionContainer>
      <Modal
        isOpen={modalOpen}
        showBottomClose={false}
        showTopClose={false}
        setModalOpen={setModalOpen}
        overlayColor={overlayBackground}
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
