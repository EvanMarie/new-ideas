import { useState, useEffect } from "react";

export const useWindowDimensions = () => {
  // Function to get the current window dimensions
  const getWindowDimensions = () => {
    if (typeof window !== "undefined") {
      const { innerWidth: width, innerHeight: height } = window;
      return { width, height };
    }
    return { width: 0, height: 0 }; // Fallback for server-side rendering
  };

  // State to store window dimensions
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};
