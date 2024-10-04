import { Outlet, useLocation, useParams } from "@remix-run/react";
import RouteContainer from "~/mainDesignComponents/routeContainer";

export default function BlogLayout() {
  const blogSlug = useParams().blogSlug;
  return (
    <>
      <RouteContainer
        transition="none"
        bg="bg-col-500/20"
        padding={blogSlug ? "" : undefined}
        noPadding={blogSlug ? true : false}
      >
        <Outlet />
      </RouteContainer>{" "}
    </>
  );
}
