import {
  FlexFull,
  Transition,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import MainNavBar from "./mainNavBar";
import { useRef } from "react";
import ScrollProgressBar from "./visual-elements/scrollProgressBar";
import ReturnToButton from "./returnToButton";
import { useParams } from "@remix-run/react";
import InsetShadowOverlay from "./visual-elements/insetShadowOverlay";
import PortfolioSideNav from "~/routes/portfolio+/components-data/portfolioSideNav";
import ScrollToTopButton from "~/buildingBlockComponents/scrollToTopButton";

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
  return (
    <>
      {projectSlug && <PortfolioSideNav projectSlug={projectSlug} />}
      {showNav && <MainNavBar />}
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
      {returnTo && <ReturnToButton to={returnTo} />}
      <InsetShadowOverlay position="top" size="xl" />
      <InsetShadowOverlay
        position="bottom"
        size="md"
        bottom="bottom-[5.5svh] md:bottom-[4.5svh]"
      />
      <ScrollToTopButton scrollContainerRef={scrollRef} />
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
