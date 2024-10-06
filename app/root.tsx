import { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useParams,
  useRouteError,
} from "@remix-run/react";
import "tailwind.css";
import { FlexFull } from "./buildingBlockComponents/mainContainers";
import MainNavBar from "./mainDesignComponents/mainNavBar";

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
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=M+PLUS+1:wght@100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.cdnfonts.com/css/tesla-2",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.cdnfonts.com/css/killcrazy-bb",
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "DarkViolet.ai" },
    { name: "description", content: "Where humans and AI come together." },
    {
      name: "keywords",
      content:
        "AI, Dark Violet, Technology, Web Consultants, Web Developers, AI Architects, Freelance, Designer, Innovator, Artistic, AI Art, LLM, Chat, AI Chat, Uncensored Chat, Remix, React, Typescript, Python, Javascript.",
    },
    { property: "og:title", content: "DarkViolet.ai" },
    {
      property: "og:description",
      content: "Where humans and AI come together.",
    },
    {
      property: "og:image",
      content:
        "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/dv-social-media-large.png",
    },
    {
      name: "twitter:card",
      content:
        "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/dv-social-media-square.png",
    },
  ];
};

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div
        style={{
          margin: 0,
          position: "fixed",
          top: 0,
          left: 0,
          overflowX: "hidden",
          overflowY: "hidden",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(357deg, rgba(176,0,255,1) 0%, rgba(112,50,255,1) 100%)",
          color: "cyan",
          fontFamily: "monospace",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "2vh",
          boxShadow: "1vh 1vh 1vh black",
          textShadow: "0.3vh 0.3vh 0.5vh black",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(357deg, rgba(176,0,255,1) 0%, rgba(112,50,255,1) 100%)",
            width: "100%",
            height: "100%",
            fontFamily: "monospace",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "2vh",
            boxShadow: "0 0 1vh black",
            textShadow: "0 0 0.5vh black",
            margin: 0,
            position: "fixed",
            top: 0,
            left: 0,
            overflowX: "hidden",
            overflowY: "hidden",
            alignContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "fit-content",
              background:
                "linear-gradient(174deg, rgba(113,0,255,1) 0%, rgba(92,0,131,1) 100%)",
              padding: "1.5vh",
              boxShadow: "0 0 1vh black",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              fontSize: "4vh",
              fontWeight: "600",
              flexDirection: "column",
              gap: "1vh",
            }}
          >
            <div style={{ fontSize: "3vh" }}>Oh, snippity snaps!</div>
            <div>
              {error.status} - {error.statusText}
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            fontFamily: "monospace",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "3vh",
          }}
        >
          <div
            style={{
              width: "fit-content",

              height: "fit-content",
              background: "#5c0083",
              padding: "1vh 2vh",
              boxShadow: "1vh 1vh 1vh black",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              borderRadius: "1vh",
              border: "0.3vh solid cyan",
              zIndex: 1,
            }}
          >
            <p
              style={{
                fontSize: "2vh",
                fontWeight: "500",
                color: "cyan",
                textShadow: "0.2vh 0.2vh 0.5vh black",
              }}
            >
              {error.data}
            </p>
          </div>
          <div
            style={{
              zIndex: 1,
            }}
          >
            <img
              src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/darkviolet.png?width=700&resize=contain&quality=60"
              alt="DarkViolet Logo"
              style={{
                width: "17vh",
                height: "auto",
              }}
            />
          </div>
          <a
            href="https://www.darkviolet.ai/home"
            style={{
              width: "fit-content",
              height: "fit-content",
              background:
                "linear-gradient(174deg, rgba(25,1,131,1) 0%, rgba(176,0,175,1) 100%)",
              padding: "1vh 2vh",
              boxShadow: "1vh 1vh 1vh black",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderRadius: "1vh",
              border: "0.3vh solid cyan",
              zIndex: 1,
              color: "cyan",
              textDecoration: "none",
            }}
          >
            Let's try this again...click me
          </a>
        </div>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div
        style={{
          margin: 0,
          position: "fixed",
          top: 0,
          left: 0,
          overflowX: "hidden",
          overflowY: "hidden",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(357deg, rgba(176,0,255,1) 0%, rgba(112,50,255,1) 100%)",
          color: "cyan",
          fontFamily: "monospace",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "2vh",
          boxShadow: "1vh 1vh 1vh black",
          textShadow: "0.3vh 0.3vh 0.5vh black",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(357deg, rgba(176,0,255,1) 0%, rgba(112,50,255,1) 100%)",
            width: "100%",
            height: "100%",
            fontFamily: "monospace",
            display: "flex",
            flexDirection: "column",
            gap: "1vh",
            alignItems: "center",
            fontSize: "2vh",
            boxShadow: "0 0 1vh black",
            textShadow: "0 0 0.5vh black",
            margin: 0,
            position: "fixed",
            top: 0,
            left: 0,
            overflowX: "hidden",
            overflowY: "hidden",
            alignContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "fit-content",
              background:
                "linear-gradient(174deg, rgba(113,0,255,1) 0%, rgba(92,0,131,1) 100%)",
              padding: "1.5vh",
              boxShadow: "0 0 1vh black",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              fontSize: "4vh",
              fontWeight: "600",
              flexDirection: "column",
              gap: "1vh",
            }}
          >
            <div style={{ fontSize: "3vh" }}>Oh, snippity snaps!</div>
          </div>
          <h2>{error.message}</h2>
          <p>The stack trace is:</p>
          <div
            style={{
              maxWidth: "90vw",
              overflow: "auto",
              maxHeight: "25svh",
              padding: "1vh",
              background: "rgba(0,0,0,0.5)",
              borderRadius: "1vh",
              boxShadow: "inset 0 0 10px #000",
            }}
          >
            <pre style={{ fontSize: "1.6vh" }}>{error.stack}</pre>
          </div>
          <div
            style={{
              zIndex: 1,
            }}
          >
            <img
              src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/darkviolet.png?width=700&resize=contain&quality=60"
              alt="DarkViolet Logo"
              style={{
                width: "17vh",
                height: "auto",
              }}
            />
          </div>
          <a
            href="https://www.darkviolet.ai/home"
            style={{
              width: "fit-content",
              height: "fit-content",
              background:
                "linear-gradient(174deg, rgba(25,1,131,1) 0%, rgba(176,0,175,1) 100%)",
              padding: "1vh 2vh",
              boxShadow: "1vh 1vh 1vh black",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderRadius: "1vh",
              border: "0.3vh solid cyan",
              zIndex: 1,
              color: "cyan",
              textDecoration: "none",
            }}
          >
            Let's try this again...click me
          </a>
        </div>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}

export default function App() {
  const portalMockupSlug = useParams().portalMockupSlug;
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <FlexFull className="bg-indigo-800/70 bg-gradient-to-r from-slate-800/40 via-slate-900/30 to-slate-800/50 h-100svh max-h-100svh first-line:overflow-hidden rounded-none relative">
          <Outlet />
          {/* ***************** WHEN TO SHOW NAV ***************** */}
          {!portalMockupSlug && <MainNavBar />}
          <ScrollRestoration />
          <Scripts />
        </FlexFull>
      </body>
    </html>
  );
}
