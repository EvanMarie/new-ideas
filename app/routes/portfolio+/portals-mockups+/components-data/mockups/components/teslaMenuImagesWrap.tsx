import Box from "~/components/buildingBlocks/box";
import HStack from "~/components/buildingBlocks/hStack";
import Image from "~/components/buildingBlocks/image";
import Text from "~/components/buildingBlocks/text";
import VStack from "~/components/buildingBlocks/vStack";
import Wrap from "~/components/buildingBlocks/wrap";

export default function TeslaMenuImagesWrap({
  images,
  largeMenu = true,
}: {
  images: { image: string; name: string }[];
  largeMenu?: boolean;
}) {
  return (
    <Wrap className="w-full pt-[6vh] pb-[3vh] gap-[2.5vh] justify-evenly">
      {images.map((image, i) => (
        <VStack className="hover:cursor-pointer" gap="gap-[0px]" key={i}>
          <Box
            className="h-[11vh] p-[1.5vh]"
            hoverCursor="hover:cursor-pointer"
          >
            <Image
              src={`https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/${image.image}.png?width=300&resize=contain&quality=70`}
              className="h-full w-auto"
              alt="product"
              ariaLabel="product"
            />
          </Box>
          <Text className="font-semibold leading-[1.8vh]">{image.name}</Text>
          <HStack className="underline leading-[1.8vh]">
            <Text>Learn</Text>
            <Text>Order</Text>
          </HStack>
        </VStack>
      ))}
    </Wrap>
  );
}
