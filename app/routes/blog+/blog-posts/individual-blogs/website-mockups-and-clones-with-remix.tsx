import { EvanAvatar } from "~/routes/us+/components-data/about-us-data";
import { BlogPost } from "../blogsArray";
import React from "react";

export const WebsiteMockupsAndClones: BlogPost =
  // Website Mockups and Clones
  {
    id: "32",
    date: "2024-04-14",
    title: "Website Mockups and Clones with Remix",
    slug: "website-mockups-and-clones-with-remix",
    author: "Evan Marie Carr",
    categories: ["UX / UI & Frontend Design", "Programming"],
    avatar: EvanAvatar,
    tags: ["UI / UX", "Remix", "Tailwind", "Web Design"],
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blog32.png",
    summary:
      "Recreating high-quality clones or mockups of influential websites is a powerful way for web developers to showcase their skills and attention to detail, providing valuable learning opportunities, expanding one's development toolkit, and demonstrating a commitment to honing one's craft.",
    paragraphs: [
      <React.Fragment key="website-mockups-and-clones-with-remix">
        {/* ********************* PARAGRAPHS ********************* */}
        <p>
          As a web developer, one powerful way to demonstrate your skills is by
          recreating high-quality clones or mockups of influential and
          well-designed websites. I recently took on the challenge of
          reproducing the Anthropic website as a way to sharpen my web
          development abilities and provide a compelling example for my
          portfolio. You can view the clone here:
        </p>

        {/* ********************* LONE LINKS ********************* */}
        <p>
          <a href="http://darkviolet.ai/mockups/anthropic" target="_blank">
            🔗 Anthropic Clone
          </a>
        </p>

        <p>
          The process of cloning a site like anthropic.com requires a keen eye
          for detail and a solid grasp of modern web technologies. By leveraging
          the power of Remix, a full-stack web framework, I was able to
          efficiently structure my application and handle dynamic data. Tailwind
          CSS allowed me to rapidly build the UI with its utility-first
          approach, while still maintaining flexibility for custom designs. I
          also created reusable components and implemented smooth animations to
          enhance the user experience and showcase my front-end skills.
        </p>

        {/* ********************* IMAGE ********************* */}
        <img
          src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blog32-2.png"
          alt="Anthropic clone project"
          className="w-80% xl:w-60%"
        />

        {/* ********************* MAIN HEADINGS ********************* */}
        <h2>
          Building website clones and mockups provides several important
          benefits for a developer:
        </h2>

        {/* ********************* LIST WITH BULLETS ********************* */}
        <ul>
          <li>
            ￮ It allows you to deconstruct and learn from the techniques of
            world-class designers and front-end engineers. By digging into the
            code of sites known for their excellent UX and aesthetics, you
            discover tricks and best practices you can apply in your own work.
          </li>
          <li>
            ￮ It showcases the ability to create modular, reusable components,
            which is a key skill for building maintainable and scalable web
            applications.
          </li>
          <li>
            ￮ It helps you expand your development toolkit and exercise your
            problem-solving skills. Cloning a complex, modern website stretches
            your abilities and pushes you to find creative solutions.
          </li>
          <li>
            ￮ It leaves you with an impressive, tangible example of your
            capabilities to show potential employers or clients. Being able to
            say <code>I built that</code> about the front-end of a well-known
            website is a powerful addition to your portfolio.
          </li>
          <li>
            ￮ It demonstrates your commitment to honing your craft and staying
            on top of the latest trends and techniques in web development.
            Regularly cloning popular websites shows that you take your
            professional development seriously.
          </li>
          <li>
            ￮ It's a valuable way to prepare for technical job interviews in
            which you may be examined on your ability to build a user interface
            to spec on the fly. Practicing with website clones helps condition
            you to turn design comps into functioning code.
          </li>
        </ul>

        <p>
          In a world where technology and design trends are constantly evolving,
          having the chops to efficiently build quality clones of influential
          websites is an increasingly valuable skill. I look forward to using my
          Anthropic clone as the first of many examples demonstrating my
          capabilities in this area. Prospective collaborators can count on me
          to deliver accurately translated designs, clean and
          standards-compliant code, and a sharp, detail-oriented approach to
          front-end development.
        </p>
      </React.Fragment>,
    ],
  };
