import FlexFull from "~/components/buildingBlocks/flexFull";
import ReturnPortalsMockups from "../../returnPortalsMockups";
import { useRef } from "react";
import TransitionFull from "~/components/buildingBlocks/TransitionFull";

export default function MockupTemplate() {
  const layoutContainerRef = useRef<HTMLDivElement>(null);
  return (
    <FlexFull className="h-[100svh] bg-white">
      <TransitionFull className="rounded-none">
        <FlexFull
          className="h-[100svh] overflow-y-auto rounded-none"
          ref={layoutContainerRef}
        >
          {" "}
          <ReturnPortalsMockups />
        </FlexFull>
      </TransitionFull>
    </FlexFull>
  );
}
