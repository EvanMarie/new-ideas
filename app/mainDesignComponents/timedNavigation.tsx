import { ReactNode, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function TimedNavigation({
  children,
  fadeIn = true,
  fadeInDuration = 0.5,
  fadeInDelay = 0,
  screenTime = 6000, // Default to 6000 milliseconds (6 seconds)
  onScreenTimeComplete, // Callback function to execute after screen time
  className,
}: {
  children: ReactNode;
  fadeIn?: boolean;
  fadeInDuration?: number;
  fadeInDelay?: number;
  screenTime?: number;
  onScreenTimeComplete?: () => void; // Callback function type
  className?: string;
}) {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const sequence = async () => {
      // Start the fade-in animation if enabled
      if (fadeIn) {
        await controls.start({
          opacity: 1,
          scale: 1,
          transition: { delay: fadeInDelay, duration: fadeInDuration },
        });
      }

      // Wait for the specified screen time
      await new Promise((resolve) => setTimeout(resolve, screenTime));

      // Scale out the content to zero
      await controls.start({
        opacity: 0,
        transition: { duration: 1 }, // Customize this duration as needed
      });

      // Execute the callback function after the screen time is complete
      if (onScreenTimeComplete) {
        onScreenTimeComplete();
      }

      // Set the visibility to false to unmount or hide the component
      setIsVisible(false);
    };

    sequence();
  }, [
    controls,
    fadeIn,
    fadeInDuration,
    fadeInDelay,
    screenTime,
    onScreenTimeComplete,
  ]);

  if (!isVisible) return null; // Do not render the component if it is not supposed to be visible

  return (
    <motion.div
      initial={{ opacity: fadeIn ? 0 : 1, scale: fadeIn ? 0 : 1 }}
      animate={controls}
      className={`${className} w-screen h-screen flex justify-center items-center`}
    >
      {children}
    </motion.div>
  );
}
