import {
  Flex,
  FlexFull,
  HStackFull,
  VStackFull,
  Wrap,
} from "~/buildingBlockComponents/mainContainers";
import { portalsAndMockupsData } from "./components-data/mockups-portals-data";
import Text from "~/buildingBlockComponents/text";
import Image from "~/buildingBlockComponents/image";
import { NavLink } from "react-router-dom";
import PortalMockupCard from "./components-data/portalMockupCard";

export default function PortalMockupIndex() {
  return (
    <>
      <Wrap className="pt-4vh justify-evenly items-stretch">
        {portalsAndMockupsData.map((project, index) => (
          <PortalMockupCard project={project} index={index} />
        ))}
      </Wrap>
    </>
  );
}
