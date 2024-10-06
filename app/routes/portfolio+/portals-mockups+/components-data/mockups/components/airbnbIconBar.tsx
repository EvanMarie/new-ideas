import React, { useState, useRef, useEffect } from "react";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import {
  Box,
  Center,
  HStackFull,
  VStack,
} from "~/buildingBlockComponents/mainContainers";
import Icon from "~/buildingBlockComponents/icon";
import Text from "~/buildingBlockComponents/text";

type IconBarType = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
};

interface IconBarProps {
  iconBar: IconBarType[];
  category: String | undefined;
  setCategory: (category: string) => void;
}

export default function IconBar({
  iconBar,
  category,
  setCategory,
}: IconBarProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [disableLeftArrow, setDisableLeftArrow] = useState(false);
  const [disableRightArrow, setDisableRightArrow] = useState(false);

  useEffect(() => {
    const checkScrollArrows = () => {
      if (scrollContainerRef.current) {
        const {
          scrollLeft = 0,
          scrollWidth = 0,
          clientWidth = 0,
        } = scrollContainerRef.current;
        setDisableLeftArrow(scrollLeft > 0);
        setDisableRightArrow(scrollLeft < scrollWidth - clientWidth);
      }
    };

    checkScrollArrows();
    window.addEventListener("resize", checkScrollArrows);

    return () => window.removeEventListener("resize", checkScrollArrows);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <HStackFull className="items-center md:px-[1.5vh] " gap="gap-[0px]">
      <motion.div
        className="hidden md:flex"
        whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
        onClick={() => scroll("left")}
      >
        <Icon icon={BiChevronLeftCircle} iconClassName="text-[3vh]" />
      </motion.div>
      <Box
        className="w-full overflow-x-auto hide-scrollbar"
        ref={scrollContainerRef}
      >
        <HStackFull className="w-fit items-center px-[1vh] md:px-[0px]">
          {iconBar.map(({ icon: Icon, label }) => (
            <Center
              key={label} // Move the key prop here
              className={`p-[0.5vh] hover:cursor-pointer `}
              onClick={() => setCategory(label)}
            >
              <VStack
                className={`flex-col items-center w-[9vh] h-[8vh] justify-center  text-slate-800  border-b-[0.3vh] border-transparent transition-400 rounded-none
        ${category === label ? " border-b-slate-800 " : ""}
        `}
                gap="gap-[0px]"
              >
                <Icon className="text-3xl " />
                <Text className="text-nowrap text-xs">{label}</Text>
              </VStack>
            </Center>
          ))}
        </HStackFull>
      </Box>
      <motion.div
        className="hidden md:inline"
        whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
        onClick={() => scroll("right")}
      >
        <Icon icon={BiChevronRightCircle} iconClassName="text-[3vh]" />
      </motion.div>
    </HStackFull>
  );
}
