import { FlexFull } from "~/buildingBlockComponents/mainContainers";

export default function DarkFlexFull({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <FlexFull
      className={`bg-slate-900/80 p-1vh border-900-md shadowNarrowNormal`}
    >
      {children}
    </FlexFull>
  );
}
