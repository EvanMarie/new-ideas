import { Box, FlexFull } from "~/buildingBlockComponents/mainContainers";
import { randomizedImagesWithTitles } from "../portfolio+/components-data/project-data";
import ShiftingImages from "~/mainDesignComponents/visual-elements/shiftingImages";

export default function Test() {
  return (
    <ShiftingImages
      imagesAndTitles={randomizedImagesWithTitles}
      imageClassName="border-900-md shadowNarrowNormal"
      imageDimensions="h-70vh"
      type="rotate3D"
    />
  );
}
