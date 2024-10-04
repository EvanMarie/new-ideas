import { Outlet, useLocation } from "@remix-run/react";
import RouteContainer from "~/mainDesignComponents/routeContainer";
import ImageWallFullScreenBackground from "~/mainDesignComponents/visual-elements/imageWallFullScreenBackground";
import { blogImages } from "./blog-posts/blogsArray";

export default function BlogLayout() {
  const isBlogIndex = useLocation().pathname.endsWith("/blog");
  return (
    <>
      <RouteContainer transition="none">
        <Outlet />
      </RouteContainer>{" "}
    </>
  );
}
