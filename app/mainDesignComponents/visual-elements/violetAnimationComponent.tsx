import { motion } from "framer-motion";
import { Flex } from "~/buildingBlockComponents/mainContainers";

export type Path = {
  path: string;
  delay?: number;
  duration?: number;
  fill?: string;
  fillDelay?: number;
  fillDuration?: number;
  fillOpacity?: number;
  stroke?: string;
  strokeWidth?: number | string;
  ease?: string;
  repeat?: number;
  zIndex?: number;
};

export default function VioletAnimationComponent({
  paths,
  width = "w-20vh",
  height = "h-20vh",
  viewBox = "-30 -20 456.079 436.079",
  containerClassName,
}: {
  paths: Path[];
  height?: string;
  width?: string;
  viewBox?: string;
  containerClassName?: string;
}) {
  const pathVariants = {
    initial: { y: 0, scale: 1, x: 0 },
    animate: {
      //   x: [0, 20, 10, 0],
      //   y: [0, 130, -130, 0],
      scale: [1, 1.13, 1.03, 1],
      transition: { duration: 4, ease: "easeInOut" },
    },
  };

  return (
    <Flex
      className={`${height} ${width} ${containerClassName} overflow-visible`}
    >
      <motion.svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox} // Use the adjusted viewBox
        initial="initial"
        animate="animate"
      >
        <defs>
          <linearGradient
            id="purpleFuchsiaGradient"
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#4B0082" />
            <stop offset="100%" stopColor="#FF00FF" />
          </linearGradient>
        </defs>
        <motion.g
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: paths[0].duration,
              },
            },
          }}
        >
          {paths.map((path, i) => (
            <motion.path
              key={i}
              d={path.path}
              stroke={path.stroke || "#000000"}
              strokeWidth={path.strokeWidth}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: path.duration || 1,
                ease: path.ease || "easeInOut",
                delay: path.delay || 0,
                repeat: path.repeat || 0,
                repeatType: path.repeat ? "reverse" : "mirror",
              }}
              fill={
                path.fill === "url(#purpleFuchsiaGradient)"
                  ? "url(#purpleFuchsiaGradient)"
                  : path.fill
              }
              style={{
                fillOpacity: 0,
                animation: path.fill
                  ? `fillAnimation ${path.fillDuration || 0.5}s ease-in-out ${
                      path.fillDelay || 0
                    }s forwards`
                  : "none",
              }}
              variants={pathVariants}
            />
          ))}
        </motion.g>
      </motion.svg>
    </Flex>
  );
}
