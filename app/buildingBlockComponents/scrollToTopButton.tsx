import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectButton from "~/mainDesignComponents/projectButton";
import { VscTriangleUp } from "react-icons/vsc";
import { useLocation, useNavigate } from "@remix-run/react";

interface ScrollToTopProps {
  scrollContainerRef: React.RefObject<HTMLElement>;
}

const ScrollToTopButton: React.FC<ScrollToTopProps> = ({
  scrollContainerRef,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const { hash, pathname } = location;

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

  const onClick = () => {
    if (hash) {
      // Immediately remove the hash and stop any further scroll behavior
      navigate("");
    } else {
      scrollToTop();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && !hash && (
        <motion.div
          key="scrollToTopButton"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
          transition={{ duration: 0.5 }}
          className="fixed bottom-[6.3svh] md:bottom-[5.5svh] left-[0.5vh] z-40"
        >
          <ProjectButton
            icon={VscTriangleUp}
            onClick={onClick}
            label="to top"
            tooltipPlacement="topRight"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
