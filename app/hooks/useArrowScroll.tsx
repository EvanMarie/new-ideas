import { useEffect } from "react";
import throttle from "lodash/throttle"; // Import throttle directly
import { useWindowDimensions } from "./useWindowDimensions";

// Custom hook for handling scroll via arrow keys
export const useArrowKeyScroll = (
  scrollRef: React.RefObject<HTMLDivElement>,
  throttleLimit = 500
) => {
  const { height: windowHeight } = useWindowDimensions();

  useEffect(() => {
    const handleKeyDown = throttle((event: KeyboardEvent) => {
      if (scrollRef.current) {
        if (event.key === "ArrowUp") {
          scrollRef.current.scrollBy({
            top: -windowHeight * 0.9,
            behavior: "smooth",
          });
        } else if (event.key === "ArrowDown") {
          scrollRef.current.scrollBy({
            top: windowHeight * 0.9,
            behavior: "smooth",
          });
        }
      }
    }, throttleLimit);

    // Attach event listener
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [windowHeight, scrollRef, throttleLimit]);
};
