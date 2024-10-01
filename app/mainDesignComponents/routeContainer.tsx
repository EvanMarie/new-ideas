import {
  Transition,
  VStack,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import MainNavBar from "./mainNavBar";
import { useRef } from "react";
import ScrollProgressBar from "./visual-elements/scrollProgressBar";
import ReturnToButton from "./returnToButton";
import { useLocation, useParams } from "@remix-run/react";

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
      {showNav && <MainNavBar />}
      {showScrollProgress && (
        <ScrollProgressBar
          containerRef={scrollRef}
          position="fixed bottom-[4svh]"
          height="h-0.5vh"
          zIndex="z-10"
        />
      )}
      {returnTo && <ReturnToButton to={returnTo} />}
      <Transition
        className={`w-full h-100svh pt-5svh ${
          showScrollProgress ? "pb-4.5vh" : "pb-4svh"
        } overflow-y-auto overflow-x-hidden hide-scrollbar`}
        type="fadeSlideInBottom"
        ref={scrollRef}
      >
        <VStackFull className="h-fit py-1vh">{children}</VStackFull>
      </Transition>
    </>
  );
}
