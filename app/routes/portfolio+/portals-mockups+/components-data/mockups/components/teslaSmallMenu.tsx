import { IoMdClose } from "react-icons/io";
import { CloseIcon } from "styles";
import Box from "~/components/buildingBlocks/box";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Icon from "~/components/buildingBlocks/icon";
import Modal from "~/components/buildingBlocks/modal";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import { MenuItems, MenuType } from "../tesla";
import VStack from "~/components/buildingBlocks/vStack";
import { TeslaIconMenu } from "./teslaNavBar";
import { useState } from "react";
import TeslaMenuContent from "./teslaMenuContent";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Text from "~/components/buildingBlocks/text";
import { FaChevronLeft } from "react-icons/fa";

export default function TeslaSmallScreenMenu({
  isOpen,
  setIsOpen,
  onClose,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onClose: () => void;
}) {
  const [menuType, setMenuType] = useState<MenuType | null>();
  const handleClose = () => {
    setMenuType(null);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      setModalOpen={setIsOpen}
      onClose={onClose}
      showBottomClose={false}
      showTopClose={false}
      modalSize="w-full h-full"
    >
      <VStackFull
        className="w-full h-screen overflow-y-auto bg-slate-100 rounded-none pb-[2vh] relative"
        gap="gap-[2vh]"
      >
        <HStackFull className="justify-between items-center px-[2vh] py-[1vh] fixed top-0 right-0 left-0 bg-slate-100">
          {menuType ? (
            <>
              <Box
                hoverCursor="hover:cursor-pointer"
                onClick={() => setMenuType(null)}
                className="p-[0.5vh] hover:bg-slate-300/80 transition-400"
              >
                <Icon icon={FaChevronLeft} iconClassName="text-[2.3vh]" />
              </Box>
              <Text className="text-[2.5vh] mPlus-font">{menuType} </Text>
            </>
          ) : (
            <Box
              className={`tesla-font text-[2.1vh] tracking-[0.8vh] p-[1vh] `}
            >
              TESLA-ISH
            </Box>
          )}
          <Box
            className="p-[0.5vh] hover:bg-slate-300/80 transition-400"
            onClick={onClose}
          >
            <Icon icon={IoMdClose} iconClassName="text-[3vh]" />
          </Box>
        </HStackFull>
        {!menuType ? (
          <FlexFull className="h-full">
            <VStackFull align="items-start px-[3vh] pt-[8vh]" gap="gap-[5vh]">
              <MenuItems setMenuType={setMenuType} isSmallMenu />
              <TeslaIconMenu />
            </VStackFull>
          </FlexFull>
        ) : (
          <TeslaMenuContent menuType={menuType as MenuType} />
        )}
      </VStackFull>
    </Modal>
  );
}
