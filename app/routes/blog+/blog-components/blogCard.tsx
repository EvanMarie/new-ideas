import { ScrollTransition } from "~/mainDesignComponents/scrollTransition";
import { BlogPost } from "../blog-posts/blogsArray";
import { NavLink } from "@remix-run/react";

export default function BlogIndexCard({
  blog,
  index,
}: {
  blog: BlogPost;
  index: number;
}) {
  return (
    <ScrollTransition>
      <NavLink to={blog.slug} key={blog.slug}>
        <h3>{blog.title}</h3>
      </NavLink>
    </ScrollTransition>
  );
}
