import { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "tailwind.css";
import { FlexFull } from "./buildingBlockComponents/mainContainers";

// import { AnimatePresence } from "framer-motion";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@100..900&display=swap",
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
        <FlexFull className="bg-indigo-900/80 bg-gradient-to-r from-slate-800/40 via-slate-900/30 to-slate-800/50 h-100svh max-h-100svh first-line:overflow-hidden rounded-none relative">
          <Outlet />

          <ScrollRestoration />
          <Scripts />
        </FlexFull>
      </body>
    </html>
  );
}
