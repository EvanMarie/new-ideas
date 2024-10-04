import { Center, Flex } from "~/buildingBlockComponents/mainContainers";

export default function ChartContainer({
  children,
  className,
  height = "h-[60vh]",
  width = "w-98% md:w-95%",
}: {
  children: React.ReactNode;
  className?: string;
  height?: string;
  width?: string;
}) {
  return (
    <Center className="w-full">
      <Flex
        className={` border-900-md shadowBroadLooser justify-center ${width} ${height} ${className} relative`}
      >
        {" "}
        <Flex
          className={`w-full h-full bg-slate-900 rounded-none border-900-md shadowNarrowTight`}
        >
          {children}
        </Flex>
      </Flex>
    </Center>
  );
}
