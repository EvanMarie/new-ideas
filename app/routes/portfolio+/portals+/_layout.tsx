import { Outlet } from "@remix-run/react";
import RouteContainer from "~/mainDesignComponents/routeContainer";

export default function PortalsLayout() {
  return (
    <RouteContainer>
      <Outlet />
    </RouteContainer>
  );
}
