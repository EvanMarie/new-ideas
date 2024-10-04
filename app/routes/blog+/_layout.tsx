import { Outlet } from "@remix-run/react";
import RouteContainer from "~/mainDesignComponents/routeContainer";

export default function BlogLayout() {
  return (
    <RouteContainer transition="none">
      <Outlet />
    </RouteContainer>
  );
}
