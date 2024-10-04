import { motion } from "framer-motion";
import { HStackFull, VStackFull, Wrap } from "./mainContainers";

export function Option({
  value,
  currentSelection,
  setSelection,
  textSize = "text-sm",
  padding = "pt-0.2vh pb-0.5vh px-1.5vh",
}: {
  value: string;
  currentSelection: string;
  setSelection: (value: string) => void;
  textSize?: string;
  padding?: string;
}) {
  const isActive = currentSelection === value;

  return (
    <motion.button
      onClick={() => setSelection(value)}
      className={`flex ${textSize} gap-0.5vh items-center ${padding} ${
        isActive
          ? "text-col-500 border-500-md bg-indigo-950/70 rounded-xl metallicEdgesXs"
          : "text-col-100 border-transparent border-[0.2vh] hover:text-col-500 transition-300"
      }`}
    >
      <span className="textShadow">{value}</span>
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
}: {
  label?: string;
  options: string[];
  value: string;
  setValue: (value: string) => void;
  textSize?: string;
  padding?: string;
}) {
  return (
    <VStackFull align="items-start">
      {label && (
        <span className="text-col-500 textShadow font-semibold">{label}</span>
      )}
      <Wrap className="w-full justify-evenly">
        {options.map((option) => (
          <Option
            textSize={textSize}
            key={option}
            value={option}
            currentSelection={value}
            setSelection={setValue}
            padding={padding}
          />
        ))}
      </Wrap>
    </VStackFull>
  );
}
