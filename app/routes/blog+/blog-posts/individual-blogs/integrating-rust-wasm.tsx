import { DustinAvatar } from "~/routes/us+/components-data/about-us-data";
import { BlogPost } from "../blogsArray";
import React from "react";

export const integratingRustWasmRemix: BlogPost =
  // INTEGRATING RUST & WASMN IN REMIX
  {
    id: "67",
    date: "2024-09-21",
    title: "Integrating Rust and WebAssembly in Remix",
    slug: "integrating-rust-and-webassembly-in-remix",
    author: "Dustin Carr",
    avatar: DustinAvatar,
    tags: ["RustWASM", "RemixJS", "WebDevelopment", "GameOfLife"],
    categories: ["Programming", "Apps", "Creativity"],
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blog67.webp",
    summary:
      "Ever wonder how to integrate WebAssembly (WASM) modules built with Rust into a Remix application? This post covers setting up the project, creating a Rust WASM module, and integrating it into a Remix app. The example uses a Game of Life implementation to demonstrate the process.",
    paragraphs: [
      <React.Fragment key="integrating-rust-and-webassembly-in-remix">
        <h2>Integrating wasm built from rust into a remix app</h2>
        <p>
          This is a guide on how to integrate a wasm module built from rust into
          a remix app. All of the code for this example can be found at{" "}
          <a href="https://github.com/DarkViolet-ai/remix-wasm" target="_blank">
            🔗 https://github.com/DarkViolet-ai/remix-wasm
          </a>
        </p>

        <h3>Setting up the project</h3>
        <p>Make sure your rust installation is up to date with rustup.</p>
        <pre>
          <code>{`rustup update`}</code>
        </pre>

        <h3>Create the project</h3>
        <p>Start by creating the new remix project</p>
        <pre>
          <code>{`npx create-remix@latest  --app-name=remix-wasm`}</code>
        </pre>

        <h3>Install the vite-plugin-wasm package</h3>
        <pre>
          <code>{`npm install vite-plugin-wasm`}</code>
        </pre>
        <p>You are now ready to start building your wasm module.</p>

        <h3>Setting up the wasm module</h3>
        <p>Create a new rust project</p>
        <pre>
          <code>{`cargo new rust-wasm-lib --lib`}</code>
        </pre>
        <p>
          Edit your cargo toml file to include whatever you need for your wasm
          module. For the game of life example, the cargo.toml will look like
          this:
        </p>
        <pre>
          <code>{`
    [package]
    name = "rust-wasm-lib"
    version = "0.1.0"
    edition = "2021"

    [lib]
    crate-type = ["cdylib"]

    [dependencies]
    wasm-bindgen = { version = "0.2.93", features = ["serde-serialize"] }
    wasm-bindgen-futures = "0.4.33"
    web-sys = { version = "0.3.70", features = [
        "Window", "Document", "HtmlCanvasElement", "CanvasRenderingContext2d",
        "AudioContext", "AnalyserNode", "MediaDevices", "Navigator",
        "MediaStreamConstraints", "MediaStream", "MediaStreamAudioSourceNode"
    ] }
    js-sys = "0.3.70"
    plotters = "0.3.5"
    plotters-canvas = "0.3.0"
    wee_alloc = "0.4.5"
    rand = "0.8.5"
    getrandom = { version = "0.2", features = ["js"] }

    [profile.release]
    panic = "abort"
    `}</code>
        </pre>

        <p>
          For this example, I started with an implementation of the game of
          life. This code was generated in collaboration with Claude Sonnet 3.5
          using the cursor IDE. I won't paste all of that code in here, but you
          can review it in the github repo. This is a simple implementation
          whose main purpose is to give us some eye candy to work with in the
          remix app.
        </p>
        <p>
          <a
            href="https://github.com/DarkViolet-ai/remix-wasm/blob/main/rust-wasm-lib/src/lib.rs"
            target="_blank"
          >
            🔗 Github Repo
          </a>
        </p>

        <h3>Set up the scripts in the package.json for the remix app</h3>
        <pre>
          <code>{`
    "scripts": {
    "build:wasm": "cd rust-wasm-lib && wasm-pack build --target web",
    "build": "npm run build:wasm && remix vite:build",
    "dev": "npm run build:wasm && remix vite:dev",
  }
    `}</code>
        </pre>
        <p>Test out the build of the wasm module by running:</p>
        <pre>
          <code>{`npm run build:wasm`}</code>
        </pre>

        <h3>Integrating the wasm module into the remix app</h3>
        <p>
          All that is left now is to make the component that will host the wasm
          module.
        </p>
        <p>
          Note that the build process will create a pkg folder with the wasm
          module and the js wrapper code. We only need to import the wrapper
          code into our project.
        </p>
        <p>
          <a
            href="https://github.com/DarkViolet-ai/remix-wasm/blob/main/app/routes/game-of-life"
            target="_blank"
          >
            🔗 This is implemented in the game-of-life route
          </a>
        </p>
        <pre>
          <code>{`import initWasm, { Universe } from "../../rust-wasm-lib/pkg/rust_wasm_lib";`}</code>
        </pre>

        <p>
          From there, we just call the functions from the wasm module. In this
          case, we pass a canvas element id to the wasm module and it will draw
          the game of life to the canvas. All of the graphics processing and
          game logic is handled in the wasm module.
        </p>
        <p>
          In the repo, we also have an example of a breakout game, also written
          entirely by AI (Sonnet 3.5 and Cursor IDE).
        </p>
        <p>
          This project was one of my first attempts to use Cursor Composer to
          write the entire codebase according to my normal language
          specifications. I think having the ability to insert wasm modules into
          remix is a powerful tool that can enable a lot of new functionality in
          web apps. I used AI to teach me how to get this done, and it worked
          better than I expected. Now I have a new skill under my belt, and I
          hope you do too.
        </p>
      </React.Fragment>,
    ],
  };
