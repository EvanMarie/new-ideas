import {
  FlexFull,
  HStackFull,
  Wrap,
} from "~/buildingBlockComponents/mainContainers";
import { portalsAndMockupsData } from "./components-data/mockups-portals-data";
import Text from "~/buildingBlockComponents/text";
import Image from "~/buildingBlockComponents/image";
import { NavLink } from "react-router-dom";

export default function PortalMockupIndex() {
  return (
    <>
      <Wrap className="pt-4vh">
        {portalsAndMockupsData.map((project) => (
          <NavLink
            to={project.slug}
            className="w-full px-1vh py-0.5vh sm:px-2vh sm:py-1vh"
          >
            <FlexFull>
              <HStackFull>
                <Image
                  src={project.thubmnail}
                  alt={project.title}
                  className="h-25vh w-25vh"
                />
                <Text>{project.title}</Text>
              </HStackFull>
            </FlexFull>
          </NavLink>
        ))}
      </Wrap>
    </>
  );
}
