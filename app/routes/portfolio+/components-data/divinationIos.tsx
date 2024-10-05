import { NavLink, useNavigate } from "@remix-run/react";
import Image from "~/buildingBlockComponents/image";
import {
  Box,
  Flex,
  FlexFull,
  HStackFull,
  VStack,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";
import AnimatedBulletList from "~/mainDesignComponents/animatedBulletList";
import DarkFlexFull from "~/mainDesignComponents/darkFlexFull";
import ShiftingImages from "~/mainDesignComponents/visual-elements/shiftingImages";

export default function DivinationIos() {
  const genImages = Array.from(
    { length: 10 },
    (_, i) =>
      `https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/iosDivination_${
        i + 1
      }.webp?width=700&resize=contain&quality=75`
  );

  const navigate = useNavigate();
  return (
    <DarkFlexFull>
      <VStackFull gap="gap-2vh">
        <FlexFull className="sm:text-lg md:text-xl text-col-500 textFogXxs justify-center lg:hidden">
          <span>Dreams & Divinations with Dark Violet</span>
        </FlexFull>
        <FlexFull
          className="flex-col items-center h-fit gap-2vh py-1vh lg:flex-row"
          onClick={() => {
            navigate(
              "https://apps.apple.com/us/app/dreams-and-divinations/id6503323930"
            );
          }}
        >
          <FlexFull className="justify-center lg:w-1/3">
            <Box className="relative h-57svh sm:h-65svh w-40vh lg:h-60svh">
              <ShiftingImages
                containerClassName="border-970-md shadowBroadLooser"
                imageArray={genImages}
                imageDimensions="h-56svh sm:h-64svh lg:h-60svh"
              />
            </Box>
          </FlexFull>
          <VStackFull gap="gap-2vh" className="lg:w-2/3">
            <FlexFull className="sm:text-lg md:text-xl text-col-500 textFogXxs justify-center hidden lg:flex">
              <span>Dreams & Divinations with Dark Violet</span>
            </FlexFull>
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
              <Flex className="hidden md:flex">
                <NavLink
                  to="https://apps.apple.com/us/app/dreams-and-divinations/id6503323930"
                  target="_blank"
                >
                  <Image
                    src="/images/qrcodeappstore.png"
                    alt="download on app store"
                    className="h-6vh md:h-7vh"
                  />
                </NavLink>
              </Flex>
            </HStackFull>
            <FlexFull className="hidden lg:flex">
              <VStackFull className="" gap="gap-2vh">
                <Text>
                  Step into a world where the quantum and imagination
                  intertwine, guided by the enigmatic Dark Violet
                </Text>
                <AnimatedBulletList
                  heading="Features"
                  items={[
                    "AI-powered dream analysis & cosmic divination",
                    "Quantum-inspired oracle readings",
                    "Interactive dream journal with personalized insights",
                    "Unique perspectives on life's challenges",
                  ]}
                />

                <Text>
                  Divination is a process of using symbols to help the mind
                  approach problems from a new direction. It builds off the
                  entanglement of meaning that occurs when interacting with a
                  nonlinear meaning amplifier (an LLM). Try it for yourself. You
                  might be surprised at the connections that are possible.
                </Text>
              </VStackFull>
            </FlexFull>
          </VStackFull>
        </FlexFull>
      </VStackFull>
    </DarkFlexFull>
  );
}
