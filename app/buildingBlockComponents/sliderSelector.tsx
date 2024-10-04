import { HStackFull, VStackFull } from "./mainContainers";

export function SliderSelector({
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
