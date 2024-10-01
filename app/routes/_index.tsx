import type { MetaFunction } from "@remix-run/node";
import { NavLink, Outlet } from "@remix-run/react";
import Icon from "~/buildingBlockComponents/icon";
import {
  HStack,
  TransitionFull,
} from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <TransitionFull className="w-full h-100svh relative justify-center">
      <Outlet />
    </TransitionFull>
  );
}
