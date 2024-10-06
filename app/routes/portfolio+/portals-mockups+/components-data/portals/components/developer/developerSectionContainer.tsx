import CenterFull from "~/components/buildingBlocks/centerFull";
import FlexFull from "~/components/buildingBlocks/flexFull";

export default function DeveloperSectionContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlexFull className="h-full pt-[7vh] sm:pt-[6vh] pb-[7vh] max-h-full">
      <FlexFull className="overflow-hidden h-[81.5svh] max-h-[81.5svh] sm:h-[80.3svh] sm:max-h-[80.3svh] md:h-[78.3svh] md:max-h-[78.3svh]">
        <FlexFull className="h-full overflow-y-auto">{children}</FlexFull>
      </FlexFull>
    </FlexFull>
  );
}
