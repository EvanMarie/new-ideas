import { useState } from "react";
import { BiExpandAlt } from "react-icons/bi";
import { CloseIcon } from "styles";
import Button from "~/buildingBlockComponents/button";
import IconButton from "~/buildingBlockComponents/iconButton";
import Image from "~/buildingBlockComponents/image";
import {
  Box,
  CenterFull,
  Flex,
  FlexFull,
} from "~/buildingBlockComponents/mainContainers";
import Modal from "~/buildingBlockComponents/modal";
import ProjectButton from "~/mainDesignComponents/projectButton";

interface ImageWithZoomProps {
  alt: string;
  src: string;
  className?: string;
}

export function ImageWithZoom({
  alt,
  src,
  className = "w-85vw md:w-60vh",
}: ImageWithZoomProps) {
  const [imageOpen, setImageOpen] = useState(false);
  return (
    <FlexFull className="justify-center">
      <Box className="relative w-fit border-900-md shadowNarrowNormal">
        <Box className="absolute top-0.5vh right-0.5vh">
          <IconButton
            icon={BiExpandAlt}
            type="smallUnstyled"
            onClick={() => {
              setImageOpen(true);
            }}
            containerClassName="bg-col-500 hover:bg-col-200 transition-300 border-900-md shadowNarrowTight"
            iconClassName="text-col-900"
          />
        </Box>
        <img src={src} alt={alt} className={className} />
      </Box>
      <Modal
        isOpen={imageOpen}
        setModalOpen={setImageOpen}
        onClose={() => {
          setImageOpen(false);
        }}
        showBottomClose={false}
        modalSize="w-[100vw] h-[100svh]"
      >
        <CenterFull className="flex-col gap-[1vh] bg-col-950 bg-gradient-to-br from-violet-500/50 via-indigo-500/50 to-col-500/50">
          <Flex className="rounded-[2vh] justify-center image-with-zoom">
            <Image
              alt={alt}
              src={src}
              objectFit="contain"
              className="rounded-[2vh] border-900-md "
            />
          </Flex>
          <FlexFull className="justify-center">
            <ProjectButton
              text="close"
              icon={CloseIcon}
              onClick={() => setImageOpen(false)}
            />
          </FlexFull>
        </CenterFull>
      </Modal>
    </FlexFull>
  );
}
