import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // or "@remix-run/react" depending on your setup

export const useScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [location.hash]);
};
