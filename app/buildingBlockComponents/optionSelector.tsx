import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VStackFull, Wrap } from "./mainContainers";

export function Option({
  value,
  currentSelection,
  setSelection,
  textSize = "text-xs sm:text-sm",
  textShadowUnselected = "textShadow",
  padding = "px-1vh pt-0.3vh pb-0.5vh sm:px-1.5vh",
}: {
  value: string;
  currentSelection: string;
  setSelection: (value: string) => void;
  textSize?: string;
  textShadowUnselected?: string;
  padding?: string;
}) {
  const isActive = currentSelection === value;

  return (
    <motion.button
      onClick={() => setSelection(value)}
      className={`flex ${textSize} gap-0.5vh items-center ${padding} relative`}
    >
      {isActive && (
        <motion.div
          layoutId="active-background"
          className="absolute inset-0 bg-indigo-950/70 rounded-xl border-500-md metallicEdgesXs"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
      <span
        className={`relative z-10 textShadow ${
          isActive ? "text-col-500" : `text-col-100 ${textShadowUnselected}`
        }`}
      >
        {value}
      </span>
    </motion.button>
  );
}

export function OptionSelector({
  label,
  options,
  value,
  setValue,
  textSize,
  padding,
  textShadowUnselected,
}: {
  label?: string;
  options: string[];
  value: string;
  setValue: (value: string) => void;
  textSize?: string;
  padding?: string;
  textShadowUnselected?: string;
}) {
  return (
    <VStackFull align="items-start">
      {label && (
        <span className="text-col-500 textShadow font-semibold">{label}</span>
      )}
      <Wrap className="w-full justify-evenly">
        <AnimatePresence>
          {options.map((option) => (
            <Option
              key={option}
              value={option}
              currentSelection={value}
              setSelection={setValue}
              textSize={textSize}
              padding={padding}
              textShadowUnselected={textShadowUnselected}
            />
          ))}
        </AnimatePresence>
      </Wrap>
    </VStackFull>
  );
}

export default OptionSelector;
