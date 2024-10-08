// FramerMotionModal.tsx
import { motion, AnimatePresence, Variants } from "framer-motion";
import React from "react";
import Portal from "./portal";
import useEscapeKey from "~/utils/useEscapeKey";

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
  passVariants?: Variants;
}

export default function Modal({
  style = {},
  isOpen,
  modalSize = "w-full h-full lg:w-94% lg:h-94%",
  onClose,
  children,
  setModalOpen,
  showTopClose = true,
  showBottomClose = true,
  overlayBlur = "defaultOverlayBlur",
  overlayColor = "defaultOverlay",
  footerClassName,
  overlayZIndex = 60,
  modalZIndex = 100,
  passVariants,
  ...props
}: ModalProps) {
  // Animation variants for scaling in and out
  const variants = passVariants
    ? passVariants
    : {
        open: {
          scale: 1,
          opacity: 1,
          transition: { type: "spring", stiffness: 300, damping: 30 },
        },
        closed: {
          scale: 0,
          opacity: 0,
          transition: { type: "spring", stiffness: 300, damping: 30 },
        },
      };

  useEscapeKey(() => onClose());

  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className={`fixed inset-0 w-screen h-screen rounded-none ${overlayColor} ${overlayBlur}`}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                onClose();
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ zIndex: overlayZIndex, maxHeight: "100svh" }}
            />
            {/* Modal */}
            <motion.div
              className={`fixed inset-0 m-auto ${modalSize}`}
              style={{ ...style, zIndex: modalZIndex, maxHeight: "100svh" }}
              variants={variants}
              initial="closed"
              animate="open"
              exit="closed"
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              {...(props as any)}
            >
              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Portal>
  );
}
