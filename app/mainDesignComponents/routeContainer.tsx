import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  FlexFull,
  Transition,
  VStack,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import MainNavBar from "./mainNavBar";
import ScrollProgressBar from "./visual-elements/scrollProgressBar";
import { NavLink, useLocation, useParams } from "@remix-run/react";
import InsetShadowOverlay from "./visual-elements/insetShadowOverlay";
import PortfolioSideNav from "~/routes/portfolio+/components-data/portfolioSideNav";
import ScrollToTopButton from "~/buildingBlockComponents/scrollToTopButton";
import Image from "~/buildingBlockComponents/image";
import AnimatedText from "./visual-elements/animatedText";
import { useArrowKeyScroll } from "~/hooks/useArrowScroll";
import ImageWallFullScreenBackground from "./visual-elements/imageWallFullScreenBackground";
import { landingShiftingImages } from "~/routes/home+/components-data/shiftingImages";

// Throttle function to limit the frequency of event triggers
function throttle(func: (...args: any[]) => void, limit: number) {
  let lastFunc: NodeJS.Timeout;
  let lastRan: number;

  return function (...args: any[]) {
    if (!lastRan) {
      func(...args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func(...args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

export default function RouteContainer({
  children,
  showNav = true,
  showScrollProgress = true,
  bg,
}: {
  children: React.ReactNode;
  showNav?: boolean;
  showScrollProgress?: boolean;
  bg?: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const projectSlug = useParams().projectSlug;
  const location = useLocation();
  const isHome = location.pathname === "/home";
  const isRoot = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll event and set isScrolled state
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollPosition = scrollRef.current.scrollTop;
        const viewportHeight = window.innerHeight;
        setIsScrolled(scrollPosition > viewportHeight * 0.08);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // New effect to handle scrolling to top on URL change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [location.pathname]);

  useArrowKeyScroll(scrollRef);

  const baseTextClassName =
    "text-violet-950 textGlowXs tracking-wider kufam-font transition-all transition-400";
  const textClassName = isScrolled
    ? `${baseTextClassName} text-3vh xl:text-4vh`
    : `${baseTextClassName} text-5vh xl:text-6vh`;

  return (
    <>
      {/* ***************** ON FROM HOME INDEX ***************** */}
      {isHome && (
        <>
          <Image
            src="/images/darkviolet.png"
            alt="Dark Violet"
            className="absolute bottom-5vh md:bottom-3.5vh left-5vh h-16vh z-30"
          />
        </>
      )}

      {/* ***************** DARK VIOLET LOGO ***************** */}
      {!isRoot && (
        <Box className="fixed top-0.5vh left-0.5vh z-30">
          <NavLink to="/home">
            <VStack gap="gap-0" align="items-start">
              <AnimatedText
                text="DarkViolet.ai"
                textClassName={textClassName}
              />
              <span className="text-1vh leading-1.3vh text-col-500 ">
                © 2024 All rights reserved.
              </span>
            </VStack>
          </NavLink>
        </Box>
      )}
      {/* ***************** ON PORTFOLIO PROJECT PAGE ***************** */}
      {projectSlug && <PortfolioSideNav projectSlug={projectSlug} />}

      {/* ***************** WHEN TO SHOW NAV ***************** */}
      {showNav && <MainNavBar />}

      {/* ***************** WHEN TO SHOW PROGRESS ***************** */}
      {showScrollProgress && (
        <ScrollProgressBar
          trackColor="bg-indigo-900/80"
          shadow=""
          containerRef={scrollRef}
          position="fixed bottom-[5svh] md:bottom-[4svh]"
          height="h-0.5vh"
          zIndex="z-10"
          color="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-purple-300"
        />
      )}

      {/* ***************** INSET SHADOWS TOP & BOTTOM ***************** */}
      <InsetShadowOverlay position="top" size="xl" />
      <InsetShadowOverlay
        position="bottom"
        size="md"
        bottom="bottom-[5.5svh] md:bottom-[4.5svh]"
      />
      {/* ***************** SCROLL TO TOP BUTTON ***************** */}
      <ScrollToTopButton scrollContainerRef={scrollRef} />
      {/* ***************** CONTENT OF PAGE ***************** */}
      <FlexFull
        className={`w-full h-100svh overflow-hidden ${bg} ${
          showScrollProgress ? "pb-4.5vh" : "pb-4svh"
        } `}
      >
        <FlexFull
          className="pt-5svh h-95.5svh overflow-y-auto overflow-x-hidden hide-scrollbar insetShadow6xl rounded-none relative"
          ref={scrollRef}
        >
          <Transition type="fadeSlideInBottom" className="w-full h-fit z-30">
            <VStackFull className="h-fit py-1vh">{children}</VStackFull>
          </Transition>
        </FlexFull>
      </FlexFull>
    </>
  );
}
