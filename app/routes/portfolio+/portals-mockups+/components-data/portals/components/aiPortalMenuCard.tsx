import { NavLink } from "@remix-run/react";
import Box from "~/components/buildingBlocks/box";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Image from "~/components/buildingBlocks/image";
import Text from "~/components/buildingBlocks/text";
import VStack from "~/components/buildingBlocks/vStack";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import {
  darkGradient,
  portalMockupCardGradient,
} from "~/routes/components/styleVariables";
import { CiGlobe } from "react-icons/ci";
import AnimatedIconNavLink from "~/routes/components/animatedIconNavLink";
import MainSlidingAnimation from "~/routes/components/mainSlidingAnimation";

export default function AIPoweredMenuCard({
  title,
  aiIntegration,
  description,
  image,
  demoLink,
}: {
  title: string;
  aiIntegration: string;
  description: string;
  image: string;
  demoLink: string;
}) {
  return (
    <>
      <MainSlidingAnimation hoverScale={1} trigger={0.1}>
        <Flex
          className={` w-[85vw] border-970-md shadowBroadNormal ${portalMockupCardGradient} w-[95vw] sm:w-[80vw] md:w-[70vw] lg:w-[90vw] xl:w-[80vw] p-[0.4vh] rounded-[3vh]`}
        >
          <VStackFull
            className="p-[2vh] bg-slate-900/60 border-970-md rounded-[3vh]"
            gap="gap-[2vh]"
          >
            <FlexFull className="flex-col lg:flex-row items-center gap-[2vh] xxl:justify-evenly">
              <Box className="w-95% max-w-[50vh] lg:w-5/12 border-970-md shadowBroadNormal">
                <NavLink className="w-full h-full" to={demoLink}>
                  <Image
                    src={image}
                    alt={title}
                    ariaLabel={title}
                    className="w-full h-full"
                    key={demoLink}
                  />
                </NavLink>
              </Box>
              <VStack className="lg:w-7/12 p-[1vh] lg:h-full lg:justify-evenly">
                <Text className="text-cyan-300 textShadow text-[2.5vh] xl:text-[3vh]">
                  {title}
                </Text>
                <Text className="text-fuchsia-300 textShadow text-[2vh] xl:text-[2.5vh]">
                  AI-Integration: {aiIntegration}
                </Text>
                <Text className="xl:text-[1.9vh] xxl:text-[2.1vh]">
                  {description}
                </Text>
              </VStack>
            </FlexFull>
            <AnimatedIconNavLink
              link={demoLink}
              icon={CiGlobe}
              text="view this portal"
            />
          </VStackFull>
        </Flex>
      </MainSlidingAnimation>
    </>
  );
}
