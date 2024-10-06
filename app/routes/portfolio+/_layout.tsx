import { Outlet, useParams } from "@remix-run/react";
import RouteContainer from "~/mainDesignComponents/routeContainer";

export default function PortfolioLayout() {
  const portalMockupSlug = useParams().portalMockupSlug;
  return (
    <>
      {portalMockupSlug ? (
        <Outlet />
      ) : (
        <RouteContainer>
          <Outlet />
        </RouteContainer>
      )}
    </>
  );
}
