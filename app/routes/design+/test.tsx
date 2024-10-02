import { Center, FlexFull } from "~/buildingBlockComponents/mainContainers";
import PasswordInput from "~/buildingBlockComponents/passwordInput";
import Text from "~/buildingBlockComponents/text";
import AnimatedCarousel from "~/mainDesignComponents/visual-elements/shiftingImages";
import {
  allImagesWithTitles,
  allProjectImages,
} from "../portfolio+/components-data/project-data";
import ShiftingImages from "~/mainDesignComponents/visual-elements/shiftingImages";

export default function Test() {
  return (
    <FlexFull className="relative">
      {/* <AnimatedCarousel images={allProjectImages} /> */}
      <ShiftingImages imagesAndTitles={allImagesWithTitles} />
    </FlexFull>
  );
}
