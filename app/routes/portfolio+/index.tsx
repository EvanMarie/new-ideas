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
        <VStackFull className="pt-3vh">
          <Wrap className="w-full justify-evenly min-h-full items-evenly">
            <PortfolioIndexCard
              link="portals-mockups"
              index={0}
              imageLink="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/portals-mockups.webp"
              title="Portals & Mockups"
            />
            {Projects.map((project, index) => (
              <PortfolioIndexCard
                key={project.slug}
                portfolioItem={project}
                index={index + 1}
              />
            ))}
          </Wrap>
        </VStackFull>
      )}
    </>
  );
}
