import { Outlet } from "@remix-run/react";
import { Transition } from "~/buildingBlockComponents/mainContainers";
import RouteContainer from "~/mainDesignComponents/routeContainer";

export default function HomeLayout() {
  return (
    <RouteContainer>
      <Outlet />
    </RouteContainer>
  );
}
