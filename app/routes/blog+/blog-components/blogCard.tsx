import { ScrollTransition } from "~/mainDesignComponents/scrollTransition";
import { BlogPost } from "../blog-posts/blogsArray";
import { NavLink } from "@remix-run/react";
import { Box, FlexFull } from "~/buildingBlockComponents/mainContainers";
import Image from "~/buildingBlockComponents/image";

export default function BlogIndexCard({
  blog,
  index,
}: {
  blog: BlogPost;
  index: number;
}) {
  const lgScreenWidths = [
    "w-65%",
    "w-35%",
    "w-40%",
    "w-60%",
    "w-55%",
    "w-45%",
    "w-35%",
    "w-65%",
    "w-50%",
    "w-50%",
  ];

  function getWidthByIndex(index: number): string {
    const indexDigit = index % 10;
    return lgScreenWidths[indexDigit];
  }

  const widthClass = getWidthByIndex(index);

  return (
    <ScrollTransition
      delay={0.01 * (index + 0.1) + 0.1}
      type="rotate3D"
      className={`w-full rounded-none ${widthClass} p-1vh`}
    >
      <FlexFull className="bg-slate-900/80 bg-gradient-to-r from-violet-900/30 via-fuchsia-900/50 to violet-900/30 px-1vh py-0.3vh rounded-none justify-between">
        <NavLink to={blog.slug} key={blog.slug}>
          <span>{blog.title}</span>
        </NavLink>
        <Box className="w-13vh h-13vh">
          <Image src={blog.image} alt={blog.title} className="w-full h-auto" />
        </Box>
      </FlexFull>
    </ScrollTransition>
  );
}
