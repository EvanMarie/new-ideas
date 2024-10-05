import { NavLink } from "@remix-run/react";
import Image from "~/buildingBlockComponents/image";
import {
  Box,
  Flex,
  FlexFull,
  HStackFull,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";
import ShiftingImages from "~/mainDesignComponents/visual-elements/shiftingImages";

export default function DivinationIos() {
  const genImages = Array.from(
    { length: 10 },
    (_, i) =>
      `https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/iosDivination_${
        i + 1
      }.webp?width=700&resize=contain&quality=75`
  );
  return (
    <FlexFull className="flex-col p-1vh gap-2vh xl:flex-row xl:items-center">
      {/* <Flex>
        <VStackFull className="xl:gap-[2vh]">
          <FlexFull className="flex-col items-center md:flex-row justify-center xl:flex-col">
            <Text
              className={`font-cursive text-[3vh] leading-[3vh] font-bold text-cyan-200 textShadow xl:text-[4vh] xl:leading-[4vh] xxl:text-[5vh] xxl:leading-[5vh]`}
            >
              Dark Violet
            </Text>
            <Text
              className={`font-cursive text-[3vh] leading-[3vh] font-bold text-cyan-200 textShadow xl:text-[4vh] xl:leading-[4vh] xxl:text-[5vh] xxl:leading-[5vh]`}
            >
              Dreams and Divinations
            </Text>
          </FlexFull>
       
   
          <NavLink
            to="https://divination.darkviolet.ai"
            target="_blank"
            className={`text-center text-cyan-200 hover:text-cyan-300 transition-400 lg:text-[2.5vh] xxl:text-[3vh]`}
          >
            Visit Dark Violet Divinations Online
          </NavLink>
        </VStackFull>
      </Flex> */}

      <VStackFull className="" gap="gap-2vh">
        <VStackFull>
          <VStackFull>
            <Text>
              Step into a world where the quantum and imagination intertwine,
              guided by the enigmatic Dark Violet
            </Text>
            <VStackFull
              className={` pl-[4vh]`}
              gap="gap-[0px]"
              align="items-start"
            >
              <Text> - AI-powered dream analysis & cosmic divination</Text>
              <Text>- Quantum-inspired oracle readings</Text>
              <Text>
                - Interactive dream journal with personalized insights
              </Text>
              <Text>- Unique perspectives on life's challenges</Text>
            </VStackFull>
          </VStackFull>
          <Text>
            Divination is a process of using symbols to help the mind approach
            problems from a new direction. It builds off the entanglement of
            meaning that occurs when interacting with a nonlinear meaning
            amplifier (an LLM). Try it for yourself. You might be surprised at
            the connections that are possible.
          </Text>
        </VStackFull>
        <HStackFull className="justify-evenly items-center">
          <NavLink
            to="https://apps.apple.com/us/app/dreams-and-divinations/id6503323930"
            target="_blank"
          >
            <Image
              src="/images/downloadOnAppStore.png"
              alt="download on app store"
              className="h-5vh"
            />
          </NavLink>
          <NavLink
            to="https://apps.apple.com/us/app/dreams-and-divinations/id6503323930"
            target="_blank"
          >
            <Image
              src="/images/qrcodeappstore.png"
              alt="download on app store"
              className="h-5vh md:h-7vh"
            />
          </NavLink>
        </HStackFull>
        <Box className="relative h-50vh w-25vh">
          <ShiftingImages
            containerClassName="border-970-md shadowBroadLooser"
            imageArray={genImages}
            imageDimensions="h-50vh"
          />
        </Box>
      </VStackFull>
    </FlexFull>
  );
}
