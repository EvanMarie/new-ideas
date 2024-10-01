import { Outlet } from "@remix-run/react";
import RouteContainer from "~/mainDesignComponents/routeContainer";

export default function MockupsLayout() {
  return (
    <RouteContainer>
      <Outlet />
    </RouteContainer>
  );
}
