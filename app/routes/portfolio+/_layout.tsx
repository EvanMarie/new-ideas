import { Outlet, useParams } from "@remix-run/react";
import RouteContainer from "~/mainDesignComponents/routeContainer";

export default function PortfolioLayout() {
  const projectSlug = useParams().projectSlug;
  return (
    <RouteContainer>
      <Outlet />
    </RouteContainer>
  );
}
