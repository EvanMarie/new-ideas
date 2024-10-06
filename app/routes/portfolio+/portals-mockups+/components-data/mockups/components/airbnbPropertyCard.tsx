import { AirbnbProperties, GetRandomNumbers } from "./airbnbData";
import { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaRegHeart, FaStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import Image from "~/buildingBlockComponents/image";
import {
  Box,
  Flex,
  HStack,
  HStackFull,
  VStack,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";

export default function AirBnBPropertyCard({
  property,
  when,
}: {
  property: AirbnbProperties;
  when: string;
}) {
  const [imageNumbers, setImageNumbers] = useState<number[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setImageNumbers(GetRandomNumbers());
  }, [property]);

  const handleNext = () => {
    scrollRef.current?.scrollBy({
      left: scrollRef.current?.clientWidth,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    scrollRef.current?.scrollBy({
      left: -scrollRef.current?.clientWidth,
      behavior: "smooth",
    });
  };

  const cardStyles =
    "w-[90vw] sm:w-[45vw] md:w-[30vw] lg:w-[23vw] xxl:w-[18vw]";
  const imageStyles = "";
  return (
    <Flex className="p-[1vh] hover:cursor-pointer">
      <VStack key={property.id} className={`${cardStyles}`}>
        <VStackFull className="relative group">
          {property.badgeLabel !== "" && (
            <Box
              className="absolute top-[1vh] left-[1vh] z-10 bg-white px-[1vh] rounded-[2vh] font-semibold"
              hoverCursor="hover:cursor-pointer"
            >
              {" "}
              <Text className="text-sm">{property.badgeLabel}</Text>
            </Box>
          )}
          <Box
            className="absolute top-[2vh] right-[2vh] z-10"
            hoverCursor="hover:cursor-pointer"
          >
            {" "}
            <IoMdHeartEmpty className="text-[3.5vh] text-white bg-slate-900/50 p-[0.5vh] rounded-full" />
          </Box>
          <button
            className="absolute left-[0.5vh] top-1/2 transform -translate-y-1/2 bg-white p-[0.3vh] rounded-full shadow-md z-10 opacity-0 group-hover:opacity-100 transition-400"
            onClick={handlePrev}
          >
            <FaAngleLeft className="text-[2.3vh]" />
          </button>
          <button
            className="absolute right-[0.5vh] top-1/2 transform -translate-y-1/2 bg-white p-[0.3vh] rounded-full shadow-md z-10 opacity-0 group-hover:opacity-100 transition-400"
            onClick={handleNext}
          >
            <FaAngleRight className="text-[2.3vh]" />
          </button>
          <Box
            hoverCursor="hover:cursor-pointer"
            className={`w-full overflow-x-auto snap-x scroll-smooth snap-mandatory relative hide-scrollbar rounded-[2vh] ${imageStyles}`}
            ref={scrollRef}
          >
            <HStack className="w-fit" hoverCursor="hover:cursor-pointer">
              {imageNumbers.map((image, index) => (
                <Flex
                  key={index}
                  className={`flex-shrink-0 rounded-[2vh] snap-start snap-always w-full`}
                >
                  <Image
                    src={`https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/mockups/airbnb_properties${String(
                      image
                    )}.png?width=900&resize=contain&quality=50`}
                    key={image}
                    alt={`airbnb ${index}`}
                    className="rounded-[2vh]"
                  />
                </Flex>
              ))}
            </HStack>
          </Box>
        </VStackFull>
        <VStackFull className="p-[1vh] gap-[0.5vh]" gap="gap-[0px]">
          <HStackFull
            hoverCursor="hover:cursor-pointer"
            className="items-center justify-between"
          >
            <Text className="text-md leading-tight font-bold">
              {property.location}
            </Text>
            <HStack
              gap="gap-[0px]"
              className="items-center"
              hoverCursor="hover:cursor-pointer"
            >
              <FaStar className="text-black" />
              <Text className="text-md leading-tight">
                {Number(property.rating).toFixed(1)}
              </Text>
            </HStack>
          </HStackFull>
          <VStackFull align="items-start" gap="gap-[0px]">
            <Text className="text-sm leading-tight">
              {property.description}
            </Text>
            <Text className="text-sm leading-tight">{when}</Text>

            {when.includes("week") ? (
              <Text className="text-sm leading-tight">
                ${property.weeklyPrice.toLocaleString()} / week
              </Text>
            ) : when.includes("month") ? (
              <Text className="text-sm leading-tight">
                ${property.monthlyPrice.toLocaleString()} / month
              </Text>
            ) : (
              <Text className="text-sm leading-tight">
                ${property.nightlyPrice.toLocaleString()} / night
              </Text>
            )}
            {/* <Text className="text-sm">
                <span className="font-semibold">
                  ${property.nightlyPrice.toLocaleString()}
                </span>{" "}
                / night
              </Text>
              <Text className="text-sm">
                <span className="font-semibold">
                  ${property.weeklyPrice.toLocaleString()}
                </span>{" "}
                / week
              </Text>
              <Text className="text-sm">
                <span className="font-semibold">
                  ${property.monthlyPrice.toLocaleString()}
                </span>{" "}
                / month
              </Text> */}
          </VStackFull>
        </VStackFull>
      </VStack>
    </Flex>
  );
}
