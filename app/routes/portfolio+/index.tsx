import { Outlet, useParams } from "@remix-run/react";
import {
  FlexFull,
  VStackFull,
  Wrap,
} from "~/buildingBlockComponents/mainContainers";
import { Projects } from "./components-data/project-data";
import PortfolioIndexCard from "./components-data/portfolioIndexCard";
import DivinationIos from "./components-data/divinationIos";

export default function PortfolioIndex() {
  const slug = useParams().slug;
  return (
    <>
      {slug ? (
        <Outlet />
      ) : (
        <VStackFull className="pt-4vh">
          <Wrap className="w-full justify-evenly min-h-full items-evenly">
            {Projects.map((project, index) => (
              <PortfolioIndexCard
                key={project.slug}
                portfolioItem={project}
                index={index}
              />
            ))}
          </Wrap>
        </VStackFull>
      )}
    </>
  );
}
