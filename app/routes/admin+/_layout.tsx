import { Outlet } from "@remix-run/react";
import RouteContainer from "~/mainDesignComponents/routeContainer";

export default function AdminLayout() {
  return (
    <RouteContainer>
      <Outlet />
    </RouteContainer>
  );
}
