import { NavLink, useParams } from "@remix-run/react";
import { PortfolioItem, Projects } from "./components-data/project-data";
import PortfolioProjectDisplay from "./components-data/portfolioProjectDisplay";
import {
  Box,
  FlexFull,
  Transition,
  VStack,
} from "~/buildingBlockComponents/mainContainers";

export default function PortfolioItemIndex() {
  const projectSlug = useParams().projectSlug;
  const project = Projects.find((project) => project.slug === projectSlug);
  return (
    <>
      <FlexFull className="justify-center md:justify-start pb-4vh">
        <FlexFull className="justify-center">
          <PortfolioProjectDisplay portfolioItem={project as PortfolioItem} />
        </FlexFull>
        <Transition
          className="hidden md:flex fixed right-1vw top-4vh h-85svh flex-shrink-0"
          delay={0.5}
        >
          <VStack className="w-8vw lg:w-9vh justify-around bg-slate-800/50 bg-gradient-to-bl from-slate-900/50 via-indigo-950/50 to-slate-900/50">
            {Projects.map((project) => (
              <NavLink
                key={project.slug}
                className={`w-5vh h-5vh lg:w-6vh lg:h-6vh rounded-full border-900-md ${
                  projectSlug === project.slug
                    ? "boxGlowXs"
                    : "shadowNarrowNormal"
                } hover:boxGlowXs transition-300 hover:scale-102 hover:cursor-pointer`}
                to={`/portfolio/${project.slug}`}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full rounded-full"
                />
              </NavLink>
            ))}
          </VStack>
        </Transition>
      </FlexFull>
    </>
  );
}
