import { motion } from "framer-motion";
import { FlexFull } from "~/buildingBlockComponents/mainContainers";

interface FloatingUpImagesProps {
  imageSrc?: string;
  numImages?: number;
  maxImageSize?: number;
  minImageSize?: number;
  maxImageRotation?: number;
  minImageRotation?: number;
  maxDuration?: number;
  minDuration?: number;
  maxDelay?: number;
  minDelay?: number;
  landingAreaStart?: number;
  landingAreaEnd?: number;
}

const getRandomValue = (min: number, max: number) =>
  Math.random() * (max - min) + min;

export default function FloatingUpAndOutImages({
  imageSrc = "/images/falling-violet.webp",
  numImages = 23,
  maxImageSize = 5,
  minImageSize = 1,
  maxImageRotation = 75,
  minImageRotation = -75,
  maxDuration = 8,
  minDuration = 3,
  maxDelay = 4,
  minDelay = 0,
  landingAreaStart = -50,
  landingAreaEnd = -100,
}: FloatingUpImagesProps) {
  const images = Array.from({ length: numImages }, (_, i) => {
    const size =
      Math.round(getRandomValue(minImageSize * 10, maxImageSize * 10)) / 10;
    const rotation = getRandomValue(minImageRotation, maxImageRotation);
    const duration =
      Math.round(getRandomValue(minDuration * 10, maxDuration * 10)) / 10;
    const delay = Math.round(getRandomValue(minDelay * 10, maxDelay * 10)) / 10;
    const finalTopPosition = `${
      Math.round(getRandomValue(landingAreaStart * 10, landingAreaEnd * 10)) /
      10
    }%`;
    const leftPosition = `${Math.round(getRandomValue(0, 1000)) / 10}%`;

    const imageVariants = {
      hidden: {
        top: "110%",
        left: leftPosition,
        opacity: 0.5,
        rotate: rotation,
      },
      visible: {
        top: finalTopPosition,
        left: leftPosition,
        opacity: 1,
        rotate: rotation,
        transition: {
          delay,
          duration,
        },
      },
    };

    const imageSize = `${size}vh`;

    return (
      <motion.img
        key={i}
        src={imageSrc}
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        custom={i}
        style={{
          width: imageSize,
          height: imageSize,
          position: "absolute",
          zIndex: 100,
        }}
      />
    );
  });

  return (
    <FlexFull className="h-full absolute top-0 left-0" style={{ zIndex: 0 }}>
      <div className="relative w-full h-full overflow-hidden">{images}</div>
    </FlexFull>
  );
}
