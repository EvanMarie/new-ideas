import Flex from "~/components/buildingBlocks/flex";
import Text from "~/components/buildingBlocks/text";

export default function DeveloperTextElement({
  children,
  containerClassName,
  textClassName = "sm:text-[2vh] md:text-[2.3vh] lg:text-[2.1vh] xl:text-[2.5vh] xxl:text-[2.7vh]",
}: {
  children: React.ReactNode;
  containerClassName?: string;
  textClassName?: string;
}) {
  return (
    <Flex className={containerClassName}>
      <Text className={textClassName}>{children}</Text>
    </Flex>
  );
}
