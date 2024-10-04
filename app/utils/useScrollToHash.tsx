import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // or "@remix-run/react" for Remix apps

export const useScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = location.hash;
      if (hash) {
        // Defer execution to ensure elements are rendered
        setTimeout(() => {
          const target = document.querySelector(hash);
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 100); // Adjust the timeout if needed
      }
    };

    // Check if there's already a hash in the URL
    scrollToHash();

    // Scroll on hash change
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [location]);
};
