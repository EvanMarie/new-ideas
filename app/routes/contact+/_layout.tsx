import { Outlet } from "@remix-run/react";
import RouteContainer from "~/mainDesignComponents/routeContainer";

export default function ContactUsLayout() {
  return (
    <RouteContainer>
      <Outlet />
    </RouteContainer>
  );
}
