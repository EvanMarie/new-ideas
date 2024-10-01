import { Outlet } from "@remix-run/react";
import RouteContainer from "~/mainDesignComponents/routeContainer";

export default function ComingSoonLayout() {
  return (
    <RouteContainer>
      <Outlet />
    </RouteContainer>
  );
}
