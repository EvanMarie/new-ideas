import {
  Flex,
  FlexFull,
  VStack,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import { PortfolioItem } from "./project-data";
import PortfolioAccordion from "./portfolioAccordion";
import Text from "~/buildingBlockComponents/text";
import Image from "~/buildingBlockComponents/image";
import OrientationImage from "~/mainDesignComponents/orientationImage";

export default function PortfolioProjectDisplay({
  portfolioItem,
}: {
  portfolioItem: PortfolioItem;
}) {
  return (
    <FlexFull className="flex-col items-center gap-1vh md:w-90vw xl:w-80vw lg:px-2vh xl:px-3vh xxl:px-4vh">
      {/* ********************** PROJECT TITLE ********************** */}

      <VStackFull align="items-end text-right px-1vh" gap="gap-0">
        <h2 className="text-fuchsia-300 font-semibold kufam-font textFogXs">
          {portfolioItem.title}
        </h2>
        <Text className="text-cyan-300 textShadow">
          {portfolioItem.description}
        </Text>
      </VStackFull>
      {/* ********************** PROJECT INFORMATION ********************** */}
      <VStackFull className="gap-2vh px-2vh">
        {portfolioItem.projectInfo.map((info, index) => (
          <VStackFull gap="gap-1.5vh">
            <Flex className="bg-slate-900/50 p-1vh border-900-md shadowNarrowNormal">
              <Text key={index}>{info.description}</Text>
            </Flex>

            {portfolioItem.projectInfoImages[index] && (
              <Flex className="border-900-md shadowNarrowNormal rounded-0.8vh">
                <OrientationImage
                  key={portfolioItem.slug + index}
                  src={portfolioItem.projectInfoImages[index].src}
                  alt={`${portfolioItem.title} image ${index}`}
                />
              </Flex>
            )}
          </VStackFull>
        ))}
      </VStackFull>
      {/* ********************** PROJECT IMAGES ********************** */}
      <FlexFull className="px-1vh rounded-0.7vh ">
        <PortfolioAccordion title="Project Images">
          <VStackFull className="h-fit py-1vh" gap="gap-3vh">
            {portfolioItem.projectImages.map((image, index) => (
              <VStack>
                {" "}
                <Flex className="border-900-md shadowNarrowNormal rounded-0.8vh">
                  <OrientationImage
                    key={index}
                    src={image.src}
                    alt={portfolioItem.title}
                  />
                </Flex>{" "}
                <span className="text-md">
                  Image {index + 1} - {image.title}
                </span>
              </VStack>
            ))}
          </VStackFull>
        </PortfolioAccordion>
      </FlexFull>
    </FlexFull>
  );
}
