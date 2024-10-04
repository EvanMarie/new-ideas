import { useState } from "react";
import { BiExpandAlt } from "react-icons/bi";
import { IoRefreshCircleOutline } from "react-icons/io5";
import { useSpring, animated } from "react-spring";
import { CloseIcon } from "styles";
import IconButton from "~/buildingBlockComponents/iconButton";
import {
  Box,
  Center,
  HStackFull,
  VStack,
} from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";

// ************************************************* ANIMATION *************************************************
export function Reanimate({
  title,
  children,
  dimensions = " h-[20vh] w-[70vw] sm:w-[40vh] sm:h-[20vh]",
  bg = "bg-slate-800/90",
  handleClickAnimation,
}: {
  title?: string;
  infoTitle?: string;
  bg?: string;
  children?: React.ReactNode;
  dimensions?: string;

  handleClickAnimation?: () => void;
}) {
  const [animationKey, setAnimationKey] = useState(0);

  const handleReanimate = () => {
    setAnimationKey((prevKey) => prevKey + 1);
  };

  const onClick = handleClickAnimation ? handleClickAnimation : handleReanimate;
  return (
    <Center className="w-full my-[1vh]">
      <Box className={`p-[0.3vh] bg-slate-800 shadowBroadNormal`}>
        <VStack
          className={`${bg} insetShadowXl border-970-md ${dimensions}`}
          gap="gap-[0vh]"
        >
          {title && (
            <HStackFull
              className={`justify-between bg-indigo-900 rounded-b-none px-[1vh] border-b-170-sm items-center h-[5.5vh] `}
            >
              <Text>{title}</Text>
              <IconButton
                onClick={handleReanimate}
                icon={IoRefreshCircleOutline}
                type="smallNormal"
              />
            </HStackFull>
          )}
          <Center className="w-full h-full relative" key={animationKey}>
            {children}
          </Center>
        </VStack>
      </Box>
    </Center>
  );
}

export function FadeInComponent() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div
      style={props}
      className="p-[1vh] bg-violet-800 shadowBroadLoose border-970-md"
    >
      I fade in!
    </animated.div>
  );
}

export function MovingBox() {
  const movingProps = useSpring({
    from: { transform: "translateX(0%)" },
    to: { transform: "translateX(100%)" },
    config: { mass: 1, tension: 120, friction: 14 },
  });
  return (
    <animated.div
      style={movingProps}
      className="p-[1vh] bg-violet-800  shadowBroadLoose border-970-md"
    >
      I move right!
    </animated.div>
  );
}

export function ScaleSpringBox() {
  const scaleSpring = useSpring({
    from: { transform: "scale(1)" },
    to: { transform: "scale(2)" },
    config: { tension: 70, friction: 10 },
  });
  return (
    <animated.div
      style={scaleSpring}
      className="p-[1vh] bg-violet-800 shadowBroadLoose border-970-md"
    >
      I scale!
    </animated.div>
  );
}

export function XandYAnimation() {
  const curveAnimation = useSpring({
    from: { x: 0, y: 0 },
    to: { x: 200, y: 60 },
    config: { duration: 3000 },
  });
  return (
    <animated.div
      style={{
        position: "absolute",
        left: curveAnimation.x,
        top: curveAnimation.y,
      }}
      className="p-[1vh] bg-violet-800 shadowBroadLoose border-970-md"
    >
      x, y
    </animated.div>
  );
}
