import React, { CSSProperties, useEffect, useState } from "react";
import {
  Box,
  Flex,
  FlexFull,
  HStack,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import Tooltip from "~/buildingBlockComponents/tooltip";
import { motion } from "framer-motion";
import Icon from "~/buildingBlockComponents/icon";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ScrollProgressBar from "~/mainDesignComponents/visual-elements/scrollProgressBar";

export function SpringExpandableContainerButton({
  onClick,
  label,
  icon,
  iconLeft = true,
  isDisabled = false,
  tooltip,
  className = "bg-col-500 hover:bg-col-600 bg-gradient-to-br hover:text-white hover:text-stroke-5-100 hover:textShadow from-col-550 via-col-530 to-col-550 text-col-900 text-stroke-5-900 rounded-[3vh]",
  dimensions = "h-[2.7vh]",
  textSize = "text-xs",
  padding = "px-0.5vh md:px-1vh",
  iconSize = "text-sm",
  textAlways = false,
}: {
  isDisabled?: boolean;
  onClick: () => void;
  iconLeft?: boolean;
  label?: string;
  dimensions?: string;
  tooltip?: string;
  textSize?: string;
  padding?: string;
  className?: string;
  iconSize?: string;
  textAlways?: boolean;
  largeButton?: boolean;
  icon?: React.ComponentType<{
    className?: string;
    tabIndex?: number;
    style?: CSSProperties;
  }>;
}) {
  return (
    <Tooltip label={tooltip ? tooltip : undefined}>
      <Box className="relative">
        {isDisabled && (
          <Box className="absolute inset-0 bg-indigo-500/30 rounded-[3vh] text-transparent z-10 hover:cursor-not-allowed backdrop-blur-[1px]">
            .
          </Box>
        )}
        <motion.div
          className="shadowNarrowTight rounded-[3vh] hover:metallicEdgesSm transition-300 h-fit"
          onClick={onClick}
        >
          <HStack
            hoverCursor={isDisabled ? "opacity-30" : "hover:cursor-pointer"}
            className={`${className} ${textSize} transition-300 items-center w-fit ${padding} border-900-md hover:cursor-pointer ${dimensions} leading-tight`}
            gap="gap-[0.2vh]"
          >
            {icon && iconLeft && (
              <Icon
                icon={icon}
                style={{ color: "inherit" }}
                iconClassName={iconSize}
              />
            )}
            {label && (
              <span
                className={` ${
                  textAlways ? "" : "hidden md:inline"
                } text-nowrap`}
              >
                {label}
              </span>
            )}
            {icon && !iconLeft && (
              <Icon
                icon={icon}
                style={{ color: "inherit" }}
                iconClassName={iconSize}
              />
            )}
          </HStack>
        </motion.div>
      </Box>
    </Tooltip>
  );
}

export default function SpringExpandableContainer({
  closedHeight = "10svh",
  // expandedHeight = "fit-content",
  buttonLabel = "code",
  expandedHeight = "50vh",
  headerContent,
  children,
  title,
  stiffness = 123,
  damping = 12.5,
  mass = 1,
  isDefaultOpen = false,
  topPadding = "pt-[4.5vh]",
  margin = "my-[1.5vh]",
  contentBackground = "bg-indigo-900 bg-gradient-to-br from-col-990 via-col-960 to-col-990",
  titleBackground = "bg-col-970",
  titleTextColor = "text-col-500 text-stroke-5-500",
  titleSize = "text-sm",
  largeButton,
}: {
  closedHeight?: string;
  headerContent?: React.ReactNode;
  buttonLabel?: string;
  children?: React.ReactNode;
  expandedHeight?: string;
  title: string;
  stiffness?: number;
  damping?: number;
  mass?: number;
  isDefaultOpen?: boolean;
  topPadding?: string;
  margin?: string;
  contentBackground?: string;
  titleBackground?: string;
  titleTextColor?: string;
  titleSize?: string;
  largeButton?: boolean;
}) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(isDefaultOpen);

  // Scroll back to top when collapsing the expanded view
  useEffect(() => {
    if (!expanded && scrollRef.current) {
      scrollRef.current.scrollTo(0, 0); // Scroll back to the top when collapsed
    }
  }, [expanded]); // Trigger when the 'expanded' state changes

  const variants = {
    expanded: {
      maxHeight: expandedHeight,
      transition: {
        type: "spring",
        stiffness: stiffness, // Adjust for spring bounce effect
        damping: damping, // Adjust for spring bounce effect
        mass: mass, // Adjust for spring bounce effect
      },
    },
    collapsed: {
      maxHeight: closedHeight,
      transition: {
        type: "spring",
        stiffness: 123,
        damping: 16, // Adjust for spring bounce effect
      },
    },
  };

  return (
    <VStackFull gap="gap-[0px]" className={` ${margin}`}>
      {/* ********************* expand and close button ********************* */}
      <FlexFull>
        {/* ********************* expandable ********************* */}

        <FlexFull
          className={`${
            expanded ? "border-500-md" : "border-violet-500 border-[0.2vh] "
          } relative overflow-hidden shadowNarrowNormal rounded-[0.8vh]`}
        >
          {/* ********************* title ********************* */}

          <FlexFull
            className={`absolute inset-0 px-[1vh] pt-[0.7vh] pb-[0.5vh] ${titleBackground} h-fit insetShadow3xl rounded-none justify-between items-center border-b-670-sm`}
          >
            <span
              className={`${titleSize} leading-tight ${titleTextColor} textShadow tracking-wide mono-font `}
            >
              {title}
            </span>
            {/* ********************* expand and close button ********************* */}
            <HStack className="py-[0.2vh] z-10 items-center">
              {headerContent && headerContent}
              <SpringExpandableContainerButton
                iconSize={largeButton ? "text-sm md:text-md" : undefined}
                dimensions={largeButton ? "h-[2.9vh] md:h-[3.1vh]" : undefined}
                textSize={largeButton ? "text-sm md:text-md" : undefined}
                padding={
                  largeButton
                    ? "py-[0.3vh] px-[0.8vh] md:py-[0.5vh]"
                    : undefined
                }
                onClick={() => {
                  setExpanded(!expanded);
                }}
                label={
                  expanded ? `close ${buttonLabel}` : `view ${buttonLabel}`
                }
                icon={expanded ? FaChevronUp : FaChevronDown}
              />
            </HStack>
          </FlexFull>

          {/* *********************  CONTENT  ********************* */}
          <motion.div
            className={`insetShadow6xl flex w-full hide-scrollbar ${topPadding} ${
              expanded ? "overflow-y-auto overflow-x-hidden" : "overflow-hidden"
            } ${contentBackground} p-[1vh] pb-[3vh] border-900-md insetShadow6xl`}
            animate={expanded ? "expanded" : "collapsed"}
            variants={variants}
            ref={scrollRef}
          >
            <VStackFull className="h-fit" align="items-start">
              {children}
            </VStackFull>
            <FlexFull className="absolute bottom-0 left-0 right-0 h-[4vh] rounded-t-none bg-gradient-to-b from-transparent via-slate-900/30 to-slate-900/90 text-transparent">
              .
            </FlexFull>
            {expanded && (
              <ScrollProgressBar
                containerRef={scrollRef}
                height="h-[0.6vh]"
                position="absolute bottom-0 left-0 right-0"
                color="bg-gradient-to-r from-fuchsia-500 via-col-500 to-fuchsia-500"
              />
            )}

            {expanded && (
              <motion.button
                className="hover:metallicEdgesSm transition-300 absolute bottom-[1vh] right-[1vh]"
                onClick={() => {
                  setExpanded(false);
                }}
              >
                <Flex className="items-center bg-col-500 w-fit px-[0.5vh] border-900-md hover:cursor-pointer h-[2.7vh]">
                  <Icon icon={FaChevronUp} iconClassName="text-col-900" />
                </Flex>
              </motion.button>
            )}
          </motion.div>
        </FlexFull>
      </FlexFull>
    </VStackFull>
  );
}
