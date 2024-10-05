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
import { useNavigate } from "@remix-run/react";
import { ShiftingImage } from "~/routes/home+/components-data/shiftingImages";

interface ShiftingImagesProps {
  imageArray?: string[];
  imagesAndTitles?: ShiftingImage[];
  delaySeconds?: number;
  transitionDuration?: number;
  imageDimensions?: string;
  ease?: string;
  containerClassName?: string;
  shadow?: string;
  type?: keyof typeof transitionVariants;
}

export default function ShiftingImages({
  imageArray,
  imagesAndTitles,
  delaySeconds = 5,
  ease,
  transitionDuration = 3,
  imageDimensions = "h-full w-full",
  type = "fade",
  containerClassName = "",
}: ShiftingImagesProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentImageProject, setCurrentImageProject] = useState("");
  const [currentImageProjectSlug, setCurrentImageProjectSlug] = useState("");
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
      setCurrentImageProjectSlug(currentImage.projectSlug);
    }
  }, [currentImageIndex, imagesAndTitles]);

  const currentImageSrc = imageArray
    ? imageArray[currentImageIndex]
    : imagesAndTitles
    ? imagesAndTitles[currentImageIndex].src
    : "";
  const navigate = useNavigate();
  return (
    <FlexFull className="justify-center">
      {imagesLoaded ? (
        <FlexFull className={`relative justify-center`}>
          <AnimatePresence>
            <motion.div
              key={currentImageIndex}
              variants={transitionVariants[type]}
              initial={transitionVariants[type].initial as VariantLabels}
              animate={transitionVariants[type].animate as VariantLabels}
              exit={transitionVariants[type].exit as VariantLabels}
              className={`absolute inset-0 `}
              onClick={() => {
                navigate(`/portfolio/${currentImageProjectSlug}`);
              }}
              transition={{
                duration: transitionDuration,
                type: ease ? "tween" : "spring",
                ease: ease || undefined,
              }}
            >
              <VStack className="w-full hover:cursor-pointer group">
                <Box className="rounded-1vh border-900-md shadowNarrowNormal h-fit group-hover:boxGlowXs transition-300 group-hover:scale-101">
                  <img
                    src={currentImageSrc}
                    alt={currentImageProject}
                    className={`object-contain ${imageDimensions} hover:cursor-pointer`}
                  />
                </Box>

                {imagesAndTitles && (
                  <FlexFull className="pt-1vh justify-center">
                    <Flex className="px-1vh gap-1vh justify-center textShadow text-sm bg-slate-900/50 border-900-md shadowNarrowNormal">
                      <span className="">{currentImageProject} </span> |{" "}
                      <span className=""> {currentImageTitle}</span>
                    </Flex>
                  </FlexFull>
                )}
              </VStack>
            </motion.div>
          </AnimatePresence>
        </FlexFull>
      ) : (
        <Center className={`relative ${imageDimensions} ${containerClassName}`}>
          <SkeletonLoader />
        </Center>
      )}
    </FlexFull>
  );
}
