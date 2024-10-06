import { useState } from "react";
import TeslaSmallScreenMenu from "./components/teslaSmallMenu";
import { motion } from "framer-motion";
import TeslaLargeScreenMenu from "./components/teslaMenuLarge";
import TeslaNavMenu from "./components/teslaNavBar";
import { FaChevronRight } from "react-icons/fa";
import ReturnPortalsMockups from "../returnPortalsMockups";
import {
  Box,
  Center,
  CenterFull,
  Flex,
  FlexFull,
  HStack,
  TransitionFull,
  VStack,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";
import Icon from "~/buildingBlockComponents/icon";
import IsSafari from "~/utils/isSafari";

export type MenuType =
  | "vehicles"
  | "energy"
  | "charging"
  | "discover"
  | "shop"
  | null;

const buttonTexts = ["vehicles", "energy", "charging", "discover", "shop"];

function MenuItem({
  text,

  isSmallMenu = false,
  setShowLargeMenu,
  setMenuType,
}: {
  text: string;
  isSmallMenu?: boolean;

  setShowLargeMenu?: (show: boolean) => void;
  setMenuType: (menuType: MenuType) => void;
}) {
  return (
    <motion.div
      className="p-0.5vh h-fit hover:cursor-pointer hover:bg-slate-300/80 transition-400 w-full lg:w-fit"
      onMouseOver={
        !isSmallMenu
          ? () => {
              setShowLargeMenu && setShowLargeMenu(true);
              setMenuType(text.toLowerCase() as MenuType);
            }
          : () => {}
      }
      onClick={
        isSmallMenu
          ? () => {
              setMenuType(text.toLowerCase() as MenuType);
            }
          : () => {}
      }
    >
      <HStack className="w-full lg:w-fit items-center justify-between px-1vh">
        <Text
          className="text-2.3vh lg:text-2vh mPlus-font"
          style={{ lineHeight: 1.4 }}
        >
          {text}
        </Text>
        <Box className="lg:hidden pr-[1vh]">
          <Icon icon={FaChevronRight} />
        </Box>
      </HStack>
    </motion.div>
  );
}

export function MenuItems({
  setShowLargeMenu,
  setMenuType,
  isSmallMenu = false,
}: {
  setShowLargeMenu?: (show: boolean) => void;
  setMenuType: (menuType: MenuType) => void;
  isSmallMenu?: boolean;
}) {
  console.log("isSmallMenu: ", isSmallMenu);
  return (
    <>
      {buttonTexts.map((text, i) => (
        <MenuItem
          isSmallMenu={isSmallMenu}
          key={i}
          text={text}
          setShowLargeMenu={setShowLargeMenu && setShowLargeMenu}
          setMenuType={setMenuType}
        />
      ))}
    </>
  );
}

export default function TeslaMockup() {
  function HeadingItem({
    heading,
    priceLine,
    subheading,
    lightVersion = false,
    graffiti = false,
    height = "h-[75vh]",
  }: {
    heading?: string;
    priceLine?: string;
    subheading?: string;
    lightVersion?: boolean;
    graffiti?: boolean;
    height?: string;
  }) {
    return (
      <CenterFull>
        <VStackFull
          className={`justify-between ${height} text-slate-900 justify-end`}
        >
          <VStack
            className={`h-fit justify-evenly ${
              lightVersion ? "text-slate-100 textShadow" : " text-slate-900"
            } py-[1vh] px-[2vh]`}
            gap="gap-[0px]"
          >
            {heading && (
              <Text
                className={`${
                  graffiti ? "graffiti-font text-[6vh]" : ""
                } text-[4.5vh] tracking-widest font-semibold`}
              >
                {heading}
              </Text>
            )}
            {priceLine && (
              <Text className="text-[1.8vh] font-semibold">
                from {priceLine}*
              </Text>
            )}
            {subheading && <Text className="text-[1.3vh]">{subheading}</Text>}
          </VStack>
          <Flex className="flex-col items-center sm:flex-row justify-center gap-[2vh] sm:gap-[5vh]">
            <Center className="h-[5vh] hover:cursor-pointer bg-slate-200 w-[80vw] sm:w-[25vh]">
              <Text>Order Now</Text>
            </Center>
            <Center className="h-[5vh] hover:cursor-pointer bg-slate-800 text-slate-100 w-[80vw] sm:w-[25vh]">
              <Text>Learn More</Text>
            </Center>
          </Flex>
        </VStackFull>
      </CenterFull>
    );
  }
  const isSafari = IsSafari();
  const pageStyle = `justify-center snap-start snap-always overflow-x-hidden bg-sticky w-[100vw] h-[100svh] rounded-none bg-cover `;
  // "justify-center overflow-x-hidden  w-[100vw] h-[100svh] rounded-none";

  const [menuOpen, setMenuOpen] = useState(false);
  const [showLargeMenu, setShowLargeMenu] = useState(false);
  const [menuType, setMenuType] = useState<MenuType>("vehicles");

  return (
    <>
      <FlexFull className="bg-slate-200 h-[100svh] rounded-none relative mPlus-font font-[400]">
        <TransitionFull className="rounded-none">
          <FlexFull
            className={`overflow-y-auto snap-y scroll-smooth snap-mandatory overflow-x-hidden rounded-none  `}
            style={{ WebkitOverflowScrolling: "touch", overflowY: "scroll" }}
          >
            {" "}
            <ReturnPortalsMockups />
            <VStackFull className="h-fit" gap="gap-[0px]">
              {/* *************** HEADER *************** */}
              <TeslaNavMenu
                setMenuType={setMenuType}
                setShowLargeMenu={setShowLargeMenu}
                setMenuOpen={setMenuOpen}
              />
              {/* *************** SECTIONS *************** */}
              <Flex
                id="one"
                className={`${pageStyle} bg-[url('https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/tesla-model-a-mobile.png?resize=contain&quality=70')] md:bg-[url('https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/tesla-model-a.png?resize=contain&quality=70')] bg-top`}
              >
                <HeadingItem
                  heading="Model A"
                  priceLine="$68,888"
                  subheading="After tax credit and est. gas savings."
                />
              </Flex>
              <Flex
                id="two"
                className={`${pageStyle} bg-[url('https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/tesla-model-b-mobile.png?resize=contain&quality=70')] md:bg-[url('https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/tesla-model-b.png?resize=contain&quality=70')] bg-top`}
              >
                {" "}
                <HeadingItem
                  heading="Model B"
                  priceLine="$78,888"
                  subheading="After tax credit and est. gas savings."
                />
              </Flex>
              <Flex
                id="three"
                className={`${pageStyle} bg-[url('https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/tesla-model-c-mobile.png?resize=contain&quality=70')] md:bg-[url('https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/tesla-model-c.png?resize=contain&quality=70')] bg-top`}
              >
                {" "}
                <HeadingItem
                  heading="Model C"
                  priceLine="$88,888"
                  subheading="After tax credit and est. gas savings."
                />
              </Flex>
              <Flex
                id="four"
                className={`${pageStyle} bg-[url('https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/tesla-model-d-mobile.png?resize=contain&quality=70')] md:bg-[url('https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/tesla-model-d.png?resize=contain&quality=70')]  bg-top`}
              >
                <HeadingItem
                  heading="Model D"
                  priceLine="$98,888"
                  subheading="After tax credit and est. gas savings."
                />
              </Flex>
              <Flex
                id="five"
                className={`${pageStyle} bg-[url('https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/tesla-pseudo-truck-mobile.png?resize=contain&quality=70')] md:bg-[url('https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/tesla-pseudo-truck.png?resize=contain&quality=70')]  bg-top`}
              >
                <HeadingItem heading="Pseudo Truck" graffiti />
              </Flex>
              <Flex
                id="six"
                className={`${pageStyle} bg-[url('https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/tesla-solar-roof-mobile.png?resize=contain&quality=70')] md:bg-[url('https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/tesla-solar-roof.png?resize=contain&quality=70')]  bg-top`}
              >
                <HeadingItem
                  heading="Solar Roof"
                  subheading="Generate your own clean energy."
                />
              </Flex>
              <Flex
                id="seven"
                className={`${pageStyle} bg-[url('https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/tesla-solar-panels-mobile.png?resize=contain&quality=70')] md:bg-[url('https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/tesla-solar-panels.png?resize=contain&quality=70')]  bg-top`}
              >
                <HeadingItem
                  heading="Solar Panels"
                  subheading="Generate your own clean energy."
                />
              </Flex>{" "}
              <Flex
                id="seven"
                className={`${pageStyle} bg-[url('https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/tesla-powerwall-mobile.png?resize=contain&quality=70')] md:bg-[url('https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/tesla-powerwall.png?resize=contain&quality=70')] bg-center`}
              >
                <HeadingItem heading="Powerwall" />
              </Flex>
              <Flex
                id="seven"
                className={`${pageStyle} bg-[url('https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/tesla-charging-accessories-mobile.png?resize=contain&quality=70')] md:bg-[url('https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/tesla-charging-accessories.png?resize=contain&quality=70')] md:bg-left xxl:bg-bottom`}
              >
                <HeadingItem heading="Accessories" />
              </Flex>
            </VStackFull>
          </FlexFull>
        </TransitionFull>
      </FlexFull>
      <TeslaSmallScreenMenu
        isOpen={menuOpen}
        setIsOpen={setMenuOpen}
        onClose={() => setMenuOpen(false)}
      />
      <TeslaLargeScreenMenu
        onClose={() => setShowLargeMenu(false)}
        isOpen={showLargeMenu}
        setModalOpen={setShowLargeMenu}
        menuType={menuType}
        setMenuType={setMenuType}
        setShowLargeMenu={setShowLargeMenu}
        setMenuOpen={setMenuOpen}
      />
    </>
  );
}
