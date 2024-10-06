import { motion } from "framer-motion";

export type AnimationType =
  | "inFromTop"
  | "inFromBottom"
  | "inFromLeft"
  | "inFromRight"
  | "fadeIn"
  | "custom"
  | "spinInPlace"
  | "spinOnScreen"
  | "shuffleIntoPlace"
  | "leanAndStraighten"
  | "randomLetterAnimation";

interface AnimatedTextProps {
  text?: string;
  className?: string;
  animationType?: AnimationType;
  animationMotion?: "spring" | "tween";
  letterDelay?: number;
  textClassName?: string;
  damping?: number;
  stiffness?: number;
  overallDelay?: number;
  overallDuration?: number;
  letterDuration?: number;
  yDistance?: number;
  xDistance?: number;
  distanceAsVH?: boolean;
  numSpins?: number;
  gradient?: Gradient;
  leanAngle?: number;
  leanDuration?: number;
  leanRepeat?: number;
}

interface Gradient {
  colors: string[];
  direction?: string;
}

export default function AnimatedText({
  text,
  className = "",
  animationType = "randomLetterAnimation",
  animationMotion = "spring",
  letterDelay = 0.2,
  damping = 12,
  stiffness = 100,
  overallDelay = 0.2,
  overallDuration = 60,
  letterDuration = 1,
  yDistance = 150,
  xDistance = 150,
  distanceAsVH = false,
  gradient,
  textClassName = "text-7.5vh font-bold text-col-200 textShadow text-stroke-10-500 ",
  numSpins = 2,
  leanAngle = 25,
  leanDuration = 8,
  leanRepeat = 10,
}: AnimatedTextProps) {
  const letters = text ? Array.from(text) : [];
  const xStringDistance = distanceAsVH ? String(xDistance) + "vh" : undefined;
  const yStringDistance = distanceAsVH ? String(yDistance) + "vh" : undefined;

  const useXDistance = distanceAsVH ? xStringDistance : xDistance;
  const useNegXDistance = distanceAsVH ? "-" + xStringDistance : -xDistance;
  const useYDistance = distanceAsVH ? yStringDistance : yDistance;
  const useNegYDistance = distanceAsVH ? "-" + yStringDistance : -yDistance;

  const container = {
    hidden: { opacity: 1 }, // Start with full opacity to prevent fade-in effect
    visible: {
      opacity: 1,
      transition: {
        // Only apply staggering if it's necessary for the specific animation
        staggerChildren:
          animationType === "leanAndStraighten" ? 0 : letterDelay,
        delayChildren: animationType === "leanAndStraighten" ? 0 : overallDelay,
        duration: animationType === "leanAndStraighten" ? 0 : overallDuration,
      },
    },
  };

  const randomLetterAnimationVariant = () => {
    const shouldSpin = Math.random() < 0.5; // 50% chance to spin
    const shouldScale = Math.random() < 0.5; // 50% chance to scale
    const shouldMove = Math.random() < 0.5; // 50% chance to move along the y-axis

    const spinDuration = 0.6 + Math.random() * 1.7; // Duration between 0.6 and 2.3 seconds
    const scaleDuration = 0.6 + Math.random() * 1.7; // Duration between 0.3 and 2 seconds
    const moveDuration = 0.6 + Math.random() * 1.7; // Duration between 0.3 and 2 seconds

    const moveDistance = shouldMove ? 10 + Math.random() * 30 : 0; // Move distance between 10 and 40 units
    const spinDirection = Math.random() < 0.5 ? 1 : -1; // Randomly choose clockwise or counter-clockwise

    return {
      hidden: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        y: 0,
      },
      visible: {
        opacity: 1,
        rotate: shouldSpin ? [0, spinDirection * 360] : 0,
        scale: shouldScale ? [1, 1 + Math.random(), 1] : 1,
        y: shouldMove ? [0, moveDistance, 0] : 0,
        transition: {
          opacity: { duration: 0.5 },
          rotate: {
            duration: spinDuration,
            ease: "linear",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 9, // Assuming a fixed delay for simplicity
          },
          scale: {
            duration: scaleDuration,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 8,
            yoyo: Infinity,
          },
          y: {
            duration: moveDuration,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 8,
            yoyo: Infinity,
          },
        },
      },
    };
  };

  const initialRotations = letters.map(
    () => Math.random() * leanAngle * 2 - leanAngle
  );

  const leanAndStraightenVariant = (index: number) => ({
    hidden: {
      opacity: 0,
      rotate: initialRotations[index],
      x: 0,
      y: 0,
    },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        opacity: { duration: 0.2 },
        rotate: {
          duration: leanDuration,
          ease: "easeInOut",
          repeat: leanRepeat,
          repeatType: "reverse",
          type: animationMotion, // Use the animationMotion prop to determine the transition type
          delay: index * letterDelay, // Add delay based on the letter index to create a staggered effect
        },
      },
    },
  });

  const spinInPlaceVariant = {
    hidden: {
      opacity: 0,
      rotate: -360,
      x: -50,
    },
    visible: {
      opacity: 1,
      rotate: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
  };

  const spinOnScreenVariant = (numSpins: number) => ({
    hidden: {
      opacity: 0,
      rotate: -360 * numSpins,
      x: useXDistance,
      y: useYDistance,
    },
    visible: {
      opacity: 1,
      rotate: 0,
      x: 0,
      y: 0,
      transition: {
        type: "tween",
        duration: letterDuration,
        times: [0, 0.8, 1],
        rotate: {
          duration: letterDuration,
          ease: "linear",
          times: Array.from(
            { length: numSpins },
            (_, i) => (i + 1) / (numSpins + 1)
          ),
          repeat: numSpins - 1,
        },
      },
    },
  });

  const fadeLetterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: letterDuration },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: animationMotion,
        duration: letterDuration,
        damping: damping,
        stiffness: stiffness,
      },
    },
    hidden: {
      opacity: 0,
      y:
        animationType === "custom"
          ? useYDistance
          : animationType === "inFromTop"
          ? useNegYDistance
          : animationType === "inFromBottom"
          ? useYDistance
          : 0,
      x:
        animationType === "custom"
          ? useXDistance
          : animationType === "inFromLeft"
          ? useNegXDistance
          : animationType === "inFromRight"
          ? useXDistance
          : animationType === "shuffleIntoPlace"
          ? Math.random() *
              (typeof useXDistance === "number" ? useXDistance : 0) -
            (typeof useXDistance === "number" ? useXDistance / 2 : 0)
          : 0,
    },
  };

  // Gradient style handling
  const gradientStyle = gradient
    ? {
        background: `linear-gradient(${
          gradient.direction || "to right"
        }, ${gradient.colors.join(", ")})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }
    : {};

  return (
    <motion.div
      className={`flex justify-center items-center ${className}`}
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {letters.map((letter, index) => {
        // Determine the variant to use based on the animationType
        let variant;
        switch (animationType) {
          case "leanAndStraighten":
            variant = leanAndStraightenVariant(index);
            break;
          case "fadeIn":
            variant = fadeLetterVariants;
            break;
          case "spinInPlace":
            variant = spinInPlaceVariant;
            break;
          case "spinOnScreen":
            variant = spinOnScreenVariant(numSpins);
            break;
          case "randomLetterAnimation":
            variant = randomLetterAnimationVariant();
            break;
          // Include other cases as needed
          default:
            variant = child; // Fallback to the child variant
        }

        return (
          <motion.span
            key={index}
            variants={variant}
            style={gradientStyle}
            className={textClassName}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
