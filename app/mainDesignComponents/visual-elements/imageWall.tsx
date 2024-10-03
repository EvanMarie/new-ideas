import React, { useEffect, useState, useCallback } from "react";
import { Box, Wrap } from "~/buildingBlockComponents/mainContainers";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageWall({
  imageArray,
  visibleImagesCount = 30,
  containerWidth = "w-100vw",
  containerHeight = "h-100svh",
  imageDimensions = "w-50% md:w-33% lg:w-25% xl:w-20% h-16.6% sm:h-25% md:h-20% xxl:h-12%",
  borderShadow = "border-900-md shadowNarrowNormal",
  containerRadius = "rounded-none",
}: {
  imageArray: string[];
  visibleImagesCount?: number;
  containerWidth?: string;
  containerHeight?: string;
  imageDimensions?: string;
  borderShadow?: string;
  containerRadius?: string;
}) {
  const [currentImages, setCurrentImages] = useState<string[]>([]);

  const getRandomImages = useCallback(
    (count: number) => {
      const shuffled = [...imageArray].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    },
    [imageArray]
  );

  useEffect(() => {
    setCurrentImages(getRandomImages(visibleImagesCount));
  }, [imageArray, visibleImagesCount, getRandomImages]);

  const getUniqueRandomImage = useCallback(
    (currentImage: string) => {
      const availableImages = imageArray.filter(
        (img) => !currentImages.includes(img) || img === currentImage
      );
      return availableImages[
        Math.floor(Math.random() * availableImages.length)
      ];
    },
    [imageArray, currentImages]
  );

  const handleImageChange = useCallback(
    (index: number) => {
      const randomDelay = Math.random() * (5000 - 500) + 500; // Random delay between 0.5 and 5 seconds

      setTimeout(() => {
        setCurrentImages((prevImages) => {
          const newImages = [...prevImages];
          const newImage = getUniqueRandomImage(newImages[index]);
          newImages[index] = newImage;
          return newImages;
        });
      }, randomDelay);
    },
    [getUniqueRandomImage]
  );

  return (
    <Wrap
      className={`${containerWidth} ${containerHeight} overflow-hidden ${borderShadow} ${containerRadius} bg-slate-900/50`}
    >
      {currentImages.map((image, index) => (
        <Box
          key={`${index}-${image}`}
          className={`rounded-none ${imageDimensions}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={image}
              className="w-full h-full relative bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
              onAnimationComplete={() => handleImageChange(index)}
            >
              <img
                src={image}
                alt="image"
                className="w-full h-full object-cover rounded-none"
              />
            </motion.div>
          </AnimatePresence>
        </Box>
      ))}
    </Wrap>
  );
}
