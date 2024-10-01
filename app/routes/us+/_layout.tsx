import { Outlet } from "@remix-run/react";
import { Transition } from "~/buildingBlockComponents/mainContainers";

export default function AboutUsLayout() {
  return (
    <Transition className="w-full h-100svh pb-4svh" type="fadeSlideInBottom">
      <Outlet />
    </Transition>
  );
}
