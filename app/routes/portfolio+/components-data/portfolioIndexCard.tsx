import { Center, FlexFull } from "~/buildingBlockComponents/mainContainers";
import { PortfolioItem } from "./project-data";
import { ScrollTransition } from "~/mainDesignComponents/scrollTransition";
import Image from "~/buildingBlockComponents/image";
import { NavLink } from "@remix-run/react";

export default function PortfolioIndexCard({
  link,
  imageLink,
  title,
  portfolioItem,
  index,
}: {
  link?: string;
  imageLink?: string;
  title?: string;
  portfolioItem?: PortfolioItem;
  index: number;
}) {
  const even = index === 0 || index % 2 === 0;
  const odd = index % 2 !== 0;
  return (
    <ScrollTransition
      delay={0.3}
      className={`p-1vh ${
        even ? "sm:pr-18vw md:pt-10vh" : "sm:pl-18vw"
      } md:px-1vh lg:px-2vh`}
      type={even ? "fadeSlideInRightQuarter" : "fadeSlideInLeftQuarter"}
    >
      <NavLink
        className="flex relative rounded-full border-900-md shadowNarrowLooser w-fit h-fit hover:boxGlowXs transition-300 hover:scale-102"
        to={portfolioItem?.slug || link || ""}
      >
        <Image
          src={portfolioItem?.thumbnail || imageLink || ""}
          alt={portfolioItem?.title || title || ""}
          className={`absolute inset-0 w-full h-full object-cover rounded-full hover:cursor-pointer ${
            even ? "hover:rotate-10" : "hover:-rotate-10"
          } transition-300`}
        />
        <Center className="w-90vw h-90vw sm:w-75vw sm:h-75vw md:w-47vw md:h-47vw lg:w-40vw lg:h-40vw xl:w-32vw xl:h-32vw rounded-full bg-indigo-500 bg-gradient-to-l from-violet-500/40 via-cyan-500/40 to-fuchsia-400/40">
          <FlexFull className="flex-col items-center md:flex-row text-transparent">
            {portfolioItem?.title}
          </FlexFull>
        </Center>
      </NavLink>
    </ScrollTransition>
  );
}
