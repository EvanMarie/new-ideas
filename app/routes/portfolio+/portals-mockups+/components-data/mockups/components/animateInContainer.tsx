import { motion } from "framer-motion";

export default function AnimteInContainer({
  delay = 0,
  children,
  trigger = 0,
  useSpan = false,
  className = "",
}: {
  delay?: number;
  children: React.ReactNode;
  trigger?: number;
  useSpan?: boolean;
  className?: string;
}) {
  const animationProps = {
    initial: { opacity: 0, y: useSpan ? 20 : "15vh" },
    whileInView: { opacity: 1, y: 0, x: 0 },
    transition: {
      opacity: {
        delay: delay,
        duration: useSpan ? 0.6 : 0.5,
      },
      y: {
        type: "spring",
        stiffness: useSpan ? 70 : 222,
        damping: useSpan ? 15 : 50,
        mass: 0.5,
        delay: delay,
      },
    },
  };

  return (
    <>
      {useSpan ? (
        <motion.span
          className={`${className} z-10`}
          initial={animationProps.initial}
          whileInView={animationProps.whileInView}
          transition={animationProps.transition}
          viewport={{
            once: true,
            amount: trigger,
          }}
        >
          {children}
        </motion.span>
      ) : (
        <motion.div
          className={`${className} h-full`}
          initial={animationProps.initial}
          whileInView={animationProps.whileInView}
          transition={animationProps.transition}
          viewport={{
            once: true,
            amount: trigger,
          }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
