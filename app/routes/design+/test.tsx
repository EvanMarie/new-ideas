import { Box, FlexFull, Wrap } from "~/buildingBlockComponents/mainContainers";
import { landingShiftingImages } from "../home+/components-data/shiftingImages";
import ImageWall from "~/mainDesignComponents/visual-elements/imageWall";
import ImageWallFullScreenBackground from "~/mainDesignComponents/visual-elements/imageWallFullScreenBackground";

export default function Test() {
  const images = landingShiftingImages.map((image) => image.src);

  return <ImageWallFullScreenBackground images={images} />;
}
