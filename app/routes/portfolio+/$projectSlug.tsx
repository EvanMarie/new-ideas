import { useParams } from "@remix-run/react";
import { PortfolioItem, Projects } from "./components-data/project-data";
import PortfolioProjectDisplay from "./components-data/portfolioProjectDisplay";
import {
  FlexFull,
  Transition,
  VStack,
} from "~/buildingBlockComponents/mainContainers";

export default function PortfolioItemIndex() {
  const projectSlug = useParams().projectSlug;
  const project = Projects.find((project) => project.slug === projectSlug);
  return (
    <>
      <FlexFull className="justify-center md:justify-start">
        <PortfolioProjectDisplay portfolioItem={project as PortfolioItem} />
        <Transition className="hidden md:flex" delay={0.5}>
          <VStack className="w-8vw fixed right-1vw top-7svh h-85svh justify-around bg-slate-800/50 bg-gradient-to-bl from-slate-900/50 via-indigo-950/50 to-slate-900/50">
            {Projects.map((project) => (
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-6vw h-6vw rounded-full border-900-md shadowNarrowNormal"
              />
            ))}
          </VStack>
        </Transition>
      </FlexFull>
    </>
  );
}
