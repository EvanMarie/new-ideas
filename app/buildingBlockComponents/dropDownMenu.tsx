import { Dispatch, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./icon";
import { BiChevronDown } from "react-icons/bi";
import DefaultLabel from "./defaultLabel";
import { Flex, FlexFull, HStackFull, VStackFull } from "./mainContainers";

export default function DropDownMenu({
  options,
  buttonText = "Select",
  maxHeight = "max-h-80vh",
  buttonTextSize,
  elementTextSize,
  iconSize = "text-4vh",
  elementClassName = "",
  bgSettings = "bg-col-500 hover:bg-cyan-100 hover:cursor-pointer bg-gradient-to-r from-indigo-200/30 via-fuchsia-200/40 to-indigo-300/40 transition-300 ",
  menuTextColor = "text-col-900",
  elementPadding = "px-1vh py-0.5vh",
  label,
  selectedOption,
  setSelectedOption,
}: {
  options: string[];
  buttonText?: string;
  maxHeight?: string;
  buttonTextSize?: string;
  elementTextSize?: string;
  iconSize?: string;
  elementClassName?: string;
  bgSettings?: string;
  menuTextColor?: string;
  elementPadding?: string;
  label?: string;
  selectedOption: string | undefined;
  setSelectedOption:
    | Dispatch<any | string | undefined>
    | ((value: string | undefined) => void);
}) {
  function DropDownElement({
    text,
    alignment = "justify-start",
  }: {
    text: string;
    alignment?: string;
  }) {
    return (
      <HStackFull
        className={`${alignment} ${bgSettings} ${elementTextSize} ${elementPadding} ${elementClassName} h-fit rounded-none group-hover:rounded-none`}
        onClick={() => {
          setSelectedOption(text);
          setIsDropDownOpen(false);
        }}
      >
        <span className="group-hover:font-semibold">{text}</span>
      </HStackFull>
    );
  }

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <VStackFull className={`  relative `} gap="gap-[0.5vh]" align="items-start">
      {label && <DefaultLabel label={label} />}
      <HStackFull
        onClick={() => setIsDropDownOpen(!isDropDownOpen)}
        className={`${bgSettings} ${menuTextColor} ${elementPadding} hover:cursor-pointer items-center justify-between shadowNarrowNormal ${
          isDropDownOpen ? "rounded-b-none" : ""
        }  `}
        //   style={{ zIndex: 100 }}
      >
        <Flex className={`${buttonTextSize}`}>
          {selectedOption ? selectedOption : buttonText}
        </Flex>
        <Icon
          icon={BiChevronDown}
          iconClassName={`${iconSize} ${
            isDropDownOpen
              ? "transform rotate-180 transition-transform duration-500"
              : "transform rotate-0 transition-transform duration-500"
          }`}
        />
      </HStackFull>
      <AnimatePresence>
        {isDropDownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.4 }}
            style={{
              width: "100%",
              zIndex: 150,
              borderRadius: "0px",
              position: "absolute",
              top: "100%",
              left: "0",
            }}
          >
            <FlexFull
              className={`${maxHeight} ${bgSettings} ${menuTextColor} overflow-y-auto rounded-t-none  transition-500 shadowNarrowNormal`}
            >
              <VStackFull
                gap="gap-[0px]"
                className={`h-fit ${menuTextColor} transition-500 rounded-t-none mainInset`}
              >
                {options.map((option, index) => (
                  <DropDownElement key={index} text={option} />
                ))}
              </VStackFull>
            </FlexFull>
          </motion.div>
        )}
      </AnimatePresence>
    </VStackFull>
  );
}
