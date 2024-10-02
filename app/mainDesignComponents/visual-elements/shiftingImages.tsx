import { motion, AnimatePresence, VariantLabels } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Center,
  Flex,
  transitionVariants,
  VStack,
} from "~/buildingBlockComponents/mainContainers";
import SkeletonLoader from "./skeletonLoader";

interface ShiftingImagesProps {
  imageArray?: string[];
  imagesAndTitles?: { src: string; project: string; title: string }[];
  delaySeconds?: number;
  transitionDuration?: number;
  ease?: string;
  imageDimensions?: string;
  shape?:
    | "rectangle"
    | "circle"
    | "triangle"
    | "diamond"
    | "octagon"
    | "invertedTriangle";
  imageClassName?: string;
  containerClassName?: string;
  shadow?: string;
  type?: keyof typeof transitionVariants;
}

const shapeStyles = {
  rectangle: "",
  circle: "circle(50%)",
  triangle: "polygon(50% 0%, 0% 100%, 100% 100%)",
  invertedTriangle: "polygon(0% 0%, 100% 0%, 50% 100%)",
  diamond: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
  octagon:
    "polygon(30% 10%, 70% 10%, 90% 30%, 90% 70%, 70% 90%, 30% 90%, 10% 70%, 10% 30%)",
};

export default function ShiftingImages({
  imageArray,
  imagesAndTitles,
  delaySeconds = 4,
  ease,
  transitionDuration = 1.5,
  imageDimensions = "h-full w-full",
  shape = "rectangle",
  type = "fade",
  imageClassName = "",
  containerClassName = "",
}: ShiftingImagesProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentImageProject, setCurrentImageProject] = useState("");
  const [currentImageTitle, setCurrentImageTitle] = useState("");

  const numImages = imagesAndTitles
    ? imagesAndTitles.length
    : imageArray?.length || 0;

  useEffect(() => {
    const imagePromises =
      imageArray?.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
        });
      }) ||
      imagesAndTitles?.map((item) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = item.src;
          img.onload = resolve;
        });
      });

    if (imagePromises) {
      Promise.all(imagePromises).then(() => setImagesLoaded(true));
    }
  }, [imageArray, imagesAndTitles]);

  useEffect(() => {
    const totalDisplayTime = delaySeconds * 1000 + transitionDuration * 1000;
    const timer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % numImages);
    }, totalDisplayTime);

    return () => {
      clearTimeout(timer);
    };
  }, [currentImageIndex, delaySeconds, numImages, transitionDuration]);

  useEffect(() => {
    if (imagesAndTitles) {
      const currentImage = imagesAndTitles[currentImageIndex];
      setCurrentImageProject(currentImage.project);
      setCurrentImageTitle(currentImage.title);
    }
  }, [currentImageIndex, imagesAndTitles]);

  const imageStyle = {
    ...(shapeStyles[shape] ? { clipPath: shapeStyles[shape] } : {}),
  };

  const currentImageSrc = imageArray
    ? imageArray[currentImageIndex]
    : imagesAndTitles
    ? imagesAndTitles[currentImageIndex].src
    : "";

  return (
    <>
      {imagesLoaded ? (
        <Flex className={`relative ${imageDimensions} ${containerClassName}`}>
          <VStack>
            <AnimatePresence>
              <motion.img
                key={currentImageIndex}
                src={currentImageSrc}
                variants={transitionVariants[type]}
                initial={transitionVariants[type].initial as VariantLabels}
                animate={transitionVariants[type].animate as VariantLabels}
                exit={transitionVariants[type].exit as VariantLabels}
                transition={{
                  duration: transitionDuration,
                  type: ease ? "tween" : "spring",
                  ease: ease || undefined,
                }}
                style={imageStyle}
                className={`absolute inset-0 object-cover ${imageDimensions} ${imageClassName}`}
              />
            </AnimatePresence>
            {imagesAndTitles && (
              <VStack className="absolute bottom-0 left-0 right-0 z-10">
                <span>{currentImageProject}</span>
                <span>{currentImageTitle}</span>
              </VStack>
            )}
          </VStack>
        </Flex>
      ) : (
        <Center className={`relative ${imageDimensions} ${containerClassName}`}>
          <SkeletonLoader />
        </Center>
      )}
    </>
  );
}
