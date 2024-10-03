import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // or "@remix-run/react" depending on your setup

export const useScrollToTopOnNav = (
  scrollRef: React.RefObject<HTMLDivElement>
) => {
  const location = useLocation();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [location.pathname]);
};
