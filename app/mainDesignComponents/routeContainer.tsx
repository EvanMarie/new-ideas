import {
  FlexFull,
  Transition,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import MainNavBar from "./mainNavBar";
import { useRef } from "react";
import ScrollProgressBar from "./visual-elements/scrollProgressBar";
import ReturnToButton from "./returnToButton";
import { useLocation, useParams } from "@remix-run/react";
import InsetShadowOverlay from "./visual-elements/insetShadowOverlay";
import PortfolioSideNav from "~/routes/portfolio+/components-data/portfolioSideNav";
import ScrollToTopButton from "~/buildingBlockComponents/scrollToTopButton";
import Image from "~/buildingBlockComponents/image";

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
  const returnTo = projectSlug ? `/portfolio` : "";
  const isHome = useLocation().pathname === "/home";
  return (
    <>
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

      {/* ***************** WHEN TO SHOW RETURN TO ***************** */}
      {returnTo && <ReturnToButton to={returnTo} />}

      {/* ***************** INSET SHADOWS TOP & BOTTOM ***************** */}
      <InsetShadowOverlay position="top" size="xl" />
      <InsetShadowOverlay
        position="bottom"
        size="md"
        bottom="bottom-[5.5svh] md:bottom-[4.5svh]"
      />
      {/* ***************** SCROLL TO TOP BUTTON ***************** */}
      <ScrollToTopButton scrollContainerRef={scrollRef} />

      {/* ***************** ON FROM HOME INDEX ***************** */}

      {isHome && (
        <Image
          src="/images/darkviolet.png"
          alt="Dark Violet"
          className="absolute bottom-5vh md:bottom-4vh left-1vh h-16vh z-30"
        />
      )}

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
          <Transition type="fadeSlideInBottom" className="w-full h-fit">
            <VStackFull className="h-fit py-1vh">{children}</VStackFull>
          </Transition>
        </FlexFull>
      </FlexFull>
    </>
  );
}
