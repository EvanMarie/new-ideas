import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Flex } from "./mainContainers";
import { motion } from "framer-motion";
import Icon from "./icon";
import { PiArrowURightUpBold } from "react-icons/pi";

interface ScrollToTopProps {
  scrollContainerRef: React.RefObject<HTMLElement>;
}

const ScrollToTopButton: React.FC<ScrollToTopProps> = ({
  scrollContainerRef,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (
        scrollContainerRef.current &&
        scrollContainerRef.current.scrollTop > window.innerHeight * 1
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", toggleVisibility);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", toggleVisibility);
      }
    };
  }, [scrollContainerRef]);

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const buttonStyle =
    "bg-cyan-300 hover:bg-fuchsia-800 transition-400 hover:metallicEdgesSm z-10 cursor-pointer group p-[0.5vh] md:p-[0.3vh]";
  const containerStyle = "bg-slate-800/80 p-[1vh] shadowBroadNormal z-10";
  const iconStyle =
    "text-slate-900 text-[2.5] md:text-[3vh] group-hover:text-slate-100 transition-400";
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="scrollToTopButton"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
          transition={{ duration: 0.5 }}
          className="fixed bottom-[4vh] left-0 z-20"
        >
          <Flex className={buttonStyle} onClick={scrollToTop}>
            <Icon
              icon={PiArrowURightUpBold}
              iconClassName={iconStyle}
              containerClassName="w-full h-full"
              hoverCursor="cursor-pointer"
            />
          </Flex>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
