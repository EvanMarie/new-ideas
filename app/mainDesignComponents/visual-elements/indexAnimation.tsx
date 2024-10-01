import { Box, Center, VStack } from "~/buildingBlockComponents/mainContainers";
import VioletAnimationComponent, { Path } from "./violetAnimationComponent";
import { violetFlowerAnimationPaths } from "./violetAnimationPaths";
import AnimatedComponentSpring from "./animatedComponentSpring";
import { darkVioletSVGPaths } from "./darkVioletLandingAnimationPaths";

export default function DarkVioletIndexAnimation() {
  const taglineStyles =
    "text-2.1vh sm:text-3vh md:text-3vh text-cyan-300 textShadow";
  return (
    <Center className={`w-screen h-100svh rounded-none `}>
      <VStack gap="gap-0">
        <Box className="h-20vh w-20vh md:h-30vh md:w-30vh">
          <VioletAnimationComponent
            paths={violetFlowerAnimationPaths as Path[]}
            viewBox="-30 -20 456.079 436.079"
            height="h-20vh md:h-30vh"
            width="w-20vh md:w-30vh"
          />
        </Box>
        <Box className="overflow-visible">
          <VioletAnimationComponent
            paths={darkVioletSVGPaths as Path[]}
            viewBox="0 0 3050 25"
            height="h-20vh sm:h-25vh md:h-30vh"
            width="w-90vw md:w-80vh"
          />
        </Box>
        <VStack className="">
          <AnimatedComponentSpring animation="fadeIn" delay={5}>
            <span className={taglineStyles}>
              Systems Architecture & AI Integration
            </span>
          </AnimatedComponentSpring>

          <AnimatedComponentSpring animation="fadeIn" delay={5.2}>
            <span className={taglineStyles}>
              UI / UX Frontend Development & Design
            </span>
          </AnimatedComponentSpring>
        </VStack>
      </VStack>
    </Center>
  );
}
