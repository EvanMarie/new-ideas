import { motion, AnimatePresence, VariantLabels } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Box,
  Center,
  Flex,
  FlexFull,
  transitionVariants,
  VStack,
  VStackFull,
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

  const currentImageSrc = imageArray
    ? imageArray[currentImageIndex]
    : imagesAndTitles
    ? imagesAndTitles[currentImageIndex].src
    : "";

  return (
    <>
      {imagesLoaded ? (
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            variants={transitionVariants[type]}
            initial={transitionVariants[type].initial as VariantLabels}
            animate={transitionVariants[type].animate as VariantLabels}
            exit={transitionVariants[type].exit as VariantLabels}
            transition={{
              duration: transitionDuration,
              type: ease ? "tween" : "spring",
              ease: ease || undefined,
            }}
          >
            <VStack>
              <Box className={`rounded-1vh ${imageDimensions}`}>
                <img
                  src={currentImageSrc}
                  alt={currentImageProject}
                  className={`object-cover ${imageClassName} w-full h-full rounded-1vh border-900-md shadowNarrowNormal`}
                />
              </Box>
              {imagesAndTitles && (
                <FlexFull className="gap-1vh justify-center textShadow text-sm bg-slate-900/50 border-900-md shadowNarrowNormal">
                  <span className="">{currentImageProject} </span> |{" "}
                  <span className=""> {currentImageTitle}</span>
                </FlexFull>
              )}
            </VStack>
          </motion.div>
        </AnimatePresence>
      ) : (
        <Center className={`relative ${imageDimensions} ${containerClassName}`}>
          <SkeletonLoader />
        </Center>
      )}
    </>
  );
}
