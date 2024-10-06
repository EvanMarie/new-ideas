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
            <FlexFull className="bg-indigo-950/60 py-2vh ">
              <FlexFull
                gap="gap-1.5vh"
                className="flex-col items-center gap-2vh"
              >
                <Flex className="w-90vw h-90vw flex-shrink-0">
                  <Image
                    src={project.thubmnail}
                    alt={project.title}
                    className="h-full w-full"
                  />
                </Flex>
                <FlexFull className="p-1vh">
                  <VStackFull align="items-start">
                    <Text className="text-xl text-col-500 textShadow">
                      {project.title}
                    </Text>
                    <Text className="text-fuchsia-300 textShadow">
                      {project.tagline}
                    </Text>
                    <Text>{project.description}</Text>
                  </VStackFull>
                </FlexFull>
              </FlexFull>
            </FlexFull>
          </NavLink>
        ))}
      </Wrap>
    </>
  );
}
