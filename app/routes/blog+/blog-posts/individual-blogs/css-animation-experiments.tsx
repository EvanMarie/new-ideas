import { EvanAvatar } from "~/routes/us+/components-data/about-us-data";
import { BlogPost } from "../blogsArray";
import React from "react";

export const CSSAnimationExperiments: BlogPost =
  // CSS Animation Experiments
  {
    id: "25",
    date: "2024-03-11",
    title: "CSS Animation Experiments",
    slug: "css-animation-experiments",
    author: "Evan Marie Carr",
    avatar: EvanAvatar,
    categories: ["UX / UI & Frontend Design", "Programming", "Web Animation"],
    tags: ["Web Animation", "Framer-Motion", "SVG Path Animation"],
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blog25.png",
    summary:
      "Explore the captivating world of web animation through a showcase of mesmerizing examples created using Framer-Motion and SVG path animation, and discover the potential of these technologies through my journey of bringing static elements to life.",
    paragraphs: [
      <React.Fragment key="css-animation-experiments">
        <p>
          As a passionate web designer, I find myself constantly captivated by
          the transformative power of animation. Immersing myself in this
          dynamic world has been an exhilarating journey, allowing me to elevate
          my skills and create engaging user experiences that transcend the
          boundaries of static design. Through tireless exploration and
          experimentation, I have cultivated a deep appreciation for the art of
          bringing elements to life, infusing them with fluid transitions and
          captivating animations that leave a lasting impression on viewers.
        </p>
        <p>
          Below, you will find a showcase of my endeavors, a curated collection
          of mesmerizing examples that demonstrate my growing proficiency in the
          field of web animation. Each piece is a testament to my dedication and
          the countless hours spent honing my craft. Utilizing cutting-edge
          technologies such as Framer Motion and SVG path animation, I have
          breathed life into otherwise static designs, creating interactive and
          visually stunning experiences that engage and captivate users.
        </p>
        <p>
          <a href="https://www.evanmarie.com/css-animation-experiments/Remix-Template.DarkViolet.ai">
            🔗 Remix-Tailwind Template
          </a>
        </p>
        <p>
          Another area where I have focused my efforts is SVG path animation.
          The versatility and scalability of SVG have opened up a world of
          possibilities for creating intricate and dynamic animations. By
          manipulating the paths and properties of SVG elements, I have been
          able to create mesmerizing animations that add depth, dimension, and
          visual interest to my designs. Whether it's animating icons,
          illustrations, or custom graphics, SVG path animation has allowed me
          to push the boundaries of what's possible and deliver truly unique and
          captivating experiences.
        </p>
        <p>
          For an immersive experience, I encourage you to explore these examples
          in an interactive environment by visiting the link to my
          Remix-Template above. There, you can engage with the animations
          firsthand and gain a deeper understanding of the possibilities that
          lie ahead as I continue to push the boundaries of web design and
          animation.
        </p>
        <img
          src="http://www.evanmarie.com/content/images/2024/03/Screen-Recording-2024-03-11-at-8.17.15-AM.gif"
          alt="Screen Recording 2024-03-11"
        />
        <img
          src="http://www.evanmarie.com/content/images/2024/03/Screen-Recording-2024-03-11-at-8.21.28-AM.gif"
          alt="Screen Recording 2024-03-11"
        />
        <img
          src="http://www.evanmarie.com/content/images/2024/03/Screen-Recording-2024-03-11-at-8.22.33-AM.gif"
          alt="Screen Recording 2024-03-11"
        />
        <iframe
          src="https://www.youtube.com/embed/TBlwUf8e7Tg"
          title="CSS Falling Circles"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          title="CSS Rain Window"
          src="https://www.youtube.com/embed/rLbG2Ltfafw"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </React.Fragment>,
    ],
  };
