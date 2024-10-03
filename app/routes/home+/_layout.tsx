import { Outlet } from "@remix-run/react";
import { Transition } from "~/buildingBlockComponents/mainContainers";
import RouteContainer from "~/mainDesignComponents/routeContainer";

export default function HomeLayout() {
  return (
    <RouteContainer
      // bg="bg-slate-950/40 bg-gradient-to-bl from-fuchsia-950/20 via-purple-950/20 to-fuchsia-950/20"
      bg=""
    >
      <Outlet />
    </RouteContainer>
  );
}
