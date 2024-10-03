import { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import "tailwind.css";
import {
  Box,
  FlexFull,
  VStack,
} from "./buildingBlockComponents/mainContainers";
import AnimatedText from "./mainDesignComponents/visual-elements/animatedText";
import ImageWallFullScreenBackground from "./mainDesignComponents/visual-elements/imageWallFullScreenBackground";
import { landingShiftingImages } from "./routes/home+/components-data/shiftingImages";

// import { AnimatePresence } from "framer-motion";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Butterfly+Kids&display=swap",
  },
];

export default function App() {
  const isHome = useLocation().pathname === "/home";
  const images = landingShiftingImages.map((image) => image.src);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {isHome && <ImageWallFullScreenBackground images={images} />}
        <FlexFull
          className={`${
            isHome
              ? ""
              : "bg-indigo-800/80 bg-gradient-to-r from indigo-800/40 via-slate-800/90 to-indigo-800/50"
          } h-100svh max-h-100svh first-line:overflow-hidden rounded-none relative`}
        >
          <Outlet />

          <ScrollRestoration />
          <Scripts />
        </FlexFull>
      </body>
    </html>
  );
}
