import React, { useEffect, useState, useCallback, useRef } from "react";
import { Box, Wrap } from "~/buildingBlockComponents/mainContainers";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageWall({
  imageArray,
  visibleImagesCount = 30,
  containerWidth = "w-100vw",
  containerHeight = "h-100svh",
  imageDimensions = "w-50% md:w-33% lg:w-25% xl:w-20% xxl:w-16.6% h-16.6% sm:h-25% md:h-20%",
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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize current images without duplicates
  const getRandomImages = useCallback(
    (count: number) => {
      if (imageArray.length < count) {
        console.warn(
          "imageArray does not contain enough unique images to display without duplicates."
        );
        return [...imageArray];
      }
      const shuffled = [...imageArray].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    },
    [imageArray]
  );

  useEffect(() => {
    setCurrentImages(getRandomImages(visibleImagesCount));
  }, [imageArray, visibleImagesCount, getRandomImages]);

  // Function to get a unique random image not currently displayed
  const getUniqueRandomImage = useCallback((): string => {
    const availableImages = imageArray.filter(
      (img) => !currentImages.includes(img)
    );

    if (availableImages.length === 0) {
      // If no available images, allow replacing with any image
      return imageArray[Math.floor(Math.random() * imageArray.length)];
    }

    return availableImages[Math.floor(Math.random() * availableImages.length)];
  }, [imageArray, currentImages]);

  // Function to change one random image
  const changeRandomImage = useCallback(() => {
    setCurrentImages((prevImages) => {
      if (prevImages.length === 0) return prevImages;

      const indexToChange = Math.floor(Math.random() * prevImages.length);
      const newImage = getUniqueRandomImage();

      // Prevent replacing with the same image
      if (newImage === prevImages[indexToChange]) {
        return prevImages;
      }

      const newImages = [...prevImages];
      newImages[indexToChange] = newImage;
      return newImages;
    });

    scheduleNextChange();
  }, [getUniqueRandomImage]);

  // Function to schedule the next image change
  const scheduleNextChange = useCallback(() => {
    const randomDelay = Math.random() * 3000 + 3000; // 3 to 6 seconds
    timeoutRef.current = setTimeout(changeRandomImage, randomDelay);
  }, [changeRandomImage]);

  useEffect(() => {
    scheduleNextChange();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [scheduleNextChange]);

  // Define variants for animations
  const variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" }, // Fade-in duration
    },
    exit: {
      opacity: 0,
      transition: { duration: 2.5, ease: "easeInOut" }, // Fade-out duration
    },
  };

  return (
    <Wrap
      className={`${containerWidth} ${containerHeight} overflow-hidden ${borderShadow} ${containerRadius} bg-slate-900/50`}
    >
      {currentImages.map((image, index) => (
        <Box
          key={`${index}-${image}`}
          className={`rounded-none ${imageDimensions}`}
        >
          <AnimatePresence>
            <motion.div
              key={image}
              className="w-full h-full relative bg-black"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <img
                src={image}
                alt={`Descriptive text for image ${index}`}
                className="w-full h-full object-cover rounded-none"
              />
            </motion.div>
          </AnimatePresence>
        </Box>
      ))}
    </Wrap>
  );
}
