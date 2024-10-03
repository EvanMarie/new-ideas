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
import ReturnToButton from "~/mainDesignComponents/returnToButton";
import ProjectButton from "~/mainDesignComponents/projectButton";
import { BiSmile } from "react-icons/bi";

export default function Test() {
  return (
    <FlexFull className="h-100svh overflow-y-auto">
      <ReturnToButton to="/portfolio" />
      <ProjectButton icon={BiSmile} label="test" to="/home" />
    </FlexFull>
  );
}
