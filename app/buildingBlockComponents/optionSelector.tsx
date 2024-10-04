import { motion } from "framer-motion";
import { HStackFull, VStackFull, Wrap } from "./mainContainers";

export function Option({
  value,
  currentSelection,
  setSelection,
}: {
  value: string;
  currentSelection: string;
  setSelection: (value: string) => void;
}) {
  const isActive = currentSelection === value;

  return (
    <motion.button
      onClick={() => setSelection(value)}
      className={`flex gap-[0.5vh] items-center ${
        isActive
          ? "text-col-500 border-500-md px-[1.5vh] bg-col-950 rounded-xl metallicEdgesXs"
          : "text-col-100 border-transparent border-[0.2vh]"
      }`}
    >
      <span className="textShadow">{value}</span>
    </motion.button>
  );
}

function SliderSelector({
  label,
  value,
  setValue,
  min,
  max,
  step,
}: {
  label: string;
  value: number;
  setValue: (value: number) => void;
  min: number;
  max: number;
  step: number;
}) {
  return (
    <VStackFull align="items-start">
      <HStackFull className="justify-between text-col-500 textShadow font-semibold">
        <span>{label}</span>
        <span>{value}</span>
      </HStackFull>
      <input
        type="range"
        className="dark-mode"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    </VStackFull>
  );
}

export function OptionSelector({
  label,
  options,
  value,
  setValue,
}: {
  label?: string;
  options: string[];
  value: string;
  setValue: (value: string) => void;
}) {
  return (
    <VStackFull align="items-start">
      {label && (
        <span className="text-col-500 textShadow font-semibold">{label}</span>
      )}
      <Wrap className="w-full justify-evenly">
        {options.map((option) => (
          <Option
            key={option}
            value={option}
            currentSelection={value}
            setSelection={setValue}
          />
        ))}
      </Wrap>
    </VStackFull>
  );
}
