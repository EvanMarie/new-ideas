import { useEffect, useCallback } from "react";
import throttle from "lodash/throttle";
import { useWindowDimensions } from "./useWindowDimensions";

// Custom hook for handling scroll via arrow keys
export const useArrowKeyScroll = (
  scrollRef: React.RefObject<HTMLDivElement>,
  throttleLimit = 500
) => {
  const { height: windowHeight } = useWindowDimensions();

  // Memoized scroll function to avoid re-creating the handler
  const handleKeyDown = useCallback(
    throttle((event: KeyboardEvent) => {
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
    }, throttleLimit),
    [scrollRef, windowHeight, throttleLimit]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
};
