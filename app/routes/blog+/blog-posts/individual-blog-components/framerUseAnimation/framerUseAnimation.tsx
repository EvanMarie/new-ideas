import { Easing, Transition, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { BiCodeAlt } from "react-icons/bi";
import { BsPlay } from "react-icons/bs";
import { motion } from "framer-motion";
import {
  Box,
  Center,
  Flex,
  FlexFull,
  HStack,
  HStackFull,
  VStack,
  VStackFull,
  Wrap,
} from "~/buildingBlockComponents/mainContainers";
import SpringExpandableContainer, {
  SpringExpandableContainerButton,
} from "~/routes/blog+/blog-components/springExpandableContainer";
import { HiRefresh } from "react-icons/hi";
import { FaMinus, FaPlay, FaPlus } from "react-icons/fa";
import { TbBounceRight } from "react-icons/tb";
import { IoMenu, IoPlay } from "react-icons/io5";
import { RiNumber1, RiNumber2, RiNumber4 } from "react-icons/ri";
import Text from "~/buildingBlockComponents/text";
import { AnimationSequencer } from "./sequenceBuildingBlocks";
import { OptionSelector } from "~/buildingBlockComponents/optionSelector";

export const springProps = {
  type: "spring",
  stiffness: 200,
  damping: 30,
};

export const rainbowColors = [
  "#03fcf0",
  "#fd85ff",
  "#e4c4ff",
  "#d4ffab",
  "#332f5c",
  "#03fcf0",
  "#fd85ff",
];

export const tweenProps = {
  type: "tween",
  ease: "easeInOut",
  duration: 2, // Duration for smooth transitions between colors
};

export function AnimationExampleContainer({
  title,
  children,
  code,
  hideReanimate,
  topPadding,
  height = "53vh",
  innerContainerHeight = "h-[40vh]",
}: {
  title?: string;
  code?: string;
  topPadding?: string;
  hideReanimate?: boolean;
  children?: React.ReactNode;
  height?: string;
  innerContainerHeight?: string;
}) {
  const [animationKey, setAnimationKey] = useState(0);

  const handleReanimate = () => {
    setAnimationKey((prevKey) => prevKey + 1);
  };
  const [viewState, setViewState] = useState<"animation" | "code">("animation");
  return (
    <SpringExpandableContainer
      topPadding={topPadding}
      expandedHeight={viewState === "code" ? `55svh` : height}
      isDefaultOpen={true}
      title={title || ""}
      buttonLabel=""
      headerContent={
        <HStack>
          {viewState === "animation" && !hideReanimate && (
            <SpringExpandableContainerButton
              icon={HiRefresh}
              onClick={handleReanimate}
              label="reanimate"
            />
          )}
          <SpringExpandableContainerButton
            icon={viewState === "animation" ? BiCodeAlt : BsPlay}
            onClick={() =>
              setViewState(viewState === "animation" ? "code" : "animation")
            }
            label={viewState === "animation" ? "code" : "animation"}
          />
        </HStack>
      }
    >
      <>
        {viewState === "animation" && (
          <FlexFull className="justify-center">
            <Box className={`w-full`}>
              <VStackFull className={`h-full w-full`} gap="gap-[0vh]">
                <Center
                  className={`w-full relative ${innerContainerHeight}`}
                  key={animationKey}
                >
                  {children}
                </Center>
              </VStackFull>
            </Box>
          </FlexFull>
        )}
        {viewState === "code" && code && (
          <FlexFull className={`h-fit`}>
            <code>{code}</code>
          </FlexFull>
        )}
      </>
    </SpringExpandableContainer>
  );
}

export function MultipleAnimations() {
  const controls = useAnimation();

  const animate = async () => {
    await controls.start({ scale: 1.5 });
    await controls.start({ rotate: 180 });
    await controls.start({ scale: 1 });
    await controls.start({ rotate: 90 });
    await controls.start({ scale: 0.5 });
    await controls.start({ rotate: 180 });
    await controls.start({ scale: 1 });
    await controls.start({ rotate: -720 });
  };

  return (
    <VStackFull>
      <HStack className="py-[4vh]" gap="gap-[10vh]">
        <motion.div
          animate={controls}
          className="w-[10vh] h-[10vh] bg-indigo-600 border-900-md boxGlowSm"
        />
        <motion.div
          animate={controls}
          className="w-[10vh] h-[10vh] bg-fuchsia-600 border-900-md boxGlowSm"
        />{" "}
      </HStack>
      <SpringExpandableContainerButton
        onClick={animate}
        label="Animate"
        icon={FaPlay}
      />
    </VStackFull>
  );
}

export function NotificationBadge({ count }: { count: number }) {
  const controls = useAnimation();

  useEffect(() => {
    if (count > 0) {
      controls.start({
        scale: [1, 1.3, 1],
        transition: { duration: 0.4 },
      });
    } else {
      controls.start({ scale: 1 });
    }
  }, [count, controls]);

  return (
    <motion.div
      animate={controls}
      className="p-[1vh] bg-col-pink text-col-900 rounded-full w-[5vh] h-[5vh] flex justify-center items-center border-900-md shadowNarrowNormal"
    >
      <span className="text-lg">{count}</span>
    </motion.div>
  );
}

export function IncrementingBadgeExample() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <Center className="gap-[3vh]">
      <SpringExpandableContainerButton
        onClick={handleDecrement}
        icon={FaMinus}
      />
      <NotificationBadge count={count} />{" "}
      <SpringExpandableContainerButton
        onClick={handleIncrement}
        icon={FaPlus}
      />
    </Center>
  );
}

export function BouncingBall() {
  const controls = useAnimation();

  const bounce = async () => {
    await controls.start({
      y: 200,
      transition: { type: "spring", stiffness: 500, damping: 10 },
    });
    await controls.start({ scaleY: 0.8, transition: { duration: 0.1 } });
    await controls.start({
      scaleY: 1,
      y: 0,
      transition: { type: "spring", stiffness: 500, damping: 10 },
    });
  };

  return (
    <FlexFull className="h-[30svh] justify-center">
      <motion.div
        className="w-[8vh] h-[8vh] bg-violet-600 rounded-full border-900-md boxGlowSm"
        animate={controls}
        initial={{ y: 0 }}
      />
      <Box className="absolute bottom-[1vh]">
        <SpringExpandableContainerButton
          onClick={bounce}
          label="Bounce Me"
          icon={TbBounceRight}
        />
      </Box>
    </FlexFull>
  );
}

export function AnimatedMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start(isOpen ? "open" : "closed");
  }, [isOpen]);

  const menuVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: {
      x: "-100vw",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  return (
    <>
      <SpringExpandableContainerButton
        label="Toggle Menu"
        icon={IoMenu}
        onClick={() => setIsOpen(!isOpen)}
      />
      <motion.nav
        initial="closed"
        animate={controls}
        variants={menuVariants}
        className="w-full"
      >
        <HStackFull className=" justify-evenly">
          <SpringExpandableContainerButton
            label="Nav Item One"
            onClick={() => {}}
            icon={RiNumber1}
          />
          <SpringExpandableContainerButton
            label="Nav Item Two"
            onClick={() => {}}
            icon={RiNumber2}
          />
          <SpringExpandableContainerButton
            label="Nav Item Three"
            onClick={() => {}}
            icon={RiNumber4}
          />
          <SpringExpandableContainerButton
            label="Nav Item Four"
            onClick={() => {}}
            icon={RiNumber4}
          />
        </HStackFull>
      </motion.nav>
    </>
  );
}

const exampleContainerStyle =
  "bg-col-800 border-900-md shadowNarrowNormal justify-center items-center relative p-[1vh] pt-[5vh]";

export function ExampleContainer({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <FlexFull className={exampleContainerStyle}>
      <Box className="absolute top-[0.5vh] left-[1vh]">
        <Text className="text-lg text-col-500 textShadow font-bold">
          {title}
        </Text>
      </Box>
      {children}
    </FlexFull>
  );
}

export function XandYAxes() {
  return (
    <AnimationExampleContainer
      title="X and Y Axes"
      code={`
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ x: "13vh" });
      await controls.start({ x: "-13vh" });
      await controls.start({ y: "13vh" });
      await controls.start({ y: "-13vh" });
      await controls.start({ x: 0, y: 0 });
    };
    sequence();
  }, [controls]);
  `}
    >
      <AnimationSequencer
        animationArray={[
          {
            animation: { x: "13vh", transition: { ...springProps } },
            label: "{x: '13vh'}",
          },
          {
            animation: { x: "-13vh", transition: { ...springProps } },
            label: "{x: '-13vh'}",
          },
          {
            animation: { y: "13vh", transition: { ...springProps } },
            label: "{y: '13vh'}",
          },
          {
            animation: { y: "-13vh", transition: { ...springProps } },
            label: "{y: '-13vh'}",
          },
          {
            animation: { x: 0, y: 0, transition: { ...springProps } },
            label: "{x: 0, y: 0}",
          },
        ]}
        containerContents={<span className="text-[15vh]">💜</span>}
      />
    </AnimationExampleContainer>
  );
}

export function ScaleExample() {
  return (
    <AnimationExampleContainer
      title="Scale"
      code={`
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ scale: 1.5 });
      await controls.start({ scale: 0.5 });
      await controls.start({ scale: 1 });
      await controls.start({ scale: 1.5 });
      await controls.start({ scale: 0.5 });
      await controls.start({ scale: 1 });
    };
    sequence();
  }, [controls]);
  `}
    >
      <AnimationSequencer
        animationArray={[
          {
            animation: { scale: 1.5, transition: { ...springProps } },
            label: "{scale: 1.5}",
          },
          {
            animation: { scale: 0.5, transition: { ...springProps } },
            label: "{scale: 0.5}",
          },
          {
            animation: { scale: 1, transition: { ...springProps } },
            label: "{scale: 1}",
          },
          {
            animation: { scale: 1.5, transition: { ...springProps } },
            label: "{scale: 1.5}",
          },
          {
            animation: { scale: 0.5, transition: { ...springProps } },
            label: "{scale: 0.5}",
          },
          {
            animation: { scale: 1, transition: { ...springProps } },
            label: "{scale: 1}",
          },
        ]}
        containerContents={<span className="text-[15vh]">💜</span>}
      />
    </AnimationExampleContainer>
  );
}

export function RotateExample() {
  return (
    <AnimationExampleContainer
      title="Rotate"
      code={`
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ rotate: 180 });
      await controls.start({ rotate: 360 });
      await controls.start({ rotate: 0 });
      await controls.start({ rotate: -180 });
      await controls.start({ rotate: 720 });
      await controls.start({ rotate: 360 });
      await controls.start({ rotate: 45 });
      await controls.start({ rotate: 360 });
      await controls.start({ rotate: -45 });
      await controls.start({ rotate: 0 });
    };
    sequence();
  }, [controls]);
  `}
    >
      <AnimationSequencer
        animationArray={[
          {
            animation: { rotate: 180, transition: { ...springProps } },
            label: "{rotate: 180}",
          },
          {
            animation: { rotate: 360, transition: { ...springProps } },
            label: "{rotate: 360}",
          },
          {
            animation: { rotate: 0, transition: { ...springProps } },
            label: "{rotate: 0}",
          },
          {
            animation: { rotate: -180, transition: { ...springProps } },
            label: "{rotate: -180}",
          },
          {
            animation: { rotate: 720, transition: { ...springProps } },
            label: "{rotate: 720}",
          },
          {
            animation: { rotate: 360, transition: { ...springProps } },
            label: "{rotate: 360}",
          },
          {
            animation: { rotate: 45, transition: { ...springProps } },
            label: "{rotate: 45}",
          },
          {
            animation: { rotate: 360, transition: { ...springProps } },
            label: "{rotate: 360}",
          },
          {
            animation: { rotate: -45, transition: { ...springProps } },
            label: "{rotate: -45}",
          },
          {
            animation: { rotate: 0, transition: { ...springProps } },
            label: "{rotate: 0}",
          },
        ]}
        containerContents={<span className="text-[15vh]">💜</span>}
      />
    </AnimationExampleContainer>
  );
}

export function OpacityExample() {
  return (
    <AnimationExampleContainer
      title="Opacity"
      code={`
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 0 });
      await controls.start({ opacity: 1 });
      await controls.start({ opacity: 0.5 });
      await controls.start({ opacity: 1 });
      await controls.start({ opacity: 0.2 });
      await controls.start({ opacity: 1 });
      await controls.start({ opacity: 0.4 });
      await controls.start({ opacity: 1 });
    };
    sequence();
  }, [controls]);
  `}
    >
      <AnimationSequencer
        animationArray={[
          {
            animation: { opacity: 0, transition: { duration: 1.3 } },
            label: "{opacity: 0}",
          },
          {
            animation: { opacity: 1, transition: { duration: 1.3 } },
            label: "{opacity: 1}",
          },
          {
            animation: { opacity: 0.5, transition: { duration: 1.3 } },
            label: "{opacity: 0.5}",
          },
          {
            animation: { opacity: 1, transition: { duration: 1.3 } },
            label: "{opacity: 1}",
          },
          {
            animation: { opacity: 0.2, transition: { duration: 1.3 } },
            label: "{opacity: 0.2}",
          },
          {
            animation: { opacity: 1, transition: { duration: 1.3 } },
            label: "{opacity: 1}",
          },
          {
            animation: { opacity: 0.4, transition: { duration: 1.3 } },
            label: "{opacity: 0.4}",
          },
          {
            animation: { opacity: 1, transition: { duration: 1.3 } },
            label: "{opacity: 1}",
          },
        ]}
        containerContents={<span className="text-[15vh]">💜</span>}
      />
    </AnimationExampleContainer>
  );
}

export function BorderRadiusExample() {
  return (
    <AnimationExampleContainer
      title="Border Radius"
      code={`
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ borderRadius: "10%" });
      await controls.start({ borderRadius: "20%" });
      await controls.start({ borderRadius: "30%" });
      await controls.start({ borderRadius: "40%" });
      await controls.start({ borderRadius: "50%" });
      await controls.start({ borderRadius: "100%" });
      await controls.start({ borderRadius: "0%" });
    };
    sequence();
  }, [controls]);
  `}
    >
      <AnimationSequencer
        containerClassName=" border-100-md px-[3vh]"
        animationArray={[
          {
            animation: { borderRadius: "10%", transition: { duration: 0.8 } },
            label: "{borderRadius: '10%'}",
          },
          {
            animation: { borderRadius: "20%", transition: { duration: 0.8 } },
            label: "{borderRadius: '20%'}",
          },
          {
            animation: { borderRadius: "30%", transition: { duration: 0.8 } },
            label: "{borderRadius: '30%'}",
          },
          {
            animation: { borderRadius: "40%", transition: { duration: 0.8 } },
            label: "{borderRadius: '40%'}",
          },
          {
            animation: { borderRadius: "50%", transition: { duration: 0.8 } },
            label: "{borderRadius: '50%'}",
          },
          {
            animation: { borderRadius: "100%", transition: { duration: 0.8 } },
            label: "{borderRadius: '100%'}",
          },
          {
            animation: { borderRadius: "0%", transition: { duration: 0.8 } },
            label: "{borderRadius: '0%'}",
          },
        ]}
        containerContents={<span className="text-[15vh]">💜</span>}
      />
    </AnimationExampleContainer>
  );
}

export function BackgroundColorExample() {
  return (
    <AnimationExampleContainer
      title="Background Color"
      code={`
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ backgroundColor: '#03fcf0' });
      await controls.start({ backgroundColor: '#fd85ff' });
      await controls.start({ backgroundColor: '#e4c4ff' });
      await controls.start({ backgroundColor: '#d4ffab' });
      await controls.start({ backgroundColor: '#332f5c' });
      await controls.start({ backgroundColor: '#03fcf0' });
      await controls.start({ backgroundColor: '#fd85ff' });
    };
    sequence();
  }, [controls]);
  `}
    >
      <AnimationSequencer
        containerClassName="px-[5vh] border-900-md shadowNarrowNormal"
        animationArray={rainbowColors.map((color) => ({
          animation: { backgroundColor: color, transition: { ...tweenProps } },
          label: `{backgroundColor: '${color}'}`,
        }))}
        containerContents={<span className="text-[15vh]">💜</span>}
      />
    </AnimationExampleContainer>
  );
}

export function BoxShadowExample() {
  return (
    <AnimationExampleContainer
      title="Box Shadow"
      code={`
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.5)' });
      await controls.start({ boxShadow: '20px 20px 10px rgba(0, 0, 0, 0.7)' });
      await controls.start({ boxShadow: '5px 5px 20px rgba(0, 255, 0, 0.6)' });
      await controls.start({ boxShadow: '5px 5px 10px rgba(0, 255, 0, 0.6)' });
      await controls.start({ boxShadow: '5px 5px 5px rgba(0, 255, 0, 0.6)' });
      await controls.start({ boxShadow: '0px 0px 15px rgba(255, 0, 0, 0.8)' });
      await controls.start({ boxShadow: '5px 5px 20px rgba(0, 255, 0, 0.6)' });
      await controls.start({ boxShadow: '0px 0px 30px rgba(255, 255, 0, 0.9)' });
      await controls.start({ boxShadow: '15px 15px 40px rgba(0, 0, 0, 0.9)' });
      await controls.start({ boxShadow: '0px 0px 30px rgba(255, 255, 0, 0.9)' });
      await controls.start({ boxShadow: '15px 15px 40px rgba(0, 0, 0, 0.9)' });
    };
    sequence();
  }, [controls]);
  `}
    >
      <AnimationSequencer
        containerClassName="px-[4vh] bg-col-940 border-900-md"
        animationArray={[
          {
            animation: {
              boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.5)",
              transition: { ...tweenProps },
            },
            label: "{boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.5)'}",
          },
          {
            animation: {
              boxShadow: "20px 20px 10px rgba(0, 0, 0, 0.7)",
              transition: { ...tweenProps },
            },
            label: "{boxShadow: '20px 20px 10px rgba(0, 0, 0, 0.7)'}",
          },
          {
            animation: {
              boxShadow: "5px 5px 20px rgba(0, 255, 0, 0.6)",
              transition: { ...tweenProps },
            },
            label: "{boxShadow: '5px 5px 20px rgba(0, 255, 0, 0.6)'}",
          },
          {
            animation: {
              boxShadow: "5px 5px 10px rgba(0, 255, 0, 0.6)",
              transition: { ...tweenProps },
            },
            label: "{boxShadow: '5px 5px 10px rgba(0, 255, 0, 0.6)'}",
          },
          {
            animation: {
              boxShadow: "5px 5px 5px rgba(0, 255, 0, 0.6)",
              transition: { ...tweenProps },
            },
            label: "{boxShadow: '5px 5px 5px rgba(0, 255, 0, 0.6)'}",
          },
          {
            animation: {
              boxShadow: "0px 0px 15px rgba(255, 0, 0, 0.8)",
              transition: { ...tweenProps },
            },
            label: "{boxShadow: '0px 0px 15px rgba(255, 0, 0, 0.8)'}",
          },
          {
            animation: {
              boxShadow: "5px 5px 20px rgba(0, 255, 0, 0.6)",
              transition: { ...tweenProps },
            },
            label: "{boxShadow: '5px 5px 20px rgba(0, 255, 0, 0.6)'}",
          },
          {
            animation: {
              boxShadow: "0px 0px 30px rgba(255, 255, 0, 0.9)",
              transition: { ...tweenProps },
            },
            label: "{boxShadow: '0px 0px 30px rgba(255, 255, 0, 0.9)'}",
          },
          {
            animation: {
              boxShadow: "15px 15px 40px rgba(0, 0, 0, 0.9)",
              transition: { ...tweenProps },
            },
            label: "{boxShadow: '15px 15px 40px rgba(0, 0, 0, 0.9)'}",
          },
          {
            animation: {
              boxShadow: "0px 0px 30px rgba(255, 255, 0, 0.9)",
              transition: { ...tweenProps },
            },
            label: "{boxShadow: '0px 0px 30px rgba(255, 255, 0, 0.9)'}",
          },
          {
            animation: {
              boxShadow: "15px 15px 40px rgba(0, 0, 0, 0.9)",
              transition: { ...tweenProps },
            },
            label: "{boxShadow: '15px 15px 40px rgba(0, 0, 0, 0.9)'}",
          },
        ]}
        containerContents={<span className="text-[15vh]">💜</span>}
      />
    </AnimationExampleContainer>
  );
}

export function SkewExample() {
  return (
    <AnimationExampleContainer
      title="Skew"
      code={`
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ skewX: 30 });
      await controls.start({ skewY: 20 });
      await controls.start({ skewX: 0, skewY: 0 });
      await controls.start({ skewY: -20 });
      await controls.start({ skewX: -30 });
      await controls.start({ skewX: 0, skewY: 0 });
    };
    sequence();
  }, [controls]);
  `}
    >
      <AnimationSequencer
        animationArray={[
          {
            animation: { skewX: 30, transition: { duration: 1.5 } },
            label: "{skewX: 30}",
          },
          {
            animation: { skewY: 20, transition: { duration: 1.5 } },
            label: "{skewY: 20}",
          },
          {
            animation: {
              skewX: 0,
              skewY: 0,
              transition: { duration: 1.5 },
            },
            label: "{skewX: 0, skewY: 0}",
          },
          {
            animation: { skewY: -20, transition: { duration: 1.5 } },
            label: "{skewY: -20}",
          },
          {
            animation: { skewX: -30, transition: { duration: 1.5 } },
            label: "{skewX: -30}",
          },
          {
            animation: {
              skewX: 0,
              skewY: 0,
              transition: { duration: 1.5 },
            },
            label: "{skewX: 0, skewY: 0}",
          },
        ]}
        containerContents={<span className="text-[15vh]">💜</span>}
      />
    </AnimationExampleContainer>
  );
}

export function WidthAndHeightExample() {
  return (
    <AnimationExampleContainer
      title="Width and Height"
      code={`
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ width: '20vh' });
      await controls.start({ height: '25vh' });
      await controls.start({ width: '30vh', height: '35vh' });
      await controls.start({ height: '25vh' });
      await controls.start({ width: '20vh' });
    };
    sequence();
  }, [controls]);
  `}
    >
      <AnimationSequencer
        containerClassName="bg-col-200 border-900-md boxGlowSm flex justify-center items-center"
        animationArray={[
          {
            animation: { width: "20vh", transition: { duration: 1.3 } },
            label: "{width: '20vh'}",
          },
          {
            animation: { height: "25vh", transition: { duration: 1.3 } },
            label: "{height: '20vh'}",
          },
          {
            animation: {
              width: "30vh",
              height: "35vh",
              transition: { duration: 1.3 },
            },
            label: "{width: '20vh', height: '30vh'}",
          },
          {
            animation: { height: "25vh", transition: { duration: 1.3 } },
            label: "{height: '20vh'}",
          },
          {
            animation: { width: "20vh", transition: { duration: 1.3 } },
            label: "{width: '20vh'}",
          },
        ]}
        containerContents={<span className="text-[15vh]">💜</span>}
      />
    </AnimationExampleContainer>
  );
}

export function BlurExample() {
  return (
    <AnimationExampleContainer
      title="Blur"
      code={`
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ filter: 'blur(5px)' });
      await controls.start({ filter: 'blur(10px)' });
      await controls.start({ filter: 'blur(15px)' });
      await controls.start({ filter: 'blur(10px)' });
      await controls.start({ filter: 'blur(5px)' });
      await controls.start({ filter: 'blur(0px)' });
    };
    sequence();
  }, [controls]);
  `}
    >
      <AnimationSequencer
        animationArray={[
          {
            animation: { filter: "blur(5px)", transition: { duration: 1.2 } },
            label: "{filter: 'blur(5px)'}",
          },
          {
            animation: { filter: "blur(10px)", transition: { duration: 1.2 } },
            label: "{filter: 'blur(10px)'}",
          },
          {
            animation: { filter: "blur(15px)", transition: { duration: 1.2 } },
            label: "{filter: 'blur(15px)'}",
          },
          {
            animation: { filter: "blur(10px)", transition: { duration: 1.2 } },
            label: "{filter: 'blur(10px)'}",
          },
          {
            animation: { filter: "blur(5px)", transition: { duration: 1.2 } },
            label: "{filter: 'blur(5px)'}",
          },
          {
            animation: { filter: "blur(0px)", transition: { duration: 1.2 } },
            label: "{filter: 'blur(0px)'}",
          },
        ]}
        containerContents={<span className="text-[15vh]">💜</span>}
      />
    </AnimationExampleContainer>
  );
}

export function MultipleAnimationsExample() {
  return (
    <AnimationExampleContainer
      height="40vh"
      innerContainerHeight="h-[30vh]"
      hideReanimate
      title="Multiple Animations"
      code={`
export function MultipleAnimations() {
const controls = useAnimation();

const animate = async () => {
  await controls.start({ scale: 1.5 });
  await controls.start({ rotate: 180 });
  await controls.start({ scale: 1 });
  await controls.start({ rotate: 90 });
  await controls.start({ scale: 0.5 });
  await controls.start({ rotate: 180 });
  await controls.start({ scale: 1 });
  await controls.start({ rotate: -720 });
};

return (
  <VStackFull>
    <HStack className="py-[4vh]" gap="gap-[10vh]">
      <motion.div
        animate={controls}
        className="w-[10vh] h-[10vh] bg-indigo-600 border-900-md boxGlowSm"
      />
      <motion.div
        animate={controls}
        className="w-[10vh] h-[10vh] bg-fuchsia-600 border-900-md boxGlowSm"
      />{" "}
    </HStack>
    <SpringExpandableContainerButton
      onClick={animate}
      label="Animate"
      icon={FaPlay}
    />
  </VStackFull>
  );
}
  `}
    >
      <MultipleAnimations />
    </AnimationExampleContainer>
  );
}

export function AnimatedBadgeExample() {
  return (
    <AnimationExampleContainer
      topPadding="pt-[1.5vh]"
      innerContainerHeight="h-[20vh]"
      height="25vh"
      hideReanimate
      title="Animated Badge"
      code={`

export function NotificationBadge({ count }: { count: number }) {
  const controls = useAnimation();

  useEffect(() => {
    if (count > 0) {
      controls.start({
        scale: [1, 1.3, 1],
        transition: { duration: 0.4 },
      });
    } else {
      controls.start({ scale: 1 });
    }
  }, [count, controls]);

  return (
    <motion.div
      animate={controls}
      className="p-[1vh] bg-col-pink text-col-900 rounded-full w-[5vh] h-[5vh] flex justify-center items-center border-900-md shadowNarrowNormal"
    >
      <Text className="text-lg">{count}</Text>
    </motion.div>
  );
}

export function IncrementingBadgeExample() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <Center className="gap-[3vh]">
      <SpringExpandableContainerButton
        onClick={handleDecrement}
        icon={FaMinus}
      />
      <NotificationBadge count={count} />{" "}
      <SpringExpandableContainerButton
        onClick={handleIncrement}
        icon={FaPlus}
      />
    </Center>
  );
}

export function IncrementingBadgeExample() {
const [count, setCount] = useState(0);

const handleIncrement = () => setCount((prev) => prev + 1);
const handleDecrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

return (
  <Center className="gap-[3vh]">
    <SpringExpandableContainerButton
      onClick={handleDecrement}
      icon={FaMinus}
    />
    <NotificationBadge count={count} />{" "}
    <SpringExpandableContainerButton
      onClick={handleIncrement}
      icon={FaPlus}
    />
  </Center>
  );
}
    `}
    >
      <IncrementingBadgeExample />
    </AnimationExampleContainer>
  );
}

export function BouncingBallExample() {
  return (
    <AnimationExampleContainer
      topPadding="pt-[1.5vh]"
      hideReanimate
      title="Bouncing Ball"
      code={`
export function BouncingBall() {
const controls = useAnimation();

const bounce = async () => {
  await controls.start({
    y: 200,
    transition: { type: "spring", stiffness: 500, damping: 10 },
  });
  await controls.start({ scaleY: 0.8, transition: { duration: 0.1 } });
  await controls.start({
    scaleY: 1,
    y: 0,
    transition: { type: "spring", stiffness: 500, damping: 10 },
  });
};

return (
  <FlexFull className="h-[30svh] justify-center">
    <motion.div
      className="w-[8vh] h-[8vh] bg-violet-600 rounded-full border-900-md boxGlowSm"
      animate={controls}
      initial={{ y: 0 }}
    />
    <Box className="absolute bottom-[1vh]">
      <SpringExpandableContainerButton onClick={bounce} label="Bounce Me" />
    </Box>
  </FlexFull>
  );
}
    `}
    >
      <BouncingBall />
    </AnimationExampleContainer>
  );
}

export function AnimatedMenuExample() {
  return (
    <AnimationExampleContainer
      hideReanimate
      height="18vh"
      innerContainerHeight="h-[8vh]"
      title="Animated Menu"
      code={`
export function AnimatedMenu() {
const [isOpen, setIsOpen] = useState(false);
const controls = useAnimation();

useEffect(() => {
  controls.start(isOpen ? "open" : "closed");
}, [isOpen]);

const menuVariants = {
  open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  closed: {
    x: "-100vw",
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

return (
  <ExampleContainer title="animated menu">
    <SpringExpandableContainerButton
      label="Toggle Menu"
      icon={IoMenu}
      onClick={() => setIsOpen(!isOpen)}
    />
    <motion.nav
      initial="closed"
      animate={controls}
      variants={menuVariants}
      className="w-full"
    >
      <HStackFull className=" justify-evenly">
        <SpringExpandableContainerButton
          label="Nav Item One"
          onClick={() => {}}
          icon={RiNumber1}
        />
        <SpringExpandableContainerButton
          label="Nav Item Two"
          onClick={() => {}}
          icon={RiNumber2}
        />
        <SpringExpandableContainerButton
          label="Nav Item Three"
          onClick={() => {}}
          icon={RiNumber3}
        />
        <SpringExpandableContainerButton
          label="Nav Item Four"
          onClick={() => {}}
          icon={RiNumber4}
        />
      </HStackFull>
    </motion.nav>
  </ExampleContainer>
  );
}
  `}
    >
      <AnimatedMenu />
    </AnimationExampleContainer>
  );
}

export function FlowerOfLifeSvgExample() {
  const radius = 23;
  const centerX = 55;
  const centerY = 55;
  const encompassingRadius = 2 * radius;
  const smallCircleColor = "deeppink";
  const largerCircleColor = "cyan";

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 8,
      ease: "easeInOut",
      times: [0, 0.5, 1],
      repeat: Infinity,
    },
  };
  return (
    <AnimationExampleContainer
      hideReanimate
      height="66vh"
      innerContainerHeight="h-[60vh]"
      topPadding="pt-[1.5vh]"
      title="Animated Flower of Life"
      code={`
  <svg
        viewBox="0 0 110 110"
        width="50vh"
        height="50vh"
        className="border-970-md bg-900-linear6op75 shadowBroadNormal"
      >
        {/* Large Encompassing Circle */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={encompassingRadius}
          fill="none"
          stroke={largerCircleColor}
          strokeWidth="0.6"
          className="text-col-600 shadowBroadNormal"
          animate={pulseAnimation}
        />
        {/* Central Circle */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke={smallCircleColor}
          strokeWidth="0.5"
          className="text-col-600 shadowBroadNormal"
          animate={{
            ...pulseAnimation,
            transition: { ...pulseAnimation.transition, duration: 8 },
          }}
        />
        {/* Surrounding Circles */}
        {[0, 60, 120, 180, 240, 300].map((angle, index) => (
          <motion.circle
            key={index}
            cx={centerX + Math.cos((angle * Math.PI) / 180) * radius}
            cy={centerY + Math.sin((angle * Math.PI) / 180) * radius}
            r={radius}
            fill="none"
            stroke={smallCircleColor}
            strokeWidth="0.6"
            className="text-col-600 shadowBroadNormal"
            animate={{
              ...pulseAnimation,
              transition: {
                ...pulseAnimation.transition,
                duration: 8,
                delay: index * 0.2,
              },
            }}
          />
        ))}
      </svg>`}
    >
      <svg
        viewBox="0 0 110 110"
        width="50vh"
        height="50vh"
        className="border-970-md bg-900-linear6op75 shadowBroadNormal"
      >
        {/* Large Encompassing Circle */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={encompassingRadius}
          fill="none"
          stroke={largerCircleColor}
          strokeWidth="0.6"
          className="text-col-600 shadowBroadNormal"
          animate={pulseAnimation}
        />
        {/* Central Circle */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke={smallCircleColor}
          strokeWidth="0.5"
          className="text-col-600 shadowBroadNormal"
          animate={{
            ...pulseAnimation,
            transition: { ...pulseAnimation.transition, duration: 8 },
          }}
        />
        {/* Surrounding Circles */}
        {[0, 60, 120, 180, 240, 300].map((angle, index) => (
          <motion.circle
            key={index}
            cx={centerX + Math.cos((angle * Math.PI) / 180) * radius}
            cy={centerY + Math.sin((angle * Math.PI) / 180) * radius}
            r={radius}
            fill="none"
            stroke={smallCircleColor}
            strokeWidth="0.6"
            className="text-col-600 shadowBroadNormal"
            animate={{
              ...pulseAnimation,
              transition: {
                ...pulseAnimation.transition,
                duration: 8,
                delay: index * 0.2,
              },
            }}
          />
        ))}
      </svg>
    </AnimationExampleContainer>
  );
}

export function PropertyPlayground() {
  const [duration, setDuration] = useState(1);
  const [delay, setDelay] = useState(0);
  const [ease, setEase] = useState<Easing>("easeInOut");
  const [type, setType] = useState<"tween" | "spring">("spring");
  const [stiffness, setStiffness] = useState(100);
  const [damping, setDamping] = useState(10);
  const [mass, setMass] = useState(1);
  const [velocity, setVelocity] = useState(0);
  const [repeat, setRepeat] = useState(0);
  const [repeatType, setRepeatType] =
    useState<Transition["repeatType"]>("loop");
  const [repeatDelay, setRepeatDelay] = useState(0);

  const controls = useAnimation();

  const transition: Transition = {
    duration,
    delay,
    ease,
    type,
    ...(type === "spring" && { stiffness, damping, mass, velocity }),
    repeat: type === "tween" ? repeat : 0,
    repeatType,
    repeatDelay,
  };

  const startAnimation = async () => {
    const animateForward = async () => {
      await controls.start({
        x: "425%",
        rotate: 270,
        transition: transition,
      });
    };

    const animateBackward = async () => {
      await controls.start({
        x: 0,
        rotate: 0,
        transition: {
          ...transition,
          repeat: 0, // Ensure no repeat for the return animation
        },
      });
    };

    if (type === "tween") {
      await animateForward();
      await animateBackward();
    } else {
      // For spring, we'll manually handle repeats
      for (let i = 0; i < (repeat === Infinity ? 9999 : repeat + 1); i++) {
        await animateForward();
        if (i < (repeat === Infinity ? 9999 : repeat)) {
          if (
            repeatType === "reverse" ||
            (repeatType === "mirror" && i % 2 === 0)
          ) {
            await animateBackward();
          } else {
            await controls.set({ x: 0, rotate: 0 });
          }
          if (repeatDelay > 0) {
            await new Promise((resolve) =>
              setTimeout(resolve, repeatDelay * 1000)
            );
          }
        }
      }
      // Final return animation
      await animateBackward();
    }
  };

  useEffect(() => {
    startAnimation();
  }, [transition, repeat, repeatType, repeatDelay]);

  const restartAnimation = () => {
    controls.set({ x: 0, rotate: 0 });
    startAnimation();
  };

  function SliderSelector({
    label,
    value,
    setValue,
    min,
    max,
    step,
  }: {
    label: string;
    value: number;
    setValue: (value: number) => void;
    min: number;
    max: number;
    step: number;
  }) {
    return (
      <VStackFull align="items-start">
        <HStackFull className="justify-between text-col-500 textShadow font-semibold">
          <Text>{label}</Text>
          <Text>{value}</Text>
        </HStackFull>
        <input
          type="range"
          className="dark-mode"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
      </VStackFull>
    );
  }

  return (
    <FlexFull className="justify-center">
      <VStack
        className=" bg-col-800 p-[1.5vh] md:p-[3vh] shadowNarrowLoose w-[98vw] md:max-w-[85svh] border-900-md"
        gap="gap-[2vh]"
      >
        <h3 className="text-col-500 textShadow font-semibold">
          Transition Property Playground
        </h3>
        <FlexFull className="h-[20vh] md:h-[25vh] items-start pt-[3vh] bg-col-940 insetShadow6xl border-700-md relative overflow-hidden px-[1vh] md:px-[2vh]">
          <FlexFull className="justify-center absolute bottom-[1vh] ">
            <SpringExpandableContainerButton
              icon={IoPlay}
              onClick={restartAnimation}
              label="animate"
            />
          </FlexFull>
          <motion.div
            className=" w-[10vh] h-[10vh] md:w-[13vh] md:h-[13vh] bg-col-500 border-900-md shadowNarrowNormal"
            animate={controls}
          />
        </FlexFull>

        <Flex className="w-1/2 justify-evenly">
          <OptionSelector
            options={["tween", "spring"]}
            value={type}
            setValue={(value) => setType(value as "tween" | "spring")}
          />
        </Flex>

        <FlexFull className="grid grod-cols-1 md:grid-cols-2 gap-[1vh] md:gap-[3vh]">
          {type === "tween" && (
            <SliderSelector
              label="Duration"
              value={duration}
              setValue={setDuration}
              min={0}
              max={5}
              step={0.1}
            />
          )}
          <SliderSelector
            label="Delay"
            value={delay}
            setValue={setDelay}
            min={0}
            max={2}
            step={0.1}
          />

          {type === "tween" && (
            <OptionSelector
              label="Ease"
              options={["linear", "easeIn", "easeOut", "easeInOut"]}
              value={ease as string}
              setValue={(value) => setEase(value as Easing)}
            />
          )}

          {type === "spring" && (
            <>
              <SliderSelector
                label="Stiffness"
                value={stiffness}
                setValue={setStiffness}
                min={0}
                max={1000}
                step={1}
              />
              <SliderSelector
                label="Damping"
                value={damping}
                setValue={setDamping}
                min={0}
                max={100}
                step={1}
              />
              <SliderSelector
                label="Mass"
                value={mass}
                setValue={setMass}
                min={0}
                max={10}
                step={1}
              />
              <SliderSelector
                label="Velocity"
                value={velocity}
                setValue={setVelocity}
                min={0}
                max={10}
                step={1}
              />
            </>
          )}

          <OptionSelector
            label="Repeat Count"
            options={["1", "2", "3", "4", "5", "Infinity"]}
            value={repeat.toString()}
            setValue={(value) =>
              setRepeat(value === "Infinity" ? Infinity : Number(value))
            }
          />

          <OptionSelector
            label="Repeat Type"
            options={["loop", "reverse", "mirror"]}
            value={repeatType as string}
            setValue={(value) =>
              setRepeatType(value as Transition["repeatType"])
            }
          />

          <SliderSelector
            label="Repeat Delay"
            value={repeatDelay}
            setValue={setRepeatDelay}
            min={0}
            max={5}
            step={0.1}
          />
        </FlexFull>
      </VStack>
    </FlexFull>
  );
}

interface AnimatedBarChartProps {
  data?: number[];
  xLabels?: string[];
  yLabel?: string;
}

function AnimatedBarChart({ data, xLabels, yLabel }: AnimatedBarChartProps) {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const maxValue = Math.max(...data);

  const variants = {
    hidden: { height: 0 },
    visible: (i: number) => ({
      height: `${(data[i] / maxValue) * 100}%`,
      transition: {
        duration: 0.5,
        delay: i * 0.2,
      },
    }),
  };

  return (
    <FlexFull className="flex-col">
      {/* Y-axis label */}

      <FlexFull className="relative">
        {yLabel && (
          <div className="text-col-500 text-sm rotate-[-90deg] absolute -left-[6vh] top-[50%] transform -translate-y-1/2">
            {yLabel}
          </div>
        )}
        {/* Y-axis values */}
        <div className="absolute -left-[3vh] top-0 bottom-0 flex flex-col justify-between text-col-500 text-xs">
          <div>{maxValue}</div>
          <div>{Math.round(maxValue / 2)}</div>
          <div>0</div>
        </div>
        <FlexFull
          className="items-end border-100-md overflow-hidden px-[0.5vh] pt-[0.5vh] bg-col-980"
          style={{ height: "40vh" }}
        >
          {data.map((value, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={variants}
              initial="hidden"
              animate="visible"
              className="rounded-b-none bg-col-500 bg-gradient-to-t from-col-550 via-col-650 to-indigo-500/50 border-100-md"
              style={{
                width: `${100 / data.length}%`,
                marginRight: index < data.length - 1 ? "1%" : "0",
              }}
            />
          ))}
        </FlexFull>
      </FlexFull>

      {/* X-axis labels */}
      {xLabels && (
        <FlexFull className="justify-between px-[0.5vh] mt-[0.5vh]">
          {xLabels.map((label, index) => (
            <div
              key={index}
              className="text-col-500 text-xs transform rotate-45 origin-top-left"
            >
              {label}
            </div>
          ))}
        </FlexFull>
      )}
    </FlexFull>
  );
}

export function AnimatedBarChartComponent() {
  const [data, setData] = useState<number[] | undefined>(undefined);
  const [xLabels, setXLabels] = useState<string[] | undefined>(undefined);

  useEffect(() => {
    // Simulating data fetching
    setTimeout(() => {
      setData([30, 50, 70, 40, 60, 80, 20, 30, 70]);
      setXLabels([
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ]);
    }, 1000);
  }, []);

  return (
    <AnimationExampleContainer
      title="Animated Bar Chart"
      height="60vh"
      innerContainerHeight="h-[50vh]"
      code={`
interface AnimatedBarChartProps {
  data?: number[];
  xLabels?: string[];
  yLabel?: string;
}

function AnimatedBarChart({ data, xLabels, yLabel }: AnimatedBarChartProps) {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const maxValue = Math.max(...data);

  const variants = {
    hidden: { height: 0 },
    visible: (i: number) => ({
      height: \`\${(data[i] / maxValue) * 100}%\`,
      transition: {
        duration: 0.5,
        delay: i * 0.2,
      },
    }),
  };

  return (
    <FlexFull className="flex-col">
      {/* Y-axis label */}

      <FlexFull className="relative">
        {yLabel && (
          <div className="text-col-500 text-sm rotate-[-90deg] absolute -left-[6vh] top-[50%] transform -translate-y-1/2">
            {yLabel}
          </div>
        )}
        {/* Y-axis values */}
        <div className="absolute -left-[3vh] top-0 bottom-0 flex flex-col justify-between text-col-500 text-xs">
          <div>{maxValue}</div>
          <div>{Math.round(maxValue / 2)}</div>
          <div>0</div>
        </div>
        <FlexFull
          className="items-end border-100-md overflow-hidden px-[0.5vh] pt-[0.5vh] bg-col-980"
          style={{ height: "40vh" }}
        >
          {data.map((value, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={variants}
              initial="hidden"
              animate="visible"
              className="rounded-b-none bg-col-500 bg-gradient-to-t from-col-550 via-col-650 to-indigo-500/50 border-100-md"
              style={{
                width: \`\${100 / data.length}%\`,
                marginRight: index < data.length - 1 ? "1%" : "0",
              }}
            />
          ))}
        </FlexFull>
      </FlexFull>

      {/* X-axis labels */}
      {xLabels && (
        <FlexFull className="justify-between px-[0.5vh] mt-[0.5vh]">
          {xLabels.map((label, index) => (
            <div
              key={index}
              className="text-col-500 text-xs transform rotate-45 origin-top-left"
            >
              {label}
            </div>
          ))}
        </FlexFull>
      )}
    </FlexFull>
  );
}
        `}
    >
      <FlexFull className="justify-center max-w-[90vh] pl-[5vh] pb-[5vh]">
        <AnimatedBarChart data={data} xLabels={xLabels} yLabel="Sales" />
      </FlexFull>
    </AnimationExampleContainer>
  );
}

export function AnimatedSubmitButton() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const controls = useAnimation();

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await controls.start({ scale: 0.95, transition: { duration: 0.1 } });
    await controls.start({
      scale: 1,
      transition: { type: "spring", stiffness: 500, damping: 15 },
    });

    // Simulating an API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
    await controls.start({
      backgroundColor: "cyan",
      color: "black",
      transition: { duration: 0.3 },
    });
  };

  return (
    <AnimationExampleContainer
      hideReanimate
      title="Animated Submit Button"
      height="18vh"
      innerContainerHeight="h-[8vh]"
      code={`
  export function AnimatedSubmitButton() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const controls = useAnimation();

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await controls.start({ scale: 0.95, transition: { duration: 0.1 } });
    await controls.start({
      scale: 1,
      transition: { type: "spring", stiffness: 500, damping: 15 },
    });

    // Simulating an API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
    await controls.start({
      backgroundColor: "cyan",
      color: "black",
      transition: { duration: 0.3 },
    });
  };

  return (
    <AnimationExampleContainer
      hideReanimate
      title="Animated Submit Button"
      height="16vh"
      innerContainerHeight="h-[10vh]"
    >
      <motion.button
        animate={controls}
        onClick={handleSubmit}
        disabled={isSubmitting}
        className={\`px-[2vh] py-[0.7vh] font-semibold border-900-md shadowNarrowNormal h-fit rounded-md hover:cursor-pointer text-col-100
         w-[15vh] ${isSuccess ? "lightTextShadow" : "textShadow"}\`}
        style={{ backgroundColor: isSuccess ? "seagreen" : "purple" }}
      >
        {isSubmitting ? "Submitting..." : isSuccess ? "Success!" : "Submit"}
      </motion.button>
    </AnimationExampleContainer>
  );
}`}
    >
      <motion.button
        animate={controls}
        onClick={handleSubmit}
        disabled={isSubmitting}
        className={`px-[2vh] py-[0.7vh] font-semibold border-900-md shadowNarrowNormal h-fit rounded-md hover:cursor-pointer text-col-100
         w-[15vh] ${isSuccess ? "lightTextShadow" : "textShadow"}`}
        style={{ backgroundColor: isSuccess ? "seagreen" : "purple" }}
      >
        {isSubmitting ? "Submitting..." : isSuccess ? "Success!" : "Submit"}
      </motion.button>
    </AnimationExampleContainer>
  );
}
