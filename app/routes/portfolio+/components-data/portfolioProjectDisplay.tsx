import {
  Flex,
  FlexFull,
  HStack,
  HStackFull,
  VStack,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import { PortfolioItem } from "./project-data";
import Text from "~/buildingBlockComponents/text";
import OrientationImage from "~/mainDesignComponents/orientationImage";
import DarkFlexFull from "~/mainDesignComponents/darkFlexFull";
import ProjectIconButtons from "./projectButtons";

export default function PortfolioProjectDisplay({
  portfolioItem,
}: {
  portfolioItem: PortfolioItem;
}) {
  return (
    <FlexFull className="justify-center">
      <FlexFull className="flex-col items-center gap-1vh md:pr-9vh lg:pr-15vh lg:pl-2vh xl:pl-3vh xxl:pl-4vh pt-2vh max-w-[150svh]">
        {/* ********************** PROJECT TITLE ********************** */}
        <VStackFull align="items-end text-right px-1vh" gap="gap-0">
          <HStack className="items-center" gap="gap-2vh">
            <ProjectIconButtons project={portfolioItem} />
            <h2 className="text-fuchsia-300 font-semibold kufam-font textFogXs">
              {portfolioItem.title}
            </h2>
          </HStack>
          <Text className="text-col-500 textShadow">
            {portfolioItem.description}
          </Text>
        </VStackFull>
        {/* ********************** PROJECT INFORMATION ********************** */}
        <VStackFull className="gap-2vh px-2vh">
          {portfolioItem.projectInfo.map((info, index) => (
            <VStackFull gap="gap-1.5vh" key={index}>
              <DarkFlexFull>
                <VStackFull className="p-1vh" align="items-start">
                  <h3 className="text-fuchsia-300">{info.heading}</h3>
                  <Text>{info.description}</Text>
                </VStackFull>
              </DarkFlexFull>
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
        <FlexFull className="px-1vh rounded-0.7vh pt-3vh">
          <VStackFull>
            <span className="text-3vh text-fuchsia-300">Project Images</span>
            <VStackFull className="h-fit py-1vh" gap="gap-3vh">
              {portfolioItem.projectImages.map((image, index) => (
                <VStack key={index} className="py-0.5vh">
                  {" "}
                  <Flex className="border-900-md shadowNarrowNormal rounded-0.8vh ">
                    <OrientationImage
                      key={index}
                      src={image.src}
                      alt={portfolioItem.title}
                    />
                  </Flex>{" "}
                  <span className="text-md pt-0.5vh">
                    Image {index + 1} - {image.title}
                  </span>
                </VStack>
              ))}
            </VStackFull>
          </VStackFull>
        </FlexFull>
      </FlexFull>
    </FlexFull>
  );
}
