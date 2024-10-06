import { NavLink } from "@remix-run/react";
import { PortalMockupProps } from "./mockups-portals-data";
import {
  Flex,
  FlexFull,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import Image from "~/buildingBlockComponents/image";
import Text from "~/buildingBlockComponents/text";
import { ScrollTransition } from "~/mainDesignComponents/scrollTransition";

export default function PortalMockupCard({
  project,
  index,
}: {
  project: PortalMockupProps;
  index: number;
}) {
  return (
    <ScrollTransition className="p-1vh">
      <NavLink to={project.slug} className="w-full justify-center">
        <Flex className="bg-indigo-950/60 py-2vh w-42svh">
          <Flex className="flex-col items-center gap-2vh">
            <Flex className="w-38svh h-38svh flex-shrink-0">
              <Image
                src={project.thubmnail}
                alt={project.title}
                className="h-full w-full"
              />
            </Flex>
            <FlexFull className="p-1vh">
              <VStackFull align="items-end text-right">
                <Text className="text-xl text-col-500 textShadow">
                  {project.title}
                </Text>
                <Text className="text-fuchsia-300 textShadow">
                  {project.tagline}
                </Text>
                <Text>{project.description}</Text>
              </VStackFull>
            </FlexFull>
          </Flex>
        </Flex>
      </NavLink>
    </ScrollTransition>
  );
}
