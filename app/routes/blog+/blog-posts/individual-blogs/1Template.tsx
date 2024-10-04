import { EvanAvatar } from "~/routes/us+/components-data/about-us-data";
import { BlogPost } from "../blogsArray";
import React from "react";

export const NewBlogName: BlogPost = {
  id: "69",
  date: "2024-09-20",
  title: "This is a Blog Post",
  slug: "this-is-a-blog-post",
  //   presentationSlug: "this-is-a-blog-post",
  author: "Evan Marie Carr",
  avatar: EvanAvatar,
  tags: ["AI", "Programming", "Web Development"],
  categories: ["Programming", "Artificial Intelligence", "Apps"],
  image:
    "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blog69.webp",
  summary: "Thi sis a summary.",
  paragraphs: [<React.Fragment key="blog-slug"></React.Fragment>],
  //   isPresentation: true,
};
