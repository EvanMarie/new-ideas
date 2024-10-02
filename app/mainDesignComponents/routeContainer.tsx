import {
  FlexFull,
  Transition,
  VStack,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import MainNavBar from "./mainNavBar";
import { useRef } from "react";
import ScrollProgressBar from "./visual-elements/scrollProgressBar";
import ReturnToButton from "./returnToButton";
import { NavLink, useLocation, useParams } from "@remix-run/react";
import { Projects } from "~/routes/portfolio+/components-data/project-data";
import InsetShadowOverlay from "./visual-elements/insetShadowOverlay";
import PortfolioSideNav from "~/routes/portfolio+/components-data/portfolioSideNav";
import ScrollToTop from "~/buildingBlockComponents/scrollToTopButton";
import ScrollToTopButton from "~/buildingBlockComponents/scrollToTopButton";

export default function RouteContainer({
  children,
  showNav = true,
  showScrollProgress = true,
}: {
  children: React.ReactNode;
  showNav?: boolean;
  showScrollProgress?: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const projectSlug = useParams().projectSlug;
  const returnTo = projectSlug ? `/portfolio` : "";
  return (
    <>
      {projectSlug && <PortfolioSideNav projectSlug={projectSlug} />}
      {showNav && <MainNavBar />}
      {showScrollProgress && (
        <ScrollProgressBar
          trackColor="bg-slate-900/80"
          shadow=""
          containerRef={scrollRef}
          position="fixed bottom-[4svh]"
          height="h-0.5vh"
          zIndex="z-10"
          color="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-purple-300"
        />
      )}
      {returnTo && <ReturnToButton to={returnTo} />}
      <InsetShadowOverlay position="top" size="xl" />
      <InsetShadowOverlay
        position="bottom"
        size="md"
        bottom="bottom-[4.5svh]"
      />
      <ScrollToTopButton scrollContainerRef={scrollRef} />
      <FlexFull
        className={`w-full h-100svh overflow-hidden ${
          showScrollProgress ? "pb-4.5vh" : "pb-4svh"
        } `}
        type="fadeSlideInBottom"
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
