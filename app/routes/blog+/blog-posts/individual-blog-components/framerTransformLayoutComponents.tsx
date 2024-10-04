import React, { useEffect, useState } from "react";
import { useScroll, useTransform, motion, LayoutGroup } from "framer-motion";
import { useRef } from "react";
import {
  Box,
  Center,
  Flex,
  FlexFull,
  VStack,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import Icon from "~/buildingBlockComponents/icon";
import { BiCollapseAlt, BiExpandAlt } from "react-icons/bi";
import Text from "~/buildingBlockComponents/text";

const elementColor =
  "bg-indigo-500 bg-gradient-to-br from-violet-500/50 via-purple-500/50 to-fuchsia-500/50 textShadow border-970-md rounded-[3vh]";
export const ExampleContainer = React.forwardRef<
  HTMLDivElement,
  {
    children?: React.ReactNode;
    height?: string;
    className?: string;
  }
>(({ children, height = "h-[40svh]", className }, ref) => {
  return (
    <FlexFull className="p-[1vh] w-full">
      <FlexFull
        ref={ref}
        className={`justify-center ${height} overflow-y-auto overflow-x-hidden bg-slate-400 bg-gradient-to-b from-violet-400/50 via-indigo-400/50 to-cyan-500/50 border-970-md shadowBroadLoose ${className}`}
      >
        {children}
      </FlexFull>
    </FlexFull>
  );
});

ExampleContainer.displayName = "ExampleContainer";

export default function ScrollToMoveElement() {
  const scrollContainerOne = useRef<HTMLDivElement>(null);
  const scrollYProgress = useScroll({ container: scrollContainerOne });

  const left = useTransform(
    scrollYProgress.scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["4vw", "4vw", "35vw", "4vw", "4vw"]
  );
  const top = useTransform(
    scrollYProgress.scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["2vh", "30vh", "30vh", "2vh", "2vh"]
  );
  return (
    <Box className="relative">
      <ExampleContainer ref={scrollContainerOne}>
        <Flex className="w-full h-[200svh] min-h-[100svh] items-start">
          <FlexFull>
            <motion.div
              style={{ left, top }}
              className={`w-[20vh] flex p-[2vh] ${elementColor} shadowBroadLoose m-[1vh] absolute flex-shrink-0`}
            >
              <Text>Watch Me Go!!!</Text>
            </motion.div>
          </FlexFull>
        </Flex>
      </ExampleContainer>
    </Box>
  );
}

export function ScrollToChangeColor() {
  const scrollYContainer = useRef<HTMLDivElement>(null);
  const scrollYProgress = useScroll({
    container: scrollYContainer,
  });

  const backgroundColor = useTransform(
    scrollYProgress.scrollYProgress,
    [0, 1],
    ["#522cd1", "#85007a"]
  );

  return (
    <ExampleContainer className="relative">
      <Flex className="gap-[2vh] p-[1vh] justify-center items-center w-full h-full sticky inset-0">
        <motion.div
          className="flex py-[2vh] px-[5vh] h-70% w-70% justify-center items-center text-md md:text-lg xl:text-xl shadowBroadLoose text-nowrap textShadow"
          style={{ backgroundColor }}
        >
          Scroll container to change color.
        </motion.div>
      </Flex>

      <FlexFull
        className="overflow-auto absolute inset-0 z-10"
        ref={scrollYContainer}
      >
        <div style={{ height: "500vh" }}></div>
      </FlexFull>
    </ExampleContainer>
  );
}

export function ScrollToFadeOut() {
  const scrollYContainer = useRef<HTMLDivElement>(null);

  // Setup useScroll with the container
  const scrollYProgress = useScroll({
    container: scrollYContainer,
  });

  const opacity = useTransform(scrollYProgress.scrollYProgress, [0, 1], [1, 0]);

  return (
    <ExampleContainer className="relative">
      <Flex className="gap-[2vh] p-[1vh] justify-center items-center w-full h-full sticky inset-0">
        <motion.div
          className={`flex py-[2vh] px-[5vh] h-80% w-80% justify-center items-center text-md sm:text-lg md:text-xl  shadowBroadLoose text-nowrap ${elementColor}`}
          style={{ opacity }}
        >
          Scroll container to fade out.
        </motion.div>
      </Flex>

      <FlexFull
        className="overflow-auto absolute inset-0 z-10"
        ref={scrollYContainer}
      >
        <div style={{ height: "500vh" }}></div>
      </FlexFull>
    </ExampleContainer>
  );
}

export function ScrollToRotate() {
  const scrollYContainer = useRef<HTMLDivElement>(null);

  const scrollYProgress = useScroll({
    container: scrollYContainer,
  });

  const rotate = useTransform(
    scrollYProgress.scrollYProgress,
    [0, 1],
    [0, 360]
  );

  return (
    <ExampleContainer className="relative">
      <Flex className="gap-[2vh] p-[1vh] justify-center items-center w-full h-full sticky inset-0">
        <motion.div
          className={`flex py-[2vh] px-[5vh] h-fit w-fit justify-center items-center text-md sm:text-lg md:text-xl shadowBroadLoose text-nowrap ${elementColor}`}
          style={{ rotate }}
        >
          Scroll container to rotate.
        </motion.div>
      </Flex>

      <FlexFull
        className="overflow-auto absolute inset-0 z-10"
        ref={scrollYContainer}
      >
        <div style={{ height: "500vh" }}></div>
      </FlexFull>
    </ExampleContainer>
  );
}

export function LayoutOpenElement() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ExampleContainer className="flex-col gap-[2vh] relative items-center">
      <motion.div
        layout
        className={`relative shadowBroadLoose cursor-pointer flex justify-center items-center ${
          isOpen
            ? `transition-400 rounded-[5vh] w-90% h-[30vh] ${elementColor} absolute z-20`
            : "w-[10vh] rounded-full h-[10vh] bg-cyan-500"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          layout
          className={`absolute shadowBroadLoose cursor-pointer w-[5vh] h-[5vh] rounded-full flex justify-center items-center ${
            isOpen
              ? "bg-cyan-500 top-[2vh] right-[2vh] transition-400 "
              : elementColor
          }`}
        >
          <Icon
            icon={isOpen ? BiCollapseAlt : BiExpandAlt}
            iconClassName="transition-400 text-[2.5vh]"
          />
        </motion.div>
        {isOpen ? <Text>TADA!</Text> : <></>}
      </motion.div>
      <Box
        className={`p-[1vh] ${elementColor} border-970-md shadowBroadLooser ${
          isOpen ? "absolute" : "inherit transition-800 "
        } `}
      >
        Other Content
      </Box>
    </ExampleContainer>
  );
}

function ExpandingGridItem({ content }: { content: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setExpanded(!expanded)}
      className={`${expanded ? `w-75% ${elementColor}` : "w-35% bg-cyan-500"}
        hover:cursor-pointer h-[15vh] flex justify-center items-center shadowBroadLoose m-[1vh] transition-all duration-500`}
    >
      <div
        className={`flex justify-center items-center w-full h-full textShadow ${
          expanded ? "text-xxl" : "text-md"
        } transition-500`}
      >
        {content}
      </div>
    </motion.div>
  );
}

export function ExpandingGridItems() {
  const items: string[] = [
    "I Am Item 1",
    "I Am Item 2",
    "I Am Item 3",
    "I Am Item 4",
  ];
  return (
    <ExampleContainer className="h-fit p-[1vh]">
      <LayoutGroup>
        <VStackFull className="items-center">
          {items.map((item, index) => (
            <ExpandingGridItem key={index} content={item} />
          ))}
        </VStackFull>
      </LayoutGroup>
    </ExampleContainer>
  );
}

export function Tabs() {
  const [selected, setSelected] = useState<number | null>(null);
  const tabs = [
    {
      id: 0,
      name: "Tab 1",
      message: "You clicked TAB ONE!",
    },
    {
      id: 1,
      name: "Tab 2",
      message: "You clicked TAB TWO!",
    },
    {
      id: 2,
      name: "Tab 3",
      message: "You clicked TAB THREE!",
    },
  ];

  return (
    <ExampleContainer height="h-[20vh]">
      <LayoutGroup>
        <VStackFull>
          <FlexFull className="relative h-fit">
            {tabs.map((tab, index) => (
              <button
                key={tab.name}
                onClick={() => setSelected(index)}
                className={`p-[1vh] pt-[2vh] text-xl h-fit w-30% textShadow ${
                  selected === index ? "text-pink-400" : "text-white"
                } transition-400`}
              >
                {tab.name}
                {selected === index && (
                  <motion.div
                    className="w-30% bg-pink-500 h-[0.3vh] absolute bottom-0 shadowBroadNormal"
                    layoutId="underline"
                  />
                )}
              </button>
            ))}
          </FlexFull>

          {tabs.map(
            (tab) =>
              selected === tab.id && (
                <Center
                  key={tab.id}
                  className="w-full h-[15vh] text-lg text-slate-900 textGlow "
                >
                  {tab.message}
                </Center>
              )
          )}
        </VStackFull>
      </LayoutGroup>
    </ExampleContainer>
  );
}

export function ScaleAndFadeInContainer({
  children,
  delay = 0,
  animateInDuration = 0.6,
  trigger = 0.2,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  animateInDuration?: number;
  trigger?: number;
  hoverScale?: number;
  className?: string;
}) {
  const animationProps = {
    initial: { opacity: 0.6, y: "13vh", scale: 0.8 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    transition: {
      opacity: {
        duration: 0.6,
      },
      scale: {
        duration: animateInDuration,
        delay: delay,
        type: "spring",
        stiffness: 80,
        damping: 25,
        mass: 0.25,
      },
      y: {
        type: "spring",
        stiffness: 80,
        damping: 25,
        mass: 0.25,
      },
    },
  };
  return (
    <motion.div
      initial={animationProps.initial}
      whileInView={animationProps.whileInView}
      transition={animationProps.transition}
      viewport={{
        once: true,
        amount: trigger,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ElementScrollProgress() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
  });

  return (
    <ExampleContainer ref={scrollContainerRef} className="relative">
      <VStack className="w-full h-[200svh] min-h-[100svh] items-start">
        <Box className="w-full h-[1vh] bg-gray-200 sticky top-0">
          <motion.div
            className=" h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500"
            style={{ scaleX: scrollYProgress }}
          ></motion.div>
          <FlexFull className="justify-center text-xl absolute top-[5vh] text-slate-900 textGlow">
            Scroll Me!
          </FlexFull>
        </Box>
      </VStack>
    </ExampleContainer>
  );
}

export function TrackElementPosition() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const elementRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);

  useEffect(() => {
    elementRefs.current = [...Array(3)].map(() => React.createRef());
  }, []);
  function ElementProgress({
    scrollContainerRef,
    elementRef,
  }: {
    scrollContainerRef: React.RefObject<HTMLDivElement>;
    elementRef: React.RefObject<HTMLDivElement>;
  }) {
    const { scrollYProgress } = useScroll({
      container: scrollContainerRef,
      target: elementRef,
      offset: ["start end", "end start"],
    });

    return (
      <Box className="w-full ">
        <motion.div
          className="h-[1vh] bg-gradient-to-r from-col-500 to-fuchsia-400"
          style={{ scaleX: scrollYProgress }}
        />
      </Box>
    );
  }
  return (
    <ExampleContainer ref={scrollContainerRef} className="relative">
      <Flex className="w-full h-[200svh] min-h-[100svh] flex-col items-center justify-around">
        {[...Array(3)].map((_, index) => (
          <Box
            key={index}
            ref={elementRefs.current[index]}
            className={`w-[20vh] h-[20vh] ${elementColor} shadowBroadLoose flex flex-col items-center justify-center text-white text-xl`}
          >
            <div>Element {index + 1}</div>
            <ElementProgress
              scrollContainerRef={scrollContainerRef}
              elementRef={elementRefs.current[index]}
            />
          </Box>
        ))}
      </Flex>
    </ExampleContainer>
  );
}
