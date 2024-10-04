import { ScrollTransition } from "~/mainDesignComponents/scrollTransition";
import { BlogPost } from "../blog-posts/blogsArray";
import { NavLink } from "@remix-run/react";
import { FlexFull } from "~/buildingBlockComponents/mainContainers";

export default function BlogIndexCard({
  blog,
  index,
}: {
  blog: BlogPost;
  index: number;
}) {
  return (
    <ScrollTransition
      delay={0.05 * (index + 0.05) + 0.8}
      //   type={
      //     index === 0 || index % 2 === 0
      //       ? "fadeSlideInLeftHalf"
      //       : "fadeSlideInRightHalf"
      //   }
      type="rotate3D"
      className="w-full"
    >
      <FlexFull className="border-500-md bg-slate-900/60">
        <NavLink to={blog.slug} key={blog.slug}>
          <h3>{blog.title}</h3>
        </NavLink>
      </FlexFull>
    </ScrollTransition>
  );
}
