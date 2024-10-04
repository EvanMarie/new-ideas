import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Center } from "~/buildingBlockComponents/mainContainers";

// --------------------------- ANIMATION INTERFACES --------------------------- //

export interface MoveAndFadeProps {
  x?: string | number;
  y?: string | number;
  opacity?: number;
  borderRadius?: string;
  background?: string;
  color?: string;
  duration?: number;
}

export interface ScaleProps {
  scale?: number;
  duration?: number;
}

export interface RotateAndScaleProps {
  rotate?: number;
  scale?: number;
  borderRadius?: string;
  background?: string;
  color?: string;
  duration?: number;
}

export interface FadeProps {
  opacity?: number;
  scale?: number;
  duration?: number;
}

export interface RotateProps {
  rotate?: number;
  duration?: number;
}

export interface SlideProps {
  x?: string | number;
  y?: string | number;
  duration?: number;
}

export interface BounceProps {
  scale?: number;
  duration?: number;
  y?: string | number;
}

export interface WiggleProps {
  rotate?: number;
  duration?: number;
}

export interface ZoomProps {
  scale?: number;
  duration?: number;
}

export interface ShakeProps {
  x?: string | number;
  duration?: number;
}

// --------------------------- ANIMATIONS --------------------------- //

export const moveAndFade = ({
  x = 0,
  y = 0,
  opacity = 1,
  borderRadius = "50%",
  background,
  color,
  duration = 1,
}: MoveAndFadeProps) => ({
  x,
  y,
  opacity,
  borderRadius,
  background,
  color,
  transition: { duration },
});

export const scaleAnimation = ({
  scale = 1.25,
  duration = 1.5,
}: ScaleProps) => ({
  scale,
  transition: { duration },
});

export const rotateAndScaleAnimation = ({
  rotate = 0,
  scale = 1,
  borderRadius = "50%",
  background,
  color,
  duration = 1.5,
}: RotateAndScaleProps) => ({
  rotate,
  scale,
  borderRadius,
  background,
  color,
  transition: { duration },
});

export const fadeAnimation = ({
  opacity = 1,
  scale = 1,
  duration = 1,
}: FadeProps) => ({
  opacity,
  scale,
  transition: { duration },
});

export const rotateAnimation = ({
  rotate = 360,
  duration = 1,
}: RotateProps) => ({
  rotate,
  transition: { duration },
});

export const slideAnimation = ({ x = 0, y = 0, duration = 1 }: SlideProps) => ({
  x,
  y,
  transition: { duration },
});

export const bounceAnimation = ({
  scale = 1.25,
  y = "-10%",
  duration = 0.6,
}: BounceProps) => ({
  scale,
  y,
  transition: {
    duration,
    yoyo: Infinity,
    ease: "easeInOut",
  },
});

export const wiggleAnimation = ({
  rotate = 15,
  duration = 0.2,
}: WiggleProps) => ({
  rotate: [rotate, -rotate], // Wiggles between positive and negative rotation
  transition: {
    duration,
    yoyo: Infinity, // Creates a loop
    ease: "easeInOut",
  },
});

export const zoomAnimation = ({ scale = 1.5, duration = 1 }: ZoomProps) => ({
  scale,
  transition: { duration },
});

export const shakeAnimation = ({
  x = 10, // Distance of shake
  duration = 0.1,
}: ShakeProps) => ({
  x: [x, -x], // Moves between positive and negative x values
  transition: {
    duration,
    yoyo: Infinity, // Creates a loop
    ease: "easeInOut",
  },
});

export const pulseAnimation = ({ scale = 1.1, duration = 1 }: ScaleProps) => ({
  scale,
  transition: {
    duration,
    yoyo: Infinity, // Pulses back and forth
    ease: "easeInOut",
  },
});

export const flipAnimation = ({
  rotate = 180,
  duration = 0.6,
}: RotateProps) => ({
  rotateY: rotate, // Use rotateY for flip effect
  transition: { duration },
});

// ------------------ MAIN ANIMATION SEQUENCER COMPONENT ------------------ //

export function AnimationSequencer({
  animationArray,
  initialOpacity = 1,
  containerClassName,
  containerContents = <span className="text-white">Animation</span>,
}: {
  animationArray: { animation: object | (() => object); label: string }[];
  containerClassName?: string;
  initialOpacity?: number;
  containerContents?: React.ReactNode;
}) {
  const controls = useAnimation();
  const [currentAnimationLabel, setCurrentAnimationLabel] = useState("stopped");

  useEffect(() => {
    if (animationArray.length === 0) {
      console.error("Animation array is empty.");
      return;
    }

    const sequence = async () => {
      for (const { animation, label } of animationArray) {
        // Update the current label before starting the animation
        setCurrentAnimationLabel(label);

        const animationConfig =
          typeof animation === "function" ? animation() : animation;
        await controls.start(animationConfig); // Wait for animation to complete
      }

      // Set the label to "stopped" once all animations are done
      setCurrentAnimationLabel("stopped");
    };

    sequence();
  }, [controls, animationArray]);

  return (
    <Center className="w-full h-full relative">
      <Box className="absolute top-[1vh] mono-font text-xs text-col-500 textShadow">
        Current Animation: {currentAnimationLabel}
      </Box>
      <motion.div
        className={` ${containerClassName}`}
        animate={controls}
        initial={{ opacity: initialOpacity }}
      >
        {containerContents}
      </motion.div>
    </Center>
  );
}
