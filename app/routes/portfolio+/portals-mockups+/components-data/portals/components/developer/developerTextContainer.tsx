import Flex from "~/components/buildingBlocks/flex";
import VStack from "~/components/buildingBlocks/vStack";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function DeveloperTextContainer({
  children,
  containerClassName,
  border,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  border: string;
}) {
  return (
    <Flex className={`shadowBroadLoose ${containerClassName}`}>
      <VStackFull
        gap="gap-[1.5vh]"
        className={`p-[2vh] bg-slate-100 insetShadowXl ${border} `}
      >
        {children}
      </VStackFull>
    </Flex>
  );
}
