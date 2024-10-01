import { Center, Flex } from "~/buildingBlockComponents/mainContainers";
import PortfolioIndex from "..";
import { PortfolioItem } from "./project-data";
import { ScrollTransition } from "~/mainDesignComponents/scrollTransition";

export default function PortfolioIndexCard({
  portfolioItem,
  index,
}: {
  portfolioItem: PortfolioItem;
  index: number;
}) {
  return (
    <ScrollTransition delay={0.3} type="fadeSlideInRightQuarter">
      <Center className="w-50svh h-50svh">{portfolioItem.title}</Center>
    </ScrollTransition>
  );
}
