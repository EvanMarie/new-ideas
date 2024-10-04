import { Outlet, useLocation } from "@remix-run/react";
import RouteContainer from "~/mainDesignComponents/routeContainer";

export default function BlogLayout() {
  const isBlogIndex = useLocation().pathname.endsWith("/blog");
  return (
    <>
      <RouteContainer transition="none" bg="bg-cyan-300/20">
        <Outlet />
      </RouteContainer>{" "}
    </>
  );
}
