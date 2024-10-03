import { FlexFull } from "~/buildingBlockComponents/mainContainers";
import { randomizedImagesWithTitles } from "../portfolio+/components-data/project-data";
import ShiftingImages from "~/mainDesignComponents/visual-elements/shiftingImages";

export default function Test() {
  return (
    <ShiftingImages
      imagesAndTitles={randomizedImagesWithTitles}
      imageDimensions="h-50svh w-full"
    />
  );
}
