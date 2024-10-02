import { NavLink, useParams } from "@remix-run/react";
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
      <FlexFull className="justify-center md:justify-start pb-4vh">
        <FlexFull className="justify-center md:justify-start">
          <PortfolioProjectDisplay portfolioItem={project as PortfolioItem} />
        </FlexFull>
      </FlexFull>
    </>
  );
}
