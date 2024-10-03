import {
  FlexFull,
  VStack,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import {
  allImagesWithTitles,
  randomizedImagesWithTitles,
} from "../portfolio+/components-data/project-data";
import ShiftingImages from "~/mainDesignComponents/visual-elements/shiftingImages";
import {
  landingShiftingImages,
  shuffledShiftingImages,
} from "../home+/components-data/shiftingImages";
import Image from "~/buildingBlockComponents/image";
import Text from "~/buildingBlockComponents/text";

export default function Test() {
  return (
    <FlexFull className="h-100svh overflow-y-auto">
      <VStackFull className="h-fit py-2vh" gap="gap-2vh ">
        {shuffledShiftingImages .map((image, index) => (
          <VStack align="items-start" key={image.id}>
            <Text className="text-cyan-300 textShadow">id: {image.id}</Text>
            <Image
              src={image.src}
              key={index}
              alt={image.title}
              className="h-40vh"
            />
          </VStack>
        ))}
      </VStackFull>
    </FlexFull>
  );
}
