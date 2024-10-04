import { EvanAvatar } from "~/routes/us+/components-data/about-us-data";
import { BlogPost } from "../blogsArray";
import React from "react";

export const DynamicWebPortal: BlogPost =
  // Photography web portal
  {
    id: "33",
    date: "2024-04-15",
    title: "Dynamic Web Portal with a Custom Chatbot",
    slug: "dynamic-web-portal-with-a-custom-chatbot",
    categories: ["UX / UI & Frontend Design", "Programming"],
    author: "Evan Marie Carr",
    avatar: EvanAvatar,
    tags: ["Tailwind", "Remix", "AI", "Chatbot"],
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blog33.png",
    summary:
      "Dynamic photography web portal using Remix, Tailwind CSS, my custom component library, and a personalized chatbot powered by advanced natural language processing.",
    paragraphs: [
      <React.Fragment key="dynamic-web-portal-with-a-custom-chatbot">
        {/* ********************* PARAGRAPHS ********************* */}
        <p>
          When I get an idea or a vision of a project, even if it is just an
          inkling, it can quickly turn into an obsession until I get it down in
          code. This was the situation with the project featured here: a
          photography web portal. I envisioned a masonry grid layout with a
          disappearing hero section that gave all the pertinent information and
          introduction to the site. This hero section would smoothly disappear
          on scroll. And I wanted a chatbot that could help a client connect
          better with visitors to their site, so I set off coding. It was fun to
          build and I'm pretty happy with how it all came together. You can see
          the result at the following link:
        </p>

        {/* ********************* LONE LINKS ********************* */}
        <p>
          <a
            href="http://darkviolet.ai/ai-powered-portals/photography"
            target="_blank"
          >
            🔗 Photography Portal
          </a>
        </p>

        <p>
          Since this site is dedicated to the artistic endeavors of a
          photographer, I wanted to keep the design clean and minimalistic,
          allowing the images to take center stage. The masonry grid layout was
          perfect for showcasing the photographer's work in a visually appealing
          and organized manner. The disappearing hero section added a touch of
          interactivity and elegance to the site, creating a seamless transition
          from the introduction to the main content. And I incorporated a header
          image and footer image, sky for the header and mountains and earth for
          the footer (ingenious, I feel!), to give the site a cohesive and
          visually striking look.
        </p>

        {/* ********************* IMAGE ********************* */}
        <img
          src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blog33-2.png"
          alt="Photography portal hero and grid layout"
        />

        <p>
          To streamline the development process and ensure maintainability, I
          relied heavily on my own custom component library. This library, built
          using Remix and styled with Tailwind, provided a set of reusable UI
          elements that could be easily composed to create complex layouts and
          interactions. With these pre-built components, I am able to
          significantly reduce development time while maintaining a high level
          of code quality and consistency. I take my components with me
          EVERYWHERE!
        </p>

        <p>
          Adding a chatbot to the website was a priority, as AI-integration is a
          DarkViolet.ai specialty. The chatbot was also a strategic move to
          enhance user engagement and provide a more personalized experience. It
          is a conversational AI that can understand and respond to users'
          inquiries about the photographer's work, schedule, etc. in a natural,
          human-like way. This adds a whole new level of interactivity to the
          site and makes it feel more dynamic and responsive to users' needs.
          Plus, it is always fun to see what an AI will come up with to say
          next!
        </p>

        {/* ********************* IMAGE ********************* */}
        <img
          src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blog33-3.png"
          alt="Chatbot on the photography portal"
        />

        {/* ********************* MAIN HEADINGS ********************* */}
        <h2>The chatbot can serve multiple purposes:</h2>

        {/* ********************* LIST WITH BULLETS ********************* */}
        <ul>
          <li>
            Answer common questions about the photographer's services, pricing,
            availability, or any other FAQs, saving users time and providing
            instant gratification.
          </li>
          <li>
            Offer personalized recommendations based on users' preferences or
            inquiries, helping them navigate the photographer's portfolio and
            find the style or services that best suit their needs.
          </li>
          <li>
            Provide helpful tips and insights about photography in general,
            which can be especially valuable for users who are looking to learn
            more about the art form.
          </li>
          <li>
            Collect user feedback or inquiries and forward them to the
            photographer, streamlining communication and ensuring that no
            potential lead or opportunity falls through the cracks.
          </li>
        </ul>

        <p>
          By customizing the chatbot to align with the photographer's brand
          voice and expertise, this portal now has a unique and engaging tool
          that not only enhances the user experience but also sets it apart from
          competitors.
        </p>

        <p>
          This portal was an entertaining creative journey, and I'm very happy
          with the result. I trust it helps Dark Violet visitors to see the
          potential of Remix, Tailwind, and AI integration in creating dynamic
          and engaging web experiences. I look forward to building more projects
          like this in the future and continuing to push the boundaries of
          what's possible in web development. My enthusiasm for this work is
          endless. I am like a kid who has all the crayon colors, all the
          construction paper, and all the glue sticks. I am ready to create!
        </p>
      </React.Fragment>,
    ],
  };
