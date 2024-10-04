import { ScrollTransition } from "~/mainDesignComponents/scrollTransition";
import { BlogPost } from "../blog-posts/blogsArray";
import { NavLink } from "@remix-run/react";
import { Box, Flex, FlexFull } from "~/buildingBlockComponents/mainContainers";
import Image from "~/buildingBlockComponents/image";

export default function BlogIndexCard({
  blog,
  index,
}: {
  blog: BlogPost;
  index: number;
}) {
  const lgScreenWidths = [
    "lg:w-65% xxl:w-25%",
    "lg:w-35% xxl:w-50%",
    "lg:w-40% xxl:w-25%",
    "lg:w-60% xxl:w-35%",
    "lg:w-55% xxl:w-24%",
    "lg:w-45% xxl:w-40%",
    "lg:w-35% xxl:w-40%",
    "lg:w-65% xxl:w-30%",
    "lg:w-50% xxl:w-30%",
    "lg:w-50% xxl:w-30%",
    "lg:w-40% xxl:w-40%",
    "lg:w-60% xxl:w-30%",
  ];

  function getWidthByIndex(index: number): string {
    const indexDigit = (index + 12) % 10;
    return lgScreenWidths[indexDigit];
  }

  const widthClass = getWidthByIndex(index);

  return (
    <ScrollTransition
      delay={0.01 * (index + 0.1) + 0.1}
      type="rotate3D"
      className={`w-full rounded-none ${widthClass} p-1vh`}
    >
      <FlexFull className="bg-slate-900/80 bg-gradient-to-r from-violet-900/30 via-fuchsia-900/50 to violet-900/30 px-1vh py-0.3vh rounded-none justify-between rounded-2vh">
        <NavLink to={blog.slug} key={blog.slug}>
          <span>{blog.title}</span>
        </NavLink>
        <Flex className="w-13vh h-13vh flex-shrink-0">
          <Image
            src={blog.image}
            alt={blog.title}
            className="w-full h-full rounded-2vh"
          />
        </Flex>
      </FlexFull>
    </ScrollTransition>
  );
}
