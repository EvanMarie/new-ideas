import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Center, Flex } from "~/buildingBlockComponents/mainContainers";
import SkeletonLoader from "./skeletonLoader";

interface ShiftingImagesProps {
  imageArray?: string[];
  imagesAndTitles?: { src: string; project: string; title: string }[];
  delaySeconds?: number;
  transitionDuration?: number;
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
  transitionDuration = 2,
  imageDimensions = "h-full w-full",
  shape = "rectangle",
  imageClassName = "",
  containerClassName = "",
}: ShiftingImagesProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

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

  const imageStyle = {
    ...(shapeStyles[shape] ? { clipPath: shapeStyles[shape] } : {}),
  };

  const currentImageSrc = imageArray
    ? imageArray[currentImageIndex]
    : imagesAndTitles
    ? imagesAndTitles[currentImageIndex].src
    : "";

  return (
    <Center className="w-full">
      {imagesLoaded ? (
        <Flex className={`relative ${imageDimensions} ${containerClassName}`}>
          <AnimatePresence>
            <motion.img
              key={currentImageIndex}
              src={currentImageSrc}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: transitionDuration, ease: "easeInOut" }}
              style={imageStyle}
              className={`absolute inset-0 object-cover ${imageDimensions} ${imageClassName}`}
            />
          </AnimatePresence>
        </Flex>
      ) : (
        <Center className={`relative ${imageDimensions} ${containerClassName}`}>
          <SkeletonLoader />
        </Center>
      )}
    </Center>
  );
}
