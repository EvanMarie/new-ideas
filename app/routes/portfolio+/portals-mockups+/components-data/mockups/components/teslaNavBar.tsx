import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { motion } from "framer-motion";
import { MenuItems, MenuType } from "../tesla";
import {
  Box,
  Flex,
  HStack,
  HStackFull,
} from "~/buildingBlockComponents/mainContainers";
import Icon from "~/buildingBlockComponents/icon";
import Text from "~/buildingBlockComponents/text";

export function TeslaIconMenu() {
  return (
    <Flex className="gap-[5vh] flex-col items-start lg:flex-row lg:items-center lg:gap-1vh w-full lg:w-fit">
      <Flex className="hidden lg:flex hover:bg-slate-300/80 transition-400 w-full lg:w-fit p-1vh">
        <Icon icon={AiOutlineQuestionCircle} iconClassName="text-2.9vh" />
      </Flex>
      <HStack
        className="items-center hover:bg-slate-300/80 transition-400 w-full lg:w-fit px-1vh"
        gap="gap-1vh"
      >
        <Icon icon={BsGlobe2} iconClassName="text-2.4vh" />
        <Text className="lg:hidden">United States</Text>
      </HStack>
      <HStack
        className="items-center hover:bg-slate-300/80 transition-400 w-full lg:w-fit px-1vh"
        gap="gap-1vh"
      >
        <Icon icon={CgProfile} iconClassName="text-[2.7vh]" />
        <Text className="lg:hidden">Account</Text>
      </HStack>
    </Flex>
  );
}
export default function TeslaNavMenu({
  setMenuType,
  setShowLargeMenu,
  setMenuOpen,
}: {
  setMenuType: (menuType: MenuType) => void;
  setShowLargeMenu: (show: boolean) => void;
  setMenuOpen: (isOpen: boolean) => void;
}) {
  return (
    <HStackFull className="fixed top-0 left-0 right-0 h-6vh bg-gray-200/20 justify-between px-1vh md:px-2vh items-center rounded-none z-20 text-slate-900">
      <Box className="tesla-font text-[2.1vh] tracking-[0.8vh]">TESLA-ISH</Box>
      <motion.div className="hidden lg:flex gap-[1vh] hover:cursor-pointer">
        <MenuItems
          setMenuType={setMenuType}
          setShowLargeMenu={setShowLargeMenu}
        />
      </motion.div>
      <Flex className="hidden lg:flex">
        <TeslaIconMenu />
      </Flex>
      <Box className="lg:hidden " onClick={() => setMenuOpen(true)}>
        <Flex className="py-[0.5vh] px-[1vh] bg-slate-400/40 text-[1.6vh] hover:cursor-pointer">
          Menu
        </Flex>
      </Box>
    </HStackFull>
  );
}
