import { Box, FlexFull, Wrap } from "~/buildingBlockComponents/mainContainers";
import { landingShiftingImages } from "../home+/components-data/shiftingImages";
import ImageWall from "~/mainDesignComponents/visual-elements/imageWall";

export default function Test() {
  const images = landingShiftingImages.map((image) => image.src);

  return (
    <FlexFull className="justify-center h-100svh overflow-y-auto items-center">
      <ImageWall imageArray={images} />
    </FlexFull>
  );
}
