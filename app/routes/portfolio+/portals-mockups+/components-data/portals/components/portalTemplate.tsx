import FlexFull from "~/components/buildingBlocks/flexFull";
import { useRef } from "react";
import ReturnToPortalsButton from "./returnToPortalsButton";
import TransitionFull from "~/components/buildingBlocks/TransitionFull";

export default function PortalTemplate() {
  const layoutContainerRef = useRef<HTMLDivElement>(null);
  return (
    <FlexFull className="h-[100svh] bg-white">
      <TransitionFull className="rounded-none">
        <FlexFull
          className="h-[100svh] overflow-y-auto rounded-none"
          ref={layoutContainerRef}
        >
          {" "}
          <ReturnToPortalsButton />
        </FlexFull>
      </TransitionFull>
    </FlexFull>
  );
}
