import { FlexFull } from "~/buildingBlockComponents/mainContainers";

export default function InnerContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <FlexFull
      className={`justify-center absolute top-[5.8svh] right-0 left-0 bg-black h-89.5svh ${className}`}
    >
      {children}
    </FlexFull>
  );
}
