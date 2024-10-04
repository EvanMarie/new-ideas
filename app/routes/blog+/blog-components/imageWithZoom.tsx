import { useState } from "react";
import { BiExpandAlt } from "react-icons/bi";
import { CloseIcon } from "styles";
import Button from "~/buildingBlockComponents/button";
import IconButton from "~/buildingBlockComponents/iconButton";
import Image from "~/buildingBlockComponents/image";
import { Box, CenterFull, Flex, FlexFull } from "~/buildingBlockComponents/mainContainers";
import Modal from "~/buildingBlockComponents/modal";

interface ImageWithZoomProps {
  alt: string;
  src: string;
  className?: string;
}

export function ImageWithZoom({
  alt,
  src,
  className = "w-85% xl:w-60%",
}: ImageWithZoomProps) {
  const [imageOpen, setImageOpen] = useState(false);
  return (
    <div className="relative">
      <Box className="absolute top-[2%] right-[5%] sm:right-[11%] md:right-[13%] lg:right-[21%] xl:right-[25.5%] border-900-md shadowNarrowNormal">
        <IconButton
          icon={BiExpandAlt}
          type="smallUnstyled"
          onClick={() => {
            setImageOpen(true);
          }}
          containerClassName="bg-col-500 hover:bg-col-200 transition-300"
          iconClassName="text-col-900"
        />
      </Box>
      <img src={src} alt={alt} className={className} />
      <Modal
        isOpen={imageOpen}
        setModalOpen={setImageOpen}
        onClose={() => {
          setImageOpen(false);
        }}
        showBottomClose={false}
        modalSize="w-[100vw] h-[100svh]"
      >
        <CenterFull className="flex-col gap-[1vh] bg-col-950 bg-gradient-to-br from-violet-500/50 via-indigo-500/50 to-cyan-300/50">
          <Flex className="rounded-[2vh] justify-center image-with-zoom">
            <Image
              alt={alt}
              src={src}
              objectFit="contain"
              className="rounded-[2vh] border-900-md "
            />
          </Flex>
          <FlexFull className="justify-center">
            <Button
              onClick={() => setImageOpen(false)}
              buttonText="close"
              iconLeft={CloseIcon}
            />
          </FlexFull>
        </CenterFull>
      </Modal>
    </div>
  );
}
