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
  const randomWidths = [
    "md:w-40%",
    "md:w-45%",
    "md:w-50%",
    "md:w-55%",
    "md:w-60%",
  ];

  const randomWidth =
    randomWidths[Math.floor(Math.random() * randomWidths.length)];
  return (
    <ScrollTransition
      delay={0.01 * (index + 0.1) + 0.1}
      //   type={
      //     index === 0 || index % 2 === 0
      //       ? "fadeSlideInLeftHalf"
      //       : "fadeSlideInRightHalf"
      //   }
      type="rotate3D"
      className={`w-full rounded-none ${randomWidth} p-1vh`}
    >
      <FlexFull className="bg-slate-900/80 bg-gradient-to-r from-violet-900/30 via-fuchsia-900/50 to violet-900/30 px-1vh py-0.3vh rounded-none">
        <NavLink to={blog.slug} key={blog.slug}>
          <span>{blog.title}</span>
        </NavLink>
      </FlexFull>
    </ScrollTransition>
  );
}
