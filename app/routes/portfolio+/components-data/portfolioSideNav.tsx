import { Transition, VStack } from "~/buildingBlockComponents/mainContainers";
import { Projects } from "./project-data";
import { NavLink } from "@remix-run/react";
import Tooltip from "~/buildingBlockComponents/tooltip";

export default function PortfolioSideNav({
  projectSlug,
}: {
  projectSlug: string;
}) {
  const lenProjects = Projects.length;
  return (
    <Transition
      className="hidden md:flex fixed right-1vh top-1vh h-90svh flex-shrink-0 p-0.5vh z-40 overflow-visible w-7vh lg:w-10vh"
      delay={0.3}
      type="zoom"
    >
      <VStack className="w-full justify-around ">
        {Projects.map((project) => (
          <NavLink
            key={project.slug}
            className={`w-5vh h-5vh lg:w-7vh lg:h-7vh rounded-full border-900-md ${
              projectSlug === project.slug ? "boxGlowSm" : "shadowNarrowNormal"
            } hover:boxGlowSm transition-300 hover:scale-102 hover:cursor-pointer`}
            to={`/portfolio/${project.slug}`}
          >
            <Tooltip
              label={project.title}
              className="w-full h-full"
              placement="left"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full rounded-full"
              />
            </Tooltip>
          </NavLink>
        ))}
      </VStack>
    </Transition>
  );
}
