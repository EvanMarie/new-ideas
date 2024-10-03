import { Outlet, useParams } from "@remix-run/react";
import {
  FlexFull,
  VStackFull,
  Wrap,
} from "~/buildingBlockComponents/mainContainers";
import { Projects } from "./components-data/project-data";
import PortfolioIndexCard from "./components-data/portfolioIndexCard";

export default function PortfolioIndex() {
  const slug = useParams().slug;
  return (
    <>
      {slug ? (
        <Outlet />
      ) : (
        <Wrap className="w-full justify-evenly min-h-full items-evenly pt-2vh">
          {Projects.map((project, index) => (
            <PortfolioIndexCard
              key={project.slug}
              portfolioItem={project}
              index={index}
            />
          ))}
        </Wrap>
      )}
    </>
  );
}
