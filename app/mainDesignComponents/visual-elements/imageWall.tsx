import React, { useEffect, useState, useCallback } from "react";
import { Box, Wrap } from "~/buildingBlockComponents/mainContainers";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageWall({
  imageArray,
  visibleImagesCount = 30,
  containerWidth = "w-80%",
  containerHeight = "h-80%",
  imageDimensions = "w-full sm:w-50% md:w-33.3% lg:w-25%",
  borderShadow = "border-900-md shadowNarrowNormal",
  containerRadius = "rounded-2vh",
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

  const handleImageChange = useCallback(() => {
    const randomDelay = Math.random() * (30000 - 10000) + 10000; // Random delay between 10 and 30 seconds

    setTimeout(() => {
      const indexToChange = Math.floor(Math.random() * currentImages.length);
      setCurrentImages((prevImages) => {
        const newImages = [...prevImages];
        const newImage = getUniqueRandomImage(newImages[indexToChange]);
        newImages[indexToChange] = newImage;
        return newImages;
      });
      handleImageChange(); // Schedule the next change
    }, randomDelay);
  }, [currentImages, getUniqueRandomImage]);

  useEffect(() => {
    handleImageChange(); // Start the image change cycle
    return () => {
      // Clean up any pending timeouts when component unmounts
    };
  }, [handleImageChange]);

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
