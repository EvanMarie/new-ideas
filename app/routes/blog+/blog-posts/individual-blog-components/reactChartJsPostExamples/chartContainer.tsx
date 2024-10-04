import { CenterFull, Flex } from "~/buildingBlockComponents/mainContainers";

export default function ChartContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CenterFull>
      <Flex className="w-95% max-w-95% max-h-[60vh] p-[1vh] bg-slate-900 bg-gradient-to-br from-violet-900/50 via-indigo-900/50 to-cyan-900/50 border-900-md shadowBroadLooser justify-center">
        {children}
      </Flex>
    </CenterFull>
  );
}
