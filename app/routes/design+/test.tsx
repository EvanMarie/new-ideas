import { Box, FlexFull } from "~/buildingBlockComponents/mainContainers";
import { randomizedImagesWithTitles } from "../portfolio+/components-data/project-data";
import ShiftingImages from "~/mainDesignComponents/visual-elements/shiftingImages";

export default function Test() {
  return (
    <Box className="w-100vw px-15vw">
      <ShiftingImages
        imagesAndTitles={randomizedImagesWithTitles}
        imageClassName="border-900-md shadowNarrowNormal"
        imageDimensions="max-w-70vw"
        type="fadeSlideInLeftHalf"
      />
    </Box>
  );
}
