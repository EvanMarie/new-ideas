import FlexFull from "~/components/buildingBlocks/flexFull";

export function DeveloperContentStack({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <FlexFull
      className={`h-fit items-center flex-col gap-[2vh] pt-[1.5vh] pb-[3.5vh] sm:pb-[2vh] lg:h-full lg:flex-row lg:jusity-around ${className}`}
    >
      {children}
    </FlexFull>
  );
}

export function DeveloperStackLarge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <FlexFull
      className={`px-[2vh] flex-col lg:w-1/2 lg:justify-center xxl:w-7/12 xxl:px-[4vh] ${className}`}
    >
      {children}
    </FlexFull>
  );
}

export function DeveloperStackSmall({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <FlexFull className={`justify-center lg:w-1/2 xxl:w-5/12 ${className}`}>
      {children}
    </FlexFull>
  );
}

export function DeveloperStackHalf({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <FlexFull className={`justify-center lg:w-1/2 ${className}`}>
      {children}
    </FlexFull>
  );
}
