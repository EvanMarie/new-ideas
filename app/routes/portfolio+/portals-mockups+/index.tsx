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

export default function PortalMockupIndex() {
  return (
    <>
      <Wrap className="pt-4vh">
        {portalsAndMockupsData.map((project) => (
          <NavLink
            to={project.slug}
            className="w-full px-1vh py-0.5vh sm:px-2vh sm:py-1vh"
          >
            <FlexFull className="bg-indigo-950/60">
              <HStackFull gap="gap-1.5vh">
                <Flex className="w-25vh h-25vh flex-shrink-0">
                  <Image
                    src={project.thubmnail}
                    alt={project.title}
                    className="h-full w-full"
                  />
                </Flex>
                <VStackFull align="items-start">
                  <Text className="text-xl text-col-500 textShadow">
                    {project.title}
                  </Text>
                  <Text className="text-fuchsia-300 textShadow">
                    {project.tagline}
                  </Text>
                  <Text>{project.description}</Text>
                </VStackFull>
              </HStackFull>
            </FlexFull>
          </NavLink>
        ))}
      </Wrap>
    </>
  );
}
