import Flex from "~/components/buildingBlocks/flex";
import Text from "~/components/buildingBlocks/text";
import VStack from "~/components/buildingBlocks/vStack";

export default function DeveloperHeading({
  highlightColor,
  heading,
  subheading,
}: {
  highlightColor: string;
  heading?: string;
  subheading?: string;
}) {
  return (
    <VStack gap="gap-[0px]">
      {heading && (
        <Flex>
          <Text className={`${highlightColor} text-[3.3vh] leading-tight`}>
            {heading}
          </Text>
        </Flex>
      )}
      {subheading && (
        <Flex>
          <Text className={`text-[3vh] leading-tight`}>{subheading}</Text>
        </Flex>
      )}
    </VStack>
  );
}
