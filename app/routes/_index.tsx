import type { MetaFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import {
  Transition,
  TransitionFull,
  VStack,
} from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";
import TimedNavigation from "~/mainDesignComponents/timedNavigation";
import AnimatedComponentSpring from "~/mainDesignComponents/visual-elements/animatedComponentSpring";
import FloatingUpAndOutImages from "~/mainDesignComponents/visual-elements/floatingViolets";
import DarkVioletIndexAnimation from "~/mainDesignComponents/visual-elements/indexAnimation";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const navigate = useNavigate();
  const taglineStyles =
    "text-2.1vh sm:text-3vh md:text-3vh text-cyan-300 textShadow";
  const handleNavigation = () => {
    navigate("/home"); // Navigate to the next page
  };
  return (
    <TransitionFull className="w-full h-100svh relative justify-center bg-slate-90/40">
      <TimedNavigation
        onScreenTimeComplete={handleNavigation}
        fadeInDuration={1}
        screenTime={3000}
      >
        <VStack gap="gap-6vh">
          <Transition type="rotate3D" className="overflow-visible">
            <Text className="text-6vh sm:text-7vh md:text-8vh lg:text-9vh xl:text-10vh text-violet-950 textGlowXs kufam-font leading-loose overflow-visible">
              DarkViolet.ai
            </Text>
          </Transition>
          <VStack>
            {" "}
            <VStack gap="gap-3vh">
              <AnimatedComponentSpring animation="fadeIn" delay={1}>
                <span className={taglineStyles}>
                  Systems Architecture & AI Integration
                </span>
              </AnimatedComponentSpring>

              <AnimatedComponentSpring animation="fadeIn" delay={2}>
                <span className={taglineStyles}>
                  UI / UX Frontend Development & Design
                </span>
              </AnimatedComponentSpring>
            </VStack>
          </VStack>
        </VStack>
        {/* <DarkVioletIndexAnimation /> */}
        <FloatingUpAndOutImages />
      </TimedNavigation>
    </TransitionFull>
  );
}
