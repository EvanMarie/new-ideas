import { Outlet } from "@remix-run/react";
import RouteContainer from "~/mainDesignComponents/routeContainer";

export default function AboutUsLayout() {
  return (
    <RouteContainer>
      <Outlet />
    </RouteContainer>
  );
}
