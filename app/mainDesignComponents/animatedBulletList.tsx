import DividerHeading from "~/buildingBlockComponents/dividerHeading";
import {
  HStackFull,
  Transition,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";

export default function AnimatedBulletList({
  heading,
  items,
  overallDelay = 5,
  headingShadow = "textFogXxs",
  headingColor = "text-col-500",
  headingDivider = "none",
}: {
  heading: string;
  items: string[];
  overallDelay?: number;
  headingShadow?: string;
  headingColor?: string;
  headingDivider?: "both" | "left" | "right" | "none";
}) {
  const headingBothSides = headingDivider === "both";
  const headingLeftSide = headingDivider === "left";
  const headingRightSide = headingDivider === "right";
  const headingNoDividers = headingDivider === "none";

  return (
    <VStackFull align="items-start">
      <DividerHeading
        heading={heading}
        textColor={headingColor}
        textShadow={headingShadow}
        bothSides={headingBothSides}
        rightSide={headingRightSide}
        leftSide={headingLeftSide}
        noDividers={headingNoDividers}
      />
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
            <li className="text-left w-full textFogXxs">
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
