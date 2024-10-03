import { Outlet, useLocation } from "@remix-run/react";
import { Transition } from "~/buildingBlockComponents/mainContainers";
import RouteContainer from "~/mainDesignComponents/routeContainer";
import ImageWallFullScreenBackground from "~/mainDesignComponents/visual-elements/imageWallFullScreenBackground";
import { landingShiftingImages } from "./components-data/shiftingImages";

export default function HomeLayout() {
  const isHome = useLocation().pathname === "/home";
  const images = landingShiftingImages.map((image) => image.src);
  return (
    <>
      {isHome && <ImageWallFullScreenBackground images={images} />}

      <RouteContainer
        bg={
          isHome
            ? ""
            : "bg-slate-950/40 bg-gradient-to-bl from-fuchsia-950/20 via-purple-950/20 to-fuchsia-950/20"
        }
      >
        <Outlet />
      </RouteContainer>
    </>
  );
}
