import { NavLink } from "@remix-run/react";
import Image from "~/buildingBlockComponents/image";
import {
  Box,
  Flex,
  HStackFull,
  VStack,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";
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
  return (
    <NavLink
      to="https://apps.apple.com/us/app/dreams-and-divinations/id6503323930"
      target="_blank"
      className="pb-2vh w-95vw"
    >
      <DarkFlexFull>
        <HStackFull className="px-2vh">
          <VStackFull className="w-5/12" gap="gap-2vh">
            <Box className="relative h-30vh w-25vh">
              <ShiftingImages
                containerClassName="border-970-md shadowBroadLooser"
                imageArray={genImages}
                imageDimensions="h-30vh"
              />
            </Box>
          </VStackFull>
          <VStack className="w-7/12 h-full justify-center" gap="gap-2vh">
            <VStack className="text-lg text-col-500 textFogXxs">
              <span>Dreams & Divinations</span>
              <span>with Dark Violet</span>
            </VStack>
            <HStackFull className="justify-evenly items-center">
              <NavLink
                to="https://apps.apple.com/us/app/dreams-and-divinations/id6503323930"
                target="_blank"
              >
                <Image
                  src="/images/downloadOnAppStore.png"
                  alt="download on app store"
                  className="h-4vh"
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
          </VStack>
        </HStackFull>
      </DarkFlexFull>
    </NavLink>
  );
}
