import { useEffect, useRef, useState, MutableRefObject } from "react";
import { motion } from "framer-motion";
import { FlexFull } from "~/buildingBlockComponents/mainContainers";

interface ScrollProgressBarProps {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  position?: string;
  color?: string;
  height?: string;
  zIndex?: string;
}

const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({
  containerRef,
  position = "absolute inset-0",
  color = "bg-gradient-to-r from-cyan-200 via-cyan-300 to-cyan-400",
  height = "h-0.6vh",
  zIndex = "z-0",
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollProgress(progress);
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
      return () =>
        containerRef.current?.removeEventListener("scroll", handleScroll);
    }
  }, [containerRef]);

  return (
    <FlexFull
      className={`${position} h-fit bg-col-950 shadowNarrowTight rounded-none ${zIndex}`}
    >
      <motion.div
        ref={scrollRef}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        className={`${height} ${color} rounded-none`}
      />
    </FlexFull>
  );
};

export default ScrollProgressBar;
