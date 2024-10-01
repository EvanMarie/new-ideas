import {
  Center,
  Flex,
  FlexFull,
} from "~/buildingBlockComponents/mainContainers";
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
    <ScrollTransition
      delay={0.3}
      type={
        index === 0 || index % 2 === 0
          ? "fadeSlideInRightQuarter"
          : "fadeSlideInLeftQuarter"
      }
    >
      <Center className="w-50svh h-50svh bg-black">
        <FlexFull className="flex-col items-center md:flex-row">
          {portfolioItem.title}
        </FlexFull>
      </Center>
    </ScrollTransition>
  );
}
