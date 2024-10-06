import { NavLink } from "@remix-run/react";
import { PortalMockupProps } from "./mockups-portals-data";
import {
  Flex,
  FlexFull,
  HStack,
  HStackFull,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import Image from "~/buildingBlockComponents/image";
import Text from "~/buildingBlockComponents/text";
import { ScrollTransition } from "~/mainDesignComponents/scrollTransition";
import IconButton from "~/buildingBlockComponents/iconButton";
import { FaGithub, FaLink } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import ProjectButton from "~/mainDesignComponents/projectButton";
import { PiGithubLogoFill } from "react-icons/pi";

export default function PortalMockupCard({
  project,
  index,
}: {
  project: PortalMockupProps;
  index: number;
}) {
  return (
    <ScrollTransition className="p-1vh">
      <NavLink to={project.slug} className="w-full justify-center ">
        <Flex className="bg-indigo-950/60 border-900-md shadowNarrowNormal py-2vh w-42svh sm:w-56svh lg:w-66svh xl:w-61svh xxl:w-66svh sm:py-3vh xl:h-full hover:metallicEdgesXs hover:scale-101 transition-300">
          <Flex className="flex-col items-center gap-2vh">
            <Flex className="w-38svh h-38svh sm:w-50svh sm:h-50svh lg:w-60svh lg:h-60svh xl:w-55svh xl:h-55svh xxl:w-60svh xxl:h-60svh flex-shrink-0 border-900-md shadowNarrowNormal">
              <Image
                src={project.thubmnail}
                alt={project.title}
                className="h-full w-full"
              />
            </Flex>
            <FlexFull className="p-1vh sm:px-2vh md:px-3vh ">
              <VStackFull align="items-end text-right" gap="gap-1vh">
                <HStackFull className="justify-between">
                  <HStack
                    gap="gap-1vh"
                    onClick={(
                      e: React.MouseEvent<HTMLDivElement, MouseEvent>
                    ) => {
                      e.stopPropagation();
                    }}
                  >
                    {project.githubLink && (
                      <ProjectButton
                        label="github"
                        icon={PiGithubLogoFill}
                        to={project.githubLink}
                        target="_blank"
                      />
                    )}
                    {project.originalLink && (
                      <ProjectButton
                        label="original"
                        icon={IoIosLink}
                        to={project.originalLink}
                        target="_blank"
                      />
                    )}
                  </HStack>
                  <Text className="text-xl text-col-500 textShadow">
                    {project.title}
                  </Text>
                </HStackFull>
                <Text className="text-fuchsia-300 textShadow">
                  {project.tagline}
                </Text>
                <Text className="text-md lg:text-lg">
                  {project.description}
                </Text>
              </VStackFull>
            </FlexFull>
          </Flex>
        </Flex>
      </NavLink>
    </ScrollTransition>
  );
}
