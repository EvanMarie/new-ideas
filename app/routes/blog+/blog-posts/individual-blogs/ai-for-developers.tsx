import { DustinAvatar } from "~/routes/us+/components-data/about-us-data";
import { BlogPost } from "../blogsArray";
import React from "react";

export const aiForDevelopers: BlogPost = {
  id: "66",
  date: "2024-09-20",
  title: "AI For Developers: A Presentation",
  slug: "ai-for-developers-a-presentation",
  presentationSlug: "ai-in-code",
  author: "Dustin W. Carr",
  avatar: DustinAvatar,
  tags: ["AI", "Programming", "Web Development"],
  categories: ["Programming", "Artificial Intelligence", "Apps"],
  image:
    "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blog66.webp",
  summary:
    "A presentation on the role of AI in modern web development, exploring the latest AI technologies, tools, and applications that are transforming the way developers build and deploy web applications.",
  paragraphs: [<React.Fragment key="blog-slug"></React.Fragment>],
  isPresentation: true,
};
