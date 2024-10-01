import { Outlet, useParams } from "@remix-run/react";
import RouteContainer from "~/mainDesignComponents/routeContainer";

export default function PortfolioLayout() {
  return (
    <RouteContainer>
      <Outlet />
    </RouteContainer>
  );
}
