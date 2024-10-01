import { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "tailwind.css";
import {
  Box,
  FlexFull,
  VStack,
} from "./buildingBlockComponents/mainContainers";
import MainNavBar from "./mainDesignComponents/mainNavBar";
import AnimatedText from "./mainDesignComponents/visual-elements/animatedText";

// import { AnimatePresence } from "framer-motion";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
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
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <FlexFull className="bg-col-880 h-[100svh] max-h-[100svh] overflow-hidden rounded-none">
          <Outlet />
          <MainNavBar />
          <Box className="fixed top-0.5vh left-0.5vh">
            <NavLink to="/home">
              <VStack gap="gap-0" align="items-start">
                <AnimatedText
                  text="DarkViolet.ai"
                  textClassName="text-cyan-300 text-4vh textShadow tracking-wider kufam-font"
                />
                <span className="text-1.2vh leading-1.3vh text-col-500">
                  © 2024 All rights reserved.
                </span>
              </VStack>
            </NavLink>
          </Box>
          <ScrollRestoration />
          <Scripts />
        </FlexFull>
      </body>
    </html>
  );
}
