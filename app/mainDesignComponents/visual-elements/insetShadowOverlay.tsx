import { Flex, FlexFull } from "~/buildingBlockComponents/mainContainers";

export default function InsetShadowOverlay({
  position = "bottom",
  size = "md",
  bottom,
  top,
  left,
  right,
}: {
  position?: "top" | "bottom" | "left" | "right";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  bottom?: string;
  top?: string;
  left?: string;
  right?: string;
}) {
  let height = "";
  let width = "";
  if (size === "xs") {
    height = "h-1vh";
    width = "w-1vh";
  } else if (size === "sm") {
    height = "h-2vh";
    width = "w-2vh";
  } else if (size === "md") {
    height = "h-4vh";
    width = "w-4vh";
  } else if (size === "lg") {
    height = "h-6vh";
    width = "w-6vh";
  } else if (size === "xl") {
    height = "h-8vh";
    width = "w-8vh";
  }

  if (position === "top") {
    return (
      <FlexFull
        className={`absolute ${height} ${top ? top : "top-0"} ${
          left ? left : "left-0"
        } ${
          right ? right : "right-0"
        } rounded-b-none bg-gradient-to-b from-indigo-950/90 via-indigo-950/30 to-transparent text-transparent z-40  0`}
      >
        .
      </FlexFull>
    );
  } else if (position === "left") {
    return (
      <Flex
        className={`absolute ${width} ${top ? top : "top-0"} ${
          left ? left : "left-0"
        } ${
          bottom ? bottom : "bottom-0"
        } rounded-r-none bg-gradient-to-r from-indigo-950/90 via-indigo-950/30 to-transparent text-transparent z-40`}
      >
        .
      </Flex>
    );
  } else if (position === "right") {
    return (
      <Flex
        className={`absolute ${top ? top : "top-0"} ${
          right ? right : "right-0"
        } ${
          bottom ? bottom : "bottom-0"
        } rounded-l-none bg-gradient-to-l from-indigo-950/90 via-indigo-950/30 to-transparent text-transparent ${width} z-40`}
      >
        .
      </Flex>
    );
  }
  return (
    <FlexFull
      className={`absolute z-40 ${height} ${bottom ? bottom : "bottom-0"} ${
        right ? right : "right-0"
      } ${
        left ? left : "left-0"
      } rounded-t-none bg-gradient-to-t from-indigo-950/90 via-indigo-950/30 to-transparent text-transparent`}
    >
      .
    </FlexFull>
  );
}
