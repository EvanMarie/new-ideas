// FramerMotionModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import useEscapeKey from "~/utils/useEscapeKey";
import { MenuType } from "../tesla";
import TeslaMenuContent from "./teslaMenuContent";
import {
  CenterFull,
  Flex,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import Portal from "~/buildingBlockComponents/portal";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  style?: React.CSSProperties;
  isOpen: boolean;
  modalSize?: string;
  setModalOpen: (isOpen: boolean) => void;
  onClose: () => void;
  children?: React.ReactNode;
  showTopClose?: boolean;
  showBottomClose?: boolean;
  overlayBlur?: string;
  overlayColor?: string;
  footerClassName?: string;
  overlayZIndex?: number;
  modalZIndex?: number;
  menuType?: MenuType;
  setMenuType: (menuType: MenuType) => void;
  setShowLargeMenu: (show: boolean) => void;
  setMenuOpen: (isOpen: boolean) => void;
}

export default function TeslaLargeScreenMenu({
  style = {},
  isOpen,
  modalSize = "w-full h-fit",
  onClose,
  children,
  setModalOpen,
  showTopClose = true,
  showBottomClose = true,
  overlayBlur = "defaultOverlayBlur",
  overlayColor = "defaultOverlay",
  footerClassName,
  menuType,
  setMenuType,
  setShowLargeMenu,
  setMenuOpen,

  ...props
}: ModalProps) {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: {
      y: "-10%",
      opacity: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  useEscapeKey(() => onClose());

  function MenuItem({ text }: { text: string }) {
    return (
      <Flex className="p-[3vh] text-semibold font-[3vh] hover:cursor-pointer">
        {text}
      </Flex>
    );
  }

  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className={`fixed inset-0 w-screen h-screen rounded-none`}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                onClose();
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ zIndex: 15, maxHeight: "100svh" }}
            />
            {/* Modal */}
            <motion.div
              className={`fixed inset-0 top-0 left-0 right-0 h-fit w-full mPlus-font`}
              style={{ ...style, zIndex: 17 }}
              variants={variants}
              initial="closed"
              animate="open"
              exit="closed"
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              {...(props as any)}
            >
              <CenterFull className="h-fit bg-gray-200 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] py-[1.5vh] rounded-none">
                <VStackFull className="h-full justify-between p-[1vh] pt-[6vh] ">
                  <TeslaMenuContent menuType={menuType as MenuType} />
                </VStackFull>
              </CenterFull>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Portal>
  );
}
