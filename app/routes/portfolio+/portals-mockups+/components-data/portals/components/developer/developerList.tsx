import Text from "~/components/buildingBlocks/text";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function DeveloperList({
  heading,
  highlightColor,
  listItems,
  textClassName = "sm:text-[2vh] md:text-[2.3vh] lg:text-[2.1vh] xl:text-[2.5vh] xxl:text-[2.7vh]",
}: {
  heading: string;
  highlightColor: string;
  listItems: string[];
  textClassName?: string;
}) {
  return (
    <VStackFull>
      <Text className={`${highlightColor} text-[3.3vh] leading-tight`}>
        {heading}
      </Text>
      {listItems.map((item, index) => (
        <Text key={index} className={textClassName}>
          {item}
        </Text>
      ))}
    </VStackFull>
  );
}
