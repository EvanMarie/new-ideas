import type { MetaFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import {
  Transition,
  TransitionFull,
} from "~/buildingBlockComponents/mainContainers";
import TimedNavigation from "~/mainDesignComponents/timedNavigation";
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
        <Transition type="rotate3D">
          <h1 className="text-violet-950 textGlowXs">DarkViolet.ai</h1>
        </Transition>
        {/* <DarkVioletIndexAnimation /> */}
        <FloatingUpAndOutImages />
      </TimedNavigation>
    </TransitionFull>
  );
}
