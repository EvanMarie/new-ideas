import { Outlet } from "@remix-run/react";
import RouteContainer from "~/mainDesignComponents/routeContainer";

export default function PortfolioLayout() {
  return (
    <RouteContainer>
      <Outlet />
    </RouteContainer>
  );
}
