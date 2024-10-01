import { FlexFull, VStackFull } from "~/buildingBlockComponents/mainContainers";
import { PortfolioItem } from "./project-data";
import Accordion from "./portfolioAccordion";
import PortfolioAccordion from "./portfolioAccordion";

export default function PortfolioProjectDisplay({
  portfolioItem,
}: {
  portfolioItem: PortfolioItem;
}) {
  return (
    <FlexFull className="flex-col items-center gap-1vh md:w-90vw">
      <VStackFull align="items-end text-right px-1vh" gap="gap-0">
        <h2 className="text-fuchsia-300 font-semibold kufam-font textFogXs">
          {portfolioItem.title}
        </h2>
        <span className="text-lg">{portfolioItem.description}</span>
      </VStackFull>
      <FlexFull className="px-1vh rounded-0.7vh">
        {/* PORTFOLIO IMAGES */}
        <PortfolioAccordion title="Project Images">
          <VStackFull className="h-fit py-1vh" gap="gap-1vh">
            {portfolioItem.projectImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={portfolioItem.title}
                className="w-full h-full object-contain rounded-md border-900-md shadowNarrowNormal"
              />
            ))}
          </VStackFull>
        </PortfolioAccordion>
      </FlexFull>
    </FlexFull>
  );
}
