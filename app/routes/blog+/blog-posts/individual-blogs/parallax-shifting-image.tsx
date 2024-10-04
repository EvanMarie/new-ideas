import { EvanAvatar } from "~/routes/us+/components-data/about-us-data";
import { BlogPost } from "../blogsArray";
import React from "react";

export const ParallaxShiftingImages: BlogPost =
  // Parallax Shifting Image Component
  {
    id: "24",
    date: "2024-03-16",
    title: "Parallax Shifting Image Component",
    slug: "parallax-shifting-image-component",
    author: "Evan Marie Carr",
    avatar: EvanAvatar,
    categories: ["UX / UI & Frontend Design", "Programming"],
    tags: ["UI / UX", "Animation", "Framer Motion"],
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blog24.png",
    summary:
      "Highlight of a new Remix-Tailwind component that enhances web visuals through a parallax effect. This component divides an image into multiple sections and animates each independently.",
    paragraphs: [
      <React.Fragment key="parallax-shifting-image-component">
        {/* ********************* PARAGRAPH ********************* */}
        <p>
          The Parallax Shifting Image component is a visually captivating and
          highly customizable Remix-Tailwind component that I created after
          being inspired by visual effects used in documentary film graphics. It
          creates a dynamic parallax effect by dividing an image into multiple
          sections and animating each section independently.
        </p>

        {/* ********************* SUB HEADING ********************* */}
        <h3>Key Features:</h3>

        {/* ********************* LIST-LIKE DATA ********************* */}
        <ul>
          <li>Customizable animation cycle duration</li>
          <li>Adjustable number of image divisions</li>
          <li>
            Configurable minimum and maximum number of vertical movements for
            each section
          </li>
          <li>
            Adjustable range for the vertical distance traveled by each section
          </li>
          <li>Responsive image dimensions based on viewport width</li>
          <li>Customizable padding gap between image sections</li>
        </ul>

        {/* ********************* PARAGRAPH WITH LINK ********************* */}
        <p>
          To make integration a breeze, the Parallax Shifting Image component
          comes with a comprehensive demo and well-documented source code. The
          demo provides an interactive playground where developers can
          experiment with various parameters and observe the parallax effect in
          real-time. This hands-on experience allows developers to quickly grasp
          the component's capabilities and visualize how it can elevate their
          own projects. The source code, available on GitHub, offers a deep dive
          into the implementation details, enabling developers to understand the
          inner workings of the component and customize it further to suit their
          specific requirements. To explore the code and learn more about the
          implementation details, check out the source code and demo at the
          following link:
        </p>
        <p>
          <a
            href="https://remix-template.darkviolet.ai/design/shifting-parallax"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 Shifting Parallax
          </a>
        </p>

        {/* ********************* ADDITIONAL PARAGRAPHS ********************* */}
        <p>
          One of the key strengths of the Parallax Shifting Image component is
          its flexibility and customization options. Developers have full
          control over various parameters, such as the animation cycle duration,
          the number of image divisions, and the range of vertical movements for
          each section. This level of customization allows developers to
          fine-tune the parallax effect to perfectly match their design vision
          and create unique visual experiences tailored to their specific needs.
        </p>
        <p>
          The component's responsiveness is another notable feature. It adapts
          effortlessly to different screen sizes, ensuring a consistent and
          visually appealing experience across a wide range of devices. Whether
          viewed on a desktop, tablet, or mobile phone, the Parallax Shifting
          Image component maintains its charm and effectiveness, capturing the
          attention of users regardless of their device.
        </p>
        <p>
          Whether used as a captivating hero section, a product showcase, or a
          storytelling layout, the Parallax Shifting Image component adds a
          touch of magic to any web page. Its ability to create depth, movement,
          and visual interest makes it a valuable asset for designers and
          developers alike. By incorporating this component into their
          Remix-Tailwind projects, developers can effortlessly enhance the
          visual appeal of their websites, leaving a lasting impression on
          visitors and setting their projects apart from the crowd.
        </p>

        {/* ********************* VIDEO ********************* */}
        <iframe
          src="https://www.youtube.com/embed/cpXR-BwVpzc"
          title="Parallax Shifting Image Component Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: "100%", height: "400px", marginTop: "20px" }}
        ></iframe>
      </React.Fragment>,
    ],
  };
