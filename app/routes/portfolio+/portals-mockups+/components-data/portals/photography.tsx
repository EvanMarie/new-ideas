import FlexFull from "~/components/buildingBlocks/flexFull";
import { useRef, useState } from "react";

import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import { useScroll, motion, useTransform } from "framer-motion";
import Box from "~/components/buildingBlocks/box";
import Flex from "~/components/buildingBlocks/flex";
import AnimatedText from "../components/animatedText";
import VStack from "~/components/buildingBlocks/vStack";
import MainSlidingAnimation from "../components/mainSlidingAnimation";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Text from "~/components/buildingBlocks/text";
import Modal from "~/components/buildingBlocks/modal";
import Image from "~/components/buildingBlocks/image";
import IconButton from "~/components/buildingBlocks/iconButton";
import { ChatIcon, CloseIcon, ExpandIcon } from "styles";
import CenterFull from "~/components/buildingBlocks/centerFull";
import HStack from "~/components/buildingBlocks/hStack";
import Icon from "~/components/buildingBlocks/icon";
import ReturnToPortalsButton from "./components/returnToPortalsButton";
import SocialMediaIcons from "./components/socialMedia";
import ChatModal from "./components/chatModal";

export default function PhotographyPortal() {
  const layoutContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: layoutContainerRef,
  });
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const randomHeights = [
    "h-[30vh]",
    "h-[35vh]",
    "h-[40vh]",
    "h-[45vh]",
    "h-[50vh]",
    "h-[55vh]",
    "h-[60vh]",
  ];
  const items = () => {
    return Array.from({ length: 15 }, (_, index) => {
      const randomNum = Math.floor(Math.random() * 100) + 1;
      return {
        image: `https://picsum.photos/seed/${randomNum}/500/900`,
        height: randomHeights[Math.floor(Math.random() * randomHeights.length)],
      };
    });
  };
  const menuItems = [
    { title: "CV" },
    { title: "Bio" },
    { title: "Services" },
    { title: "Portfolio" },
    { title: "Contact" },
  ];
  const itemVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: (index: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: index * 0.25,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    }),
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [chatModalOpen, setChatModalOpen] = useState(false);

  function PhotographyChatButton() {
    return (
      <motion.div
        className="bg-sky-100 text-sky-900 hover:bg-sky-800 hover:text-sky-100 flex border-[0.2vh] border-sky-800 shadowBroadTight hover:cursor-pointer transition-200"
        whileHover={{
          scale: 1.03,
          rotate: -2,
          transition: { duration: 0.4 },
        }}
        whileTap={{
          scale: 0.8,
          rotate: 2,
          transition: { duration: 0.3 },
        }}
      >
        <HStack
          onClick={() => setChatModalOpen(true)}
          className="items-center px-[1vh] hover:cursor-pointer group text-[2vh] xxl:text-[2.3vh]"
        >
          <Icon
            icon={ChatIcon}
            containerClassName="group-hover:rotate-30 transition-400"
            iconClassName="text-sky-900 group-hover:text-sky-100 transition-400 text-[2.5vh]"
          />

          <Text>photography chat</Text>
        </HStack>
      </motion.div>
    );
  }
  return (
    <>
      <FlexFull className="h-[100svh] bg-gradient-to-b from-sky-500 via-sky-300 to-green-500 rounded-none">
        <TransitionFull className="rounded-none">
          <FlexFull
            className="flex w-screen h-[100svh] overflow-y-auto rounded-none"
            ref={layoutContainerRef}
          >
            <ReturnToPortalsButton />
            <FlexFull className="h-fit rounded-none bg-gradient-to-b from-sky-500 via-sky-300 to-green-500 min-h-[100svh] ">
              <motion.div
                className="h-[30vh] fixed top-0 right-0 left-0 justify-center items-center flex rounded-none border-b-970-md bg-[url('https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/sky.png?width=700&resize=contain&quality=60')] bg-bottom bg-cover z-20"
                style={{ opacity: opacity }}
              >
                <FlexFull className="h-full relative rounded-none bg-sky-600/60 bg-gradient-to-tl from-cyan-500/60 via-sky-300/60 to-cyan-500/60">
                  <VStack
                    className="absolute top-[2vh] left-[2vh] md:top-0 md:left-[3vh] lg:left-[5vh]"
                    align="items-start"
                    gap="gap-[0px]"
                  >
                    <AnimatedText
                      text="Cher Lavoie"
                      animationType="inFromBottom"
                      letterDelay={0.1}
                      damping={23}
                      stiffness={200}
                      textClassName="text-sky-100 text-[5.5vh] sm:text-[7vh] md:text-[8vh] textShadow font-semibold font-cursive leading-tight"
                    />

                    <AnimatedText
                      text="Photography & Graphic Art"
                      animationType="fadeIn"
                      letterDelay={0.1}
                      damping={23}
                      stiffness={200}
                      textClassName="text-sky-100 text-[2.6vh] sm:text-[4vh] md:text-[5vh] textShadow leading-tight "
                    />
                  </VStack>
                  <VStack
                    className="absolute bottom-[2vh] left-[2vh] md:bottom-[8vh] md:left-[3vh] lg:left-[5vh]   xxl:left-[6vh] xxl:bottom-[2vh]"
                    align="items-start"
                  >
                    <Flex className="flex md:hidden xxl:hidden">
                      <PhotographyChatButton />
                    </Flex>
                    <HStack gap="gap-[2vh]">
                      <SocialMediaIcons
                        direction="flex-row"
                        containerClassName="p-[0.7vh] sm:p-[1vh] bg-sky-100 text-sky-900 hover:bg-sky-800 hover:text-sky-100 transition-200 group md:p-[0.8vh] xxl:p-[1.3vh] shadowBroadTight"
                        iconClassName="sm:text-[2.4vh] md:text-[2.5vh] xxl:text-[2.7vh] text-sky-800 group-hover:text-sky-100"
                        outerContainerClassName="gap-[1vh] md:gap-[2vh]"
                      />
                      <Flex className="hidden md:flex">
                        <PhotographyChatButton />
                      </Flex>
                    </HStack>
                  </VStack>
                  {/* ********************* MENU ********************* */}

                  <motion.div
                    className="absolute right-0 bottom-0 flex flex-col md:flex-row md:justify-end md:items-center"
                    initial="hidden"
                    animate={"visible"}
                    variants={containerVariants}
                  >
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        custom={index}
                        className="py-[1vh] px-[2vh] sm:px-[3vh] md:px-[4vh] lg:px-[7] flex items-center  font-[500] text-sky-100 textShadow hover:text-sky-900 hover:lightTextShadow transition-200 justify-end md:justify-center"
                        whileHover={{
                          scale: 1.05,
                          rotate: -6,
                          transition: { duration: 0.4 },
                        }}
                        whileTap={{
                          scale: 0.9,
                          rotate: 6,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <motion.div className="text-[2.5vh] lg:text-[3vh] hover:cursor-pointer">
                          {item.title}
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                </FlexFull>
              </motion.div>

              {/* ********************* IMAGES  ********************* */}
              <VStackFull
                className="h-fit rounded-none pt-[30vh] relative pb-[2vh]"
                gap="gap-[0px]"
              >
                <Box className="w-full h-fit columns-1 md:columns-2 xl:columns-3 fullHD:columns-4 gap-0 z-10 bg-gradient-to-b from-sky-500 via-sky-300 to-green-400 shadowBroadNormal">
                  {items().map((item, index) => (
                    <MainSlidingAnimation hoverScale={1} key={index}>
                      <Box className="p-[2vh]">
                        <motion.div
                          className={`${item.height} border-950-md shadowBroadNormal  rounded-[1vh]`}
                          whileHover={{
                            scale: 1.01,
                            rotate: -1,
                            transition: { duration: 0.4 },
                          }}
                          whileTap={{
                            scale: 0.9,
                            rotate: 1,
                            transition: { duration: 0.3 },
                          }}
                        >
                          <img
                            src={item.image}
                            className="w-full h-full object-cover hover:cursor-pointer "
                            style={{ zIndex: -1 }}
                            onClick={() => {
                              setSelectedImage(item.image);
                              setImageModalOpen(true);
                            }}
                          />
                        </motion.div>
                      </Box>
                    </MainSlidingAnimation>
                  ))}
                </Box>

                {/* ********************* FOOTER ********************* */}
                <FlexFull className="h-[40vh] bg-[url('https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/forest.png?width=700&resize=contain&quality=60')] bg-center bg-cover rounded-t-none sticky bottom-0 left-0 right-0 ">
                  <FlexFull className="h-full bg-gradient-to-r from-cyan-500/70  to-stone-700/70 rounded-none">
                    <HStackFull className="h-full relative">
                      <Flex className="absolute bottom-[3vh] left-[1vh] font-bold">
                        © 2024 Cher Lavoie
                      </Flex>
                      <VStack
                        className="absolute bottom-[3vh] right-[1vh] text-sky-100 textShadow"
                        align="items-end"
                      >
                        <Text>PHOTOGRAPHY CHAT</Text>
                        <Text>CV</Text>
                        <Text>BIO</Text>
                        <Text>SERVICES</Text>
                        <Text>PORTFOLIO</Text>
                        <Text>CONTACT</Text>
                      </VStack>
                    </HStackFull>
                  </FlexFull>
                </FlexFull>
              </VStackFull>
            </FlexFull>
          </FlexFull>
        </TransitionFull>
      </FlexFull>
      {/* ********************* IMAGE MODAL ********************* */}
      <Modal
        isOpen={imageModalOpen}
        showBottomClose={false}
        showTopClose={false}
        setModalOpen={setImageModalOpen}
        onClose={() => setImageModalOpen(false)}
        modalSize="w-fit h-fit max-h-[100svh] max-w-[100vw]"
        overlayColor="bg-gradient-to-b from-sky-500 via-sky-300/50 to-green-500/50"
      >
        <CenterFull className="p-[1vh]">
          <Box className="border-970-md shadowBroadLoose relative ">
            <Box className="absolute top-[1vh] right-[1vh] z-10 bg-stone-800/60 hover:bg-stone-800 transition-400">
              <IconButton
                type="unstyled"
                icon={CloseIcon}
                iconClassName="text-sky-100 text-[2vh]"
                onClick={() => {
                  setImageModalOpen(false);
                }}
              />
            </Box>
            <CenterFull>
              <Image
                src={selectedImage}
                ariaLabel="Photography website example"
                alt="Photography website example"
                className="w-full h-[95svh]"
              />
            </CenterFull>
          </Box>
        </CenterFull>
      </Modal>
      {/* ********************* CHAT MODAL ********************* */}
      <Modal
        isOpen={chatModalOpen}
        showBottomClose={false}
        showTopClose={false}
        setModalOpen={setChatModalOpen}
        overlayColor="bg-gradient-to-b from-sky-500 via-sky-300/50 to-green-500/50"
        onClose={() => setChatModalOpen(false)}
        modalSize="w-full h-[100svh] sm:w-[90vw] md:w-[75vw] lg:w-[60vw] xl:w-[50vw] xxl:w-[40vw]"
      >
        <ChatModal
          onClose={() => setChatModalOpen(false)}
          chatTitle="Cher's Photography Chat"
          topCloseColor="text-sky-100"
          headerFooterStyles="bg-sky-900/90 text-sky-100"
          closeButtonStyles="bg-sky-100 text-sky-900 hover:bg-sky-600 hover:text-sky-100 transition-400 text-[2vh] lightTextShadow"
          chatStyles="bg-sky-300"
          chatbotName="Photography Expert"
          aiBubbleClassName="bg-sky-700 text-sky-100"
          userBubbleClassName="bg-emerald-600 text-sky-900"
          iconClassName="text-sky-100 group-hover:text-sky-900 transition-400"
          buttonClassName="bg-sky-900 p-[0.3vh] hover:bg-sky-100 transition-400 group"
          portalName="photography chat"
          systemPrompt="Welcome to Cher Lavoie Photography! I'm Cher's friendly chatbot assistant, here to help you explore the captivating world of professional photography. Whether you're interested in learning more about Cher's unique style, discussing your own photography needs, or simply want to chat about the art of capturing life's most precious moments, I'm here for you. Feel free to ask me anything about Cher's services, portfolio, or the magic of photography. Let's embark on this visual journey together and create memories that will last a lifetime!"
        />
      </Modal>
    </>
  );
}
