import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Box, Flex } from "./mainContainers";
import { motion } from "framer-motion";
import Icon from "./icon";
import { PiArrowURightUpBold, PiTriangleFill } from "react-icons/pi";
import ProjectButton from "~/mainDesignComponents/projectButton";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { FaTurnUp } from "react-icons/fa6";
import { RiTriangleFill } from "react-icons/ri";
import { VscTriangleUp } from "react-icons/vsc";

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
    hidden: { z: "10vh", opacity: 0 },
    visible: { z: 0, opacity: 1 },
  };

  const buttonStyle =
    "bg-cyan-300 hover:bg-slate-950 transition-400 hover:metallicEdgesSm z-10 cursor-pointer group p-0.5vh md:p-0.3vh rounded-full group";
  const iconStyle =
    "text-slate-900 text-2.5vh md:text-3vh transition-300 group-hover:text-cyan-300";
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
          className="fixed bottom-[6.5vh] md:bottom-[5.5vh] left-[0.7vh] z-20"
        >
          {" "}
          <ProjectButton icon={VscTriangleUp} onClick={scrollToTop} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
