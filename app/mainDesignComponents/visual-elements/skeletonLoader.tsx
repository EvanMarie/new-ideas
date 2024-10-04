import { motion } from "framer-motion";
import BouncingDots from "~/buildingBlockComponents/bouncingDots";
import { Flex } from "~/buildingBlockComponents/mainContainers";

export default function SkeletonLoader({
  imageDimensions = "w-full h-full",
  shape = "rectangle",
  containerClassName,
  colors = ["#240057", "#360057", "#57004d"],
  speed = 3,
  text,
  textColor = "text-col-500",
  textClassName = "text-[2.5vh] font-semibold",
}: {
  imageDimensions?: string;
  shape?:
    | "rectangle"
    | "circle"
    | "triangle"
    | "diamond"
    | "octagon"
    | "invertedTriangle";
  containerClassName?: string;
  colors?: string[];
  speed?: number;
  text?: string;
  textColor?: string;
  textClassName?: string;
}) {
  const shapeStyles = {
    rectangle: "",
    circle: "circle(50%)",
    triangle: "polygon(50% 0%, 0% 100%, 100% 100%)",
    invertedTriangle: "polygon(0% 0%, 100% 0%, 50% 100%)",
    diamond: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
    octagon:
      "polygon(30% 10%, 70% 10%, 90% 30%, 90% 70%, 70% 90%, 30% 90%, 10% 70%, 10% 30%)",
  };

  const shapeStyle = shapeStyles[shape] ? { clipPath: shapeStyles[shape] } : {};

  const gradientConfigurations = [
    `linear-gradient(45deg, ${colors[0]} 0%, ${colors[1]} 100%)`,
    `linear-gradient(90deg, ${colors[1]} 0%, ${colors[2]} 100%)`,
    `linear-gradient(135deg, ${colors[2]} 0%, ${colors[0]} 100%)`,
    `linear-gradient(160deg ${colors[1]} 0%, ${colors[2]} 70%)`,
  ];

  return (
    <Flex className={`relative ${imageDimensions} ${containerClassName}`}>
      <motion.div
        initial={{ background: gradientConfigurations[0], opacity: 0.6 }}
        animate={{
          background: gradientConfigurations,
          opacity: 1,
          transition: {
            duration: speed,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
        style={shapeStyle}
        className={`absolute inset-0 flex justify-center items-center ${imageDimensions}`}
      >
        {text && (
          <span className={`${textClassName} ${textColor}`}>{text}</span>
        )}
        <BouncingDots />
      </motion.div>
    </Flex>
  );
}
