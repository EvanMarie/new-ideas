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
        <FlexFull className="sm:text-lg text-col-500 textFogXxs justify-center">
          <span>Dreams & Divinations with Dark Violet</span>
        </FlexFull>
        <FlexFull
          className="flex-col items-center h-fit gap-2vh py-1vh lg:flex-col"
          onClick={() => {
            navigate(
              "https://apps.apple.com/us/app/dreams-and-divinations/id6503323930"
            );
          }}
        >
          <Box className="relative h-57svh sm:h-65svh w-40vh">
            <ShiftingImages
              containerClassName="border-970-md shadowBroadLooser"
              imageArray={genImages}
              imageDimensions="h-56svh sm:h-64svh"
            />
          </Box>
          <VStackFull gap="gap-2vh">
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
          </VStackFull>
        </FlexFull>
      </VStackFull>
    </DarkFlexFull>
  );
}
