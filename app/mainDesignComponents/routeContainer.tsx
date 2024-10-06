import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  FlexFull,
  Transition,
  VStack,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import ScrollProgressBar from "./visual-elements/scrollProgressBar";
import { NavLink, useLocation, useParams } from "@remix-run/react";
import InsetShadowOverlay from "./visual-elements/insetShadowOverlay";
import PortfolioSideNav from "~/routes/portfolio+/components-data/portfolioSideNav";
import ScrollToTopButton from "~/buildingBlockComponents/scrollToTopButton";
import Image from "~/buildingBlockComponents/image";
import AnimatedText from "./visual-elements/animatedText";
import { useArrowKeyScroll } from "~/hooks/useArrowScroll";
import { useScrollToHash } from "~/utils/useScrollToHash";
import { useScrollToTopOnNav } from "~/hooks/useScrollToTopOnNav";
import Icon from "~/buildingBlockComponents/icon";
import { BsChatDotsFill } from "react-icons/bs";
import Tooltip from "~/buildingBlockComponents/tooltip";
import BlogSideNav from "~/routes/blog+/blog-components/blogSideNav";

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
  showScrollProgress = true,
  transition = "fadeSlideInBottom",
  padding = "pt-5.5svh sm:pt-6.5vh md:pt-7.5vh lg:pt-9vh xl:pt-10vh",
  noPadding = false,
  bg = "bg-violet-300/30 backdrop-blur-xs",
}: {
  children: React.ReactNode;
  showScrollProgress?: boolean;
  padding?: string;
  bg?: string;
  transition?: string;
  noPadding?: boolean;
}) {
  const pathname = useLocation().pathname;
  const scrollRef = useRef<HTMLDivElement>(null);
  const projectSlug = useParams().projectSlug;
  const blogSlug = useParams().blogSlug;
  const location = useLocation();
  const isHome = pathname === "/home";
  const isRoot = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  useScrollToHash();
  useArrowKeyScroll(scrollRef);
  useScrollToTopOnNav(scrollRef);

  // Effect to handle scroll event and set isScrolled state
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollPosition = scrollRef.current.scrollTop;
        const viewportHeight = window.innerHeight;
        setIsScrolled(scrollPosition > viewportHeight * 0.02);
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

  const baseTextClassName =
    "text-indigo-900 tracking-wider kufam-font transition-all transition-400 font-semibold";
  const textClassName = isScrolled
    ? `${baseTextClassName} text-3vh xl:text-4vh textGlowXs`
    : `${baseTextClassName} text-5.3vh sm:text-6.5vh md:text-7.5vh lg:text-9vh xl:text-10vh textGlowSm`;

  return (
    <>
      {/* ***************** DARK VIOLET IMAGE CHAT ***************** */}
      <NavLink
        to={`/chat?from=${pathname}`}
        className="absolute bottom-[5svh] md:bottom-[3.5svh] left-1vh hover:cursor-pointer z-50"
      >
        <Tooltip label="Dark Violet chat" placement="topRight">
          <Box className="relative group">
            <Box>
              <Icon
                iconClassName="absolute top-0 -right-3vh text-3vh md:text-4.2vh text-col-500 rotate-10   group-hover:rotate-30 transition-300 "
                icon={BsChatDotsFill}
              />
            </Box>
            <Image
              src="/images/darkviolet.png"
              alt="Dark Violet"
              className="h-13vh md:h-20vh hover:cursor-pointer"
            />
          </Box>
        </Tooltip>
      </NavLink>

      {/* ***************** INSET SHADOWS TOP & BOTTOM ***************** */}
      <InsetShadowOverlay position="top" size="lg" />
      <InsetShadowOverlay
        position="bottom"
        size="sm"
        bottom="bottom-[5.5svh] md:bottom-[4.5svh]"
      />

      {/* ***************** DARK VIOLET NAME LOGO ***************** */}
      {!isRoot && (
        <Box className="fixed top-1.5vh left-0.5vh z-45 pl-1vh">
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

      {/* ***************** ON BLOG POST PAGE ***************** */}
      {blogSlug && <BlogSideNav />}

      {/* ***************** WHEN TO SHOW PROGRESS ***************** */}
      {showScrollProgress && (
        <ScrollProgressBar
          trackColor="bg-slate-900/90"
          shadow=""
          containerRef={scrollRef}
          position="fixed bottom-[5svh] md:bottom-[4svh]"
          height="h-0.5vh"
          zIndex="z-40"
          color="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-purple-300"
        />
      )}

      {/* ***************** SCROLL TO TOP BUTTON ***************** */}
      <ScrollToTopButton scrollContainerRef={scrollRef} />

      {/* ***************** CONTENT OF PAGE ***************** */}
      <FlexFull
        className={`w-full h-100svh overflow-hidden ${bg} ${
          showScrollProgress ? "pb-4.5vh" : "pb-4svh"
        } `}
      >
        <FlexFull
          className={`${padding} h-95.5svh overflow-y-auto overflow-x-hidden hide-scrollbar insetShadow6xl rounded-none relative`}
          ref={scrollRef}
        >
          <Transition type={transition} className="w-full h-fit z-30">
            <VStackFull
              className={`h-fit ${
                noPadding ? "" : "py-1vh"
              } pb-9vh md:pb-16vh xxl:pb-3vh`}
            >
              {children}
            </VStackFull>
          </Transition>
        </FlexFull>
      </FlexFull>
    </>
  );
}
