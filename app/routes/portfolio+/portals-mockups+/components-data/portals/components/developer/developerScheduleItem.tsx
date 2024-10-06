import { ParallaxLayer } from "@react-spring/parallax";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Text from "~/components/buildingBlocks/text";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function DeveloperScheduleItem({
  role,
  event,
  location,
  date,
  offset,
  speed,
  border,
  bg,
  highlightColor,
  justify = "md:justify-start",
}: {
  role: string;
  event: string;
  location: string;
  date: string;
  offset?: number;
  speed?: number;
  border?: string;
  bg?: string;
  highlightColor?: string;
  justify?: string;
}) {
  return (
    <ParallaxLayer offset={offset} speed={speed}>
      <FlexFull className={`p-[2vh] justify-center ${justify}`}>
        <FlexFull className="shadowBroadLoose md:w-90% lg:w-75% xl:w-60% xxl:w-55%">
          <VStackFull
            className={` p-[1vh] ${bg} ${border} insetShadowXl text-[2vh] leading-[2.3vh]`}
            gap="gap-[0px]"
          >
            <FlexFull className="text-center justify-center text-[2.3vh] leading-[2.7vh] sm:text-[3vh] sm:leading-[3.3vh]">
              <Text className={`text-[600] ${highlightColor}`}>{event}</Text>
            </FlexFull>
            <Text>{location}</Text> <Text>{date}</Text>
            <Text>{role}</Text>
          </VStackFull>
        </FlexFull>
      </FlexFull>
    </ParallaxLayer>
  );
}
