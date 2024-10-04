import { EvanAvatar } from "~/routes/us+/components-data/about-us-data";
import { BlogPost } from "../blogsArray";
import React from "react";
import { ImageWithZoom } from "../../blog-components/imageWithZoom";

export const PixelPlayground: BlogPost = {
  id: "34",
  date: "2024-04-20",
  title: "Pixel Playground: User Color Options and Image Generation",
  slug: "pixel-playground-user-color-options-and-image-generation",
  author: "Evan Marie Carr",
  avatar: EvanAvatar,
  categories: ["UX / UI & Frontend Design", "Programming", "Creativity"],
  tags: ["AI", "Tailwind", "Apple", "Parallax"],
  image:
    "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blog34.png",
  summary:
    "The Pixel Playground: I absolutely love this one! It is a sleek Apple-inspired interface, customizable color schemes, and interactive panels including an AI image generation tool powered by DALL-E technology.",
  paragraphs: [
    <React.Fragment key="pixel-playground-user-color-options-and-image-generation">
      <p>
        Let me introduce you to Ethan James Parker, a really great guy I made up
        so that I could create this fantastic portal for him. Seriously, I love
        this little project. I go back to it all the time because of all the fun
        little engaging aspects I added to it. Fundamentally, this is a sleek
        and interactive software developer portfolio site that I've
        affectionately dubbed the "Pixel Playground." Now, I know what you might
        be thinking: "Another portfolio site? Yawn." But trust me, this one's
        different. You can see for yourself:
      </p>

      <p>
        <a href="https://darkviolet.ai/ai-powered-portals/developer">
          🔗 The Pixel Playground
        </a>
      </p>

      <p>
        First off, I built the whole thing using Remix and Tailwind CSS, which
        gave me the flexibility to create a truly unique design. The site's
        interface is inspired by the classic Apple computer screen, complete
        with a binary code background that screams "tech." It's like the user is
        stepping into the developer's world, getting a glimpse of the code that
        powers their creations. But then I throw in the pixel party colors
        galore to keep it from being too much like every other techy site.
      </p>

      <p>
        To add some extra flair, I included a date and time display in the upper
        right corner of the "Apple interface." This might be my favorite part
        though - users can also choose from five different color schemes by
        clicking on the options in the upper left corner. It's like giving them
        the keys to the Pixel Playground and letting them customize their
        experience.
      </p>

      <ImageWithZoom
        src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/object/public/darkVioletPublic/landing/blog34gif.gif"
        alt="blog gif"
      />

      <p>
        On to the content: the five main panels. The intro/home panel welcomes
        users and sets the stage for the rest of the site. The resume panel is
        where the developer gets to show off their skills and experience, while
        the schedule panel features an extremely satisfying parallax component
        from react-spring. I could scroll up and down in the schedule panel over
        and over. I absolutely love react-spring and the way it brings code to
        life.
      </p>

      <ImageWithZoom
        src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blog34-2.png"
        alt=""
      />

      <p>
        Arguably, the biggest highlight is the AI image generation panel, using
        state-of-the-art DALL-E image generation technology to create custom
        images based on user prompts, but with a techy flair (i.e., my own
        little pre-prompt prompt). It's a fun and interactive way for users to
        engage with the site and see the developer's creativity in action.
      </p>

      <ImageWithZoom
        src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blog34-3.png"
        alt=""
      />

      <ImageWithZoom
        src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blog34-4.png"
        alt=""
      />

      <p>
        Finally, the contact panel makes it easy for potential clients or
        collaborators to get in touch with the developer. Because, clearly, a
        portfolio site is only as good as the connections it helps you make.
      </p>

      <ImageWithZoom
        src="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blog34-5.png"
        alt=""
      />

      <p>
        The Pixel Playground is more than just a portfolio site; it's an
        experience. It's a place where users can explore, interact, and engage
        with the developer's work in a fun and creative way. I had a blast
        building this site, and I hope it inspires other developers to think
        outside the box and create something truly unique. After all, the web is
        our playground, and there are no limits when you have an imagination
        like mine!
      </p>
    </React.Fragment>,
  ],
};
