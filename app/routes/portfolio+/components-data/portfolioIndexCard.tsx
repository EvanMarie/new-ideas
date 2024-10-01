import {
  Center,
  Flex,
  FlexFull,
} from "~/buildingBlockComponents/mainContainers";
import PortfolioIndex from "..";
import { PortfolioItem } from "./project-data";
import { ScrollTransition } from "~/mainDesignComponents/scrollTransition";
import Image from "~/buildingBlockComponents/image";

export default function PortfolioIndexCard({
  portfolioItem,
  index,
}: {
  portfolioItem: PortfolioItem;
  index: number;
}) {
  const even = index === 0 || index % 2 === 0;
  const odd = index % 2 !== 0;
  return (
    <ScrollTransition
      delay={0.3}
      className={`p-0.5vh md:p-1vh ${
        even ? "sm:pr-18vw md:pt-10vh" : "sm:pl-18vw"
      } md:px-1vh`}
      type={even ? "fadeSlideInRightQuarter" : "fadeSlideInLeftQuarter"}
    >
      <Flex className="relative rounded-full border-900-md shadowNarrowLooser w-fit h-fit">
        <Image
          src={portfolioItem.thumbnail}
          alt={portfolioItem.title}
          className="absolute inset-0 w-full h-full object-cover rounded-full"
        />
        <Center className="w-95vw h-95vw sm:w-75vw sm:h-75vw md:w-47vw md:h-47vw bg-black rounded-full">
          <FlexFull className="flex-col items-center md:flex-row">
            {portfolioItem.title}
          </FlexFull>
        </Center>
      </Flex>
    </ScrollTransition>
  );
}
