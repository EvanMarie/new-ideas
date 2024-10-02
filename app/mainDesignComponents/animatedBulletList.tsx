import {
  HStackFull,
  Transition,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";

export default function AnimatedBulletList({
  heading,
  items,
  overallDelay = 5,
}: {
  heading: string;
  items: string[];
  overallDelay?: number;
}) {
  return (
    <VStackFull align="items-start">
      <h5 className="text-cyan-300">{heading}</h5>
      <ul className="w-full list-disc pl-5">
        {" "}
        {/* Added list-disc and pl-5 classes */}
        {items.map((item, index) => (
          <Transition
            key={index}
            type="rotate3D"
            delay={0.1 * (index + overallDelay)}
            className="w-full"
          >
            <li className="text-left w-full">
              <HStackFull gap="gap-2vh">
                <span>𐩒</span>
                {item}
              </HStackFull>
            </li>
          </Transition>
        ))}
      </ul>
    </VStackFull>
  );
}
