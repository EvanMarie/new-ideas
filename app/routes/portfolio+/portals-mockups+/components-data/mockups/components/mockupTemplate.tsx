import FlexFull from "~/components/buildingBlocks/flexFull";
import ReturnToMockupsButton from "./returnToMockupsButton";
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
          <ReturnToMockupsButton />
        </FlexFull>
      </TransitionFull>
    </FlexFull>
  );
}
