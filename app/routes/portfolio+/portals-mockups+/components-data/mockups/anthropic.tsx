import { useEffect, useRef, useState } from "react";
import { TbMenu } from "react-icons/tb";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStack from "~/components/buildingBlocks/hStack";
import Icon from "~/components/buildingBlocks/icon";
import Text from "~/components/buildingBlocks/text";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import { motion } from "framer-motion";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import Image from "~/components/buildingBlocks/image";
import Box from "~/components/buildingBlocks/box";
import VStack from "~/components/buildingBlocks/vStack";
import Divider from "~/components/buildingBlocks/divider";
import Modal from "~/components/buildingBlocks/modal";
import { CloseIcon } from "styles";
import { IoClose } from "react-icons/io5";
import AnimteInContainer from "./components/animateInContainer";
import AnimatedComponent from "~/components/specialty/animateOnScroll";
import ReturnToMockupsButton from "./components/returnToMockupsButton";

export default function AnthropicDemo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const layoutContainerRef = useRef<HTMLDivElement>(null);
  const [isAtTop, setIsAtTop] = useState(true);
  const footerLinkStyle =
    "text-[#fca688] hover:text-[#f57d53] hover:cursor-pointer transition-400";

  const textVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 50, damping: 14 },
    },
    hidden: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.5, type: "spring", stiffness: 50, damping: 14 },
    },
  };

  const slashVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 50, damping: 14 },
    },
    hidden: {
      opacity: 0,
      x: 250,
      transition: { duration: 0.5, type: "spring", stiffness: 50, damping: 14 },
    },
  };

  useEffect(() => {
    const layoutContainer = layoutContainerRef.current;
    const handleScroll = () => {
      if (layoutContainer) {
        const atTop = layoutContainer.scrollTop <= 10;
        setIsAtTop(atTop);
      }
    };

    layoutContainer?.addEventListener("scroll", handleScroll);
    return () => layoutContainer?.removeEventListener("scroll", handleScroll);
  }, []);

  const workContainerDimensions = "w-[85vw] md:w-[40vw] h-fit md:h-full";
  function WorkContainer({
    heading,
    text,
    date,
    className,
  }: {
    heading: string;
    text: string;
    date: string;
    className?: string;
  }) {
    return (
      <Flex
        className={`w-full h-full p-[2.5vh] bg-[#cc785c]/20 rounded-[3vh] ${className}`}
      >
        <VStackFull
          align="items-start"
          gap="gap-[1.5vh]"
          className="text-[1.9vh] md:h-full md:justify-between"
        >
          <Text className="text-[1.9vh] leading-tight">{heading}</Text>
          <Text className="text-[2.5vh] font-semibold">{text}</Text>
          <Text className="leading-loose text-black/60">{date}</Text>
        </VStackFull>
      </Flex>
    );
  }

  return (
    <FlexFull
      className="h-[100svh] bg-white overflow-y-auto "
      ref={layoutContainerRef}
    >
      <ReturnToMockupsButton />
      <FlexFull
        className="bg-[#cc785c]/20 h-fit pt-[6vh] rounded-none"
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        {/* ************************************ HEADING ************************************ */}
        <HStackFull className="fixed top-0 left-0 right-0 h-[7vh] rounded-none bg-[#ebccc3] items-center justify-between font-bold px-[2vh] lg:px-[5vh] z-10">
          <motion.div className="text-[3vh] flex w-fi">
            <span style={{ fontSize: "inherit" }}>A</span>
            <motion.span
              className={isAtTop ? "hidden" : "w-fit max-w-80%"}
              style={{ fontSize: "inherit" }}
              variants={slashVariants}
              initial="hidden"
              animate={isAtTop ? "hidden" : "visible"}
            >
              \
            </motion.span>

            <motion.span
              style={{ fontSize: "inherit" }}
              variants={textVariants}
              initial="visible"
              animate={isAtTop ? "visible" : "hidden"}
              className="whitespace-nowrap"
            >
              NTHROP\C -ESQUE
            </motion.span>
          </motion.div>
          <HStack gap="gap-[1vh] lg:gap-[2vh] xl:gap-[4vh] xxl:gap-[5vh] h-full items-center hidden md:flex">
            <Text>ClaudETTE</Text> <Text>API</Text> <Text>Research</Text>
            <Text>Company</Text> <Text>News</Text> <Text>Careers</Text>
          </HStack>
          <Flex
            className="h-full items-start pt-[1vh] md:hidden flex-shrink-0 justify-end hover:cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <Icon icon={TbMenu} iconClassName="text-[4vh] " />
          </Flex>
        </HStackFull>
        <VStackFull className="h-fit py-[1vh] rounded-none" gap="gap-[0px]">
          {/* ************************************ ONE ************************************ */}
          <FlexFull className="h-fit  bg-[#ebccc3] rounded-none py-[6vh] md:py-[8vh] xl:py-[9vh] xxl:py-[11vh] xl:pl-[10vh] xxl:pl-[15vh] relative">
            <Flex className="hidden xl:flex absolute right-[5vh] bottom-0 w-[25vw] xxl:w-[20vw] xxl:right-[20vh]">
              <Image
                src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/anthropic_demo_image_2.png?width=600&resize=contain&quality=75"
                alt="main Anthropic mockup image"
                ariaLabel="main Anthropic mockup image"
                className="w-full h-full"
              />
            </Flex>
            <VStackFull
              align="items-start"
              gap="gap-[2vh] lg:gap-[3vh] xl:gap-[4vh]  "
              className="xl:w-[60vw] xxl:w-[50vw] "
            >
              <CenterHorizontalFull>
                <Flex className="w-[85vw] md:w-[75vw] leading-tight">
                  <Text>
                    <AnimteInContainer
                      delay={1.3}
                      useSpan
                      className="text-[4vh] lg:text-[5vh] xl:text-[6vh]"
                    >
                      Some text about the AI{" "}
                    </AnimteInContainer>
                    <AnimteInContainer
                      delay={0.9}
                      useSpan
                      className="underline text-[4vh] lg:text-[5vh] xl:text-[6vh]"
                    >
                      research
                    </AnimteInContainer>{" "}
                    <AnimteInContainer
                      delay={1.5}
                      useSpan
                      className=" text-[4vh] lg:text-[5vh] xl:text-[6vh]"
                    >
                      and{" "}
                    </AnimteInContainer>
                    <AnimteInContainer
                      delay={1.1}
                      useSpan
                      className="underline text-[4vh] lg:text-[5vh] xl:text-[6vh]"
                    >
                      products
                    </AnimteInContainer>{" "}
                    <AnimteInContainer
                      delay={1.7}
                      useSpan
                      className=" text-[4vh] lg:text-[5vh] xl:text-[6vh]"
                    >
                      promoting safety first
                    </AnimteInContainer>
                  </Text>
                </Flex>
              </CenterHorizontalFull>
              <CenterHorizontalFull>
                <FlexFull className="flex-col gap-[2vh] items-center md:flex-row md:justify-center md:w-85% md:h-full xl:gap-[4vh] xxl:gap-[6vh]">
                  <CenterHorizontalFull className="md:h-full">
                    <AnimteInContainer delay={0.3}>
                      <Flex className="w-[85vw] md:w-full h-fit p-[2.5vh] bg-rose-100 rounded-[3vh] lg:w-[40vh] xl:w-[45vh]">
                        <VStackFull align="items-start" gap="gap-[0.5vh]">
                          <Flex className="bg-[#f57d53] text-rose-100 py-[0.5vh] px-[1vh] font-semibold">
                            NEW
                          </Flex>
                          <Flex className="w-60%">
                            <Text className="text-[2.5vh] text-black font-semibold leading-tight">
                              Claudette 3, now available
                            </Text>
                          </Flex>{" "}
                          <Text className="text-[2vh]">
                            Some description about this new AI model, that is
                            super fast and conversational.{" "}
                          </Text>
                          <CenterHorizontalFull>
                            <Flex className="px-[5vh] py-[2vh] w-85% justify-center rounded-[2vh] bg-[#120c09] text-[#fca688] text-[1.8vh] hover:bg-[#120c09]/60 transition-400 hover:cursor-pointer">
                              Talk to Claudette
                            </Flex>
                          </CenterHorizontalFull>
                        </VStackFull>
                      </Flex>
                    </AnimteInContainer>
                  </CenterHorizontalFull>
                  <CenterHorizontalFull className="md:h-full">
                    <AnimteInContainer delay={0.6}>
                      <Flex className="w-[85vw] md:w-90% h-fit md:h-full p-[2.5vh] bg-rose-100 rounded-[3vh] lg:w-[40vh] xl:w-[45vh]">
                        <VStackFull
                          align="items-start"
                          gap="gap-[1vh]"
                          className="md:h-full md:justify-evenly"
                        >
                          <Flex>API</Flex>
                          <Flex>
                            <Text className="text-[2.5vh] text-black font-semibold leading-tight">
                              Build with Claudette
                            </Text>
                          </Flex>{" "}
                          <Text className="text-[2vh]">
                            Start using Claudette, and make your business
                            amazing!
                          </Text>
                          <CenterHorizontalFull>
                            <Flex className="px-[5vh] py-[2vh]  w-85% justify-center  rounded-[2vh] text-[1.8vh] border-[0.3vh] border-[#deac9b] hover:cursor-pointer hover:bg-[#f57d53]/20 transition-400">
                              Start chatting
                            </Flex>
                          </CenterHorizontalFull>
                        </VStackFull>
                      </Flex>
                    </AnimteInContainer>
                  </CenterHorizontalFull>
                </FlexFull>
              </CenterHorizontalFull>
            </VStackFull>
          </FlexFull>
          {/* ************************************ TWO ************************************ */}
          <FlexFull className="h-fit lg:h-[50vh] bg-rose-100 rounded-none py-[4vh] justify-center">
            <VStack className="w-[85vw]" gap="gap-[2vh] h-full justify-around">
              <FlexFull>
                <Text className="text-[2.5vh] font-semibold">Our Work</Text>
              </FlexFull>
              <FlexFull className="flex-col items-center md:justify-evenly md:flex-row gap-[3vh]">
                <AnimatedComponent runOnce className={workContainerDimensions}>
                  <WorkContainer
                    heading="Announcments"
                    text="Introducing Claudette, the next generation of AI."
                    date="March 1, 2024"
                  />
                </AnimatedComponent>
                <AnimatedComponent runOnce className={workContainerDimensions}>
                  <WorkContainer
                    heading="Research | AI"
                    text="Introducing ground-breaking, ethical, and innovative AI research."
                    date="February 20, 2024"
                  />
                </AnimatedComponent>
                <AnimatedComponent
                  runOnce
                  className={`${workContainerDimensions}flex md:hidden xl:flex`}
                >
                  <WorkContainer
                    heading="Announcments"
                    text="AI with values, safety, and security that you can depend on."
                    date="February 12, 2024"
                  />
                </AnimatedComponent>
              </FlexFull>
            </VStack>
          </FlexFull>
          {/* ************************************ THREE ************************************ */}
          <FlexFull className="h-fit py-[5vh]  md:justify-center bg-[#ebccc3] rounded-none">
            <FlexFull className="gap-[5vh] flex-col md:flex-row md:w-[85vw] h-full items-center">
              <CenterHorizontalFull className="h-fit py-[5vh] md:w-[40vw]">
                <Box className="w-[65vw] h-[25vh] lg:w-[40vw] lg:h-[35vh] xl:w-[30vw] rounded-[3vh]">
                  <Image
                    src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/anthropic-demo-image.png?width=500&resize=contain&quality=50"
                    alt="work at Anthropic-esque"
                    ariaLabel="work at Anthropic-esque"
                    className="w-full h-full rounded-[3vh]"
                  />
                </Box>
              </CenterHorizontalFull>
              <FlexFull className="h-fit justify-center md:w-[40vw] items-center lg:h-ful">
                <VStack align="items-start" className="w-[85vw] h-full ">
                  <Text className="font-semibold text-[2.5vh]">
                    Work with us
                  </Text>
                  <Text className="text-[2vh]">
                    We are a company that focuses on ensuring the safety and
                    reliability of artificial intelligence systems through
                    extensive research and development. Their diverse team
                    consists of experts from various fields, including machine
                    learning, physics, policy, and product development.{" "}
                  </Text>
                </VStack>
              </FlexFull>
            </FlexFull>
          </FlexFull>
          {/* ************************************ FOUR ************************************ */}
          <FlexFull className="h-fit bg-[#120c09] rounded-none ">
            <CenterHorizontalFull>
              <VStackFull className="pb-[1vh]">
                <Flex className="w-[85vw]">
                  <FlexFull className="py-[5vh] flex-col items-start lg:flex-row">
                    <Flex className="lg:w-[30vw]">
                      <Text className="text-[4vh] text-rose-100 font-semibold">
                        A\
                      </Text>
                    </Flex>
                    <VStackFull
                      className=" py-[3vh] text-[2vh] lg:text-[1.6vh] lg:w-[25vw]"
                      align="items-start"
                    >
                      <Text className={footerLinkStyle}>Claudette</Text>
                      <Text className={footerLinkStyle}>API</Text>
                      <Text className={footerLinkStyle}>Research</Text>
                      <Text className={footerLinkStyle}>Company</Text>
                      <Text className={footerLinkStyle}>Customers</Text>
                      <Text className={footerLinkStyle}>News</Text>
                      <Text className={footerLinkStyle}>Careers</Text>
                    </VStackFull>
                    <Divider className="lg:hidden" />
                    <VStackFull
                      className="py-[3vh] text-[2vh] lg:text-[1.6vh] lg:w-[25vw]"
                      align="items-start"
                    >
                      <Text className={footerLinkStyle}>Press Inquiries</Text>
                      <Text className={footerLinkStyle}>Support</Text>
                      <Text className={footerLinkStyle}>Status</Text>
                      <Text className={footerLinkStyle}>Twitter</Text>
                      <Text className={footerLinkStyle}>LinkedIn</Text>
                      <Text className={footerLinkStyle}>Availability</Text>
                    </VStackFull>
                    <Divider className="lg:hidden" />
                    <VStackFull
                      className="py-[3vh] text-[2vh] lg:text-[1.6vh] lg:w-[25vw]"
                      align="items-start"
                    >
                      <Text className={footerLinkStyle}>
                        Terms of Service - Consumer
                      </Text>
                      <Text className={footerLinkStyle}>
                        Terms of Service - Commercial
                      </Text>
                      <Text className={footerLinkStyle}>Privacy Policy</Text>
                      <Text className={footerLinkStyle}>
                        Acceptable Use Policy
                      </Text>
                      <Text className={footerLinkStyle}>
                        Responsible Disclosure Policy
                      </Text>
                      <Text className={footerLinkStyle}>Compliance</Text>
                      <Text className={footerLinkStyle}>Privacy Choices</Text>
                    </VStackFull>
                  </FlexFull>
                </Flex>
                <Flex className="w-[85vw] pt-[3vh] text-[2vh] pb-[1vh]">
                  <Text className={footerLinkStyle}>
                    © 2024 Anthropic-esque
                  </Text>
                </Flex>
              </VStackFull>
            </CenterHorizontalFull>
          </FlexFull>
        </VStackFull>
      </FlexFull>
      {/* ************************************ MODAL ************************************ */}
      <Modal
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        setModalOpen={setMenuOpen}
        modalSize="w-full h-full"
        showBottomClose={false}
        showTopClose={false}
      >
        <FlexFull className="h-full bg-[#120c09]/95 backdrop-blur-sm overflow-y-auto rounded-none">
          <VStackFull
            className="px-[3vh] sm:px-[5vh] py-[1vh] h-fit"
            gap="gap-[5vh]"
          >
            <HStackFull className="justify-between items-center">
              {" "}
              <Text className="text-[4vh] text-rose-100 font-semibold">A\</Text>
              <Icon
                icon={IoClose}
                onClick={() => setMenuOpen(false)}
                iconClassName="text-rose-100 text-[5vh]"
              />
            </HStackFull>
            <VStackFull
              className="py-[2vh text-[4vh] text-rose-100 font-500"
              align="item-start"
              gap="gap-[0.2vh]"
            >
              <Text className={footerLinkStyle}>Claudette</Text>
              <Text className={footerLinkStyle}>API</Text>
              <Text className={footerLinkStyle}>Research</Text>
              <Text className={footerLinkStyle}>Company</Text>
              <Text className={footerLinkStyle}>News</Text>
              <Text className={footerLinkStyle}>Careers</Text>
            </VStackFull>
            <VStackFull
              className="py-[2vh] text-[2vh] text-rose-100/70 pl-[2vh]"
              align="items-start"
            >
              <Text className={footerLinkStyle}>Press Inquiries</Text>
              <Text className={footerLinkStyle}>Support</Text>
              <Text className={footerLinkStyle}>Status</Text>
              <Text className={footerLinkStyle}>Twitter</Text>
              <Text className={footerLinkStyle}>LinkedIn</Text>
              <Text className={footerLinkStyle}>Availability</Text>
              <Text className={footerLinkStyle}>
                Terms of Service - Consumer
              </Text>
              <Text className={footerLinkStyle}>
                Terms of Service - Commercial
              </Text>
              <Text className={footerLinkStyle}>Privacy Policy</Text>
              <Text className={footerLinkStyle}>Acceptable Use Policy</Text>
              <Text className={footerLinkStyle}>
                Responsible Disclosure Policy
              </Text>
              <Text className={footerLinkStyle}>Compliance</Text>
            </VStackFull>
            <Flex className="w-[85vw] text-[#fca688] pt-[3vh] text-[2vh]">
              © 2024 Anthropic-esque
            </Flex>
          </VStackFull>
        </FlexFull>
      </Modal>
    </FlexFull>
  );
}
