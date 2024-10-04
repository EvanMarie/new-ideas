import { ScrollTransition } from "~/mainDesignComponents/scrollTransition";
import { BlogPost } from "../blog-posts/blogsArray";
import { NavLink } from "@remix-run/react";
import {
  Box,
  Flex,
  FlexFull,
  HStackFull,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import Image from "~/buildingBlockComponents/image";

export default function BlogIndexCard({
  blog,
  index,
}: {
  blog: BlogPost;
  index: number;
}) {
  const lgScreenWidths = [
    "lg:w-65% xxl:w-35%",
    "lg:w-35% xxl:w-40%",
    "lg:w-40% xxl:w-25%",
    "lg:w-60% xxl:w-30%",
    "lg:w-55% xxl:w-30%",
    "lg:w-45% xxl:w-30%",
    "lg:w-35% xxl:w-35%",
    "lg:w-65% xxl:w-30%",
    "lg:w-50% xxl:w-35%",
    "lg:w-50% xxl:w-30%",
    "lg:w-40% xxl:w-35%",
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
      className={`w-full rounded-none ${widthClass} p-0.5vh`}
    >
      <NavLink to={blog.slug} key={blog.slug}>
        <HStackFull className="bg-col-300 bg-gradient-to-r from-fuchsia-300/50 via-cyan-300/50 to-purple-300/50 justify-between rounded-2.2vh border-900-md shadowNarrowNormal h-full items-center">
          <VStackFull className="p-1vh h-full justify-between" gap="gap-0">
            <span className="text-2vh text-slate-950 lightTextShadow font-semibold">
              {blog.title}
            </span>
            <span className="text-xs leading-tight text-slate-900">
              {blog.summary}
            </span>
            <HStackFull className="items-center" gap="gap-1.5vh">
              <Box className="rounded-full  border-900-sm shadowNarrowNormal">
                <Image
                  alt={blog.title}
                  src={blog.avatar}
                  className="w-4vh h-4vh rounded-full"
                />
              </Box>
              <span className="text-2vh text-slate-900 lightTextShadow">
                {blog.author}
              </span>
            </HStackFull>
          </VStackFull>

          <Flex className="w-15vh h-15vh flex-shrink-0">
            <Image
              src={blog.image}
              alt={blog.title}
              className="w-full h-full rounded-2vh"
            />
          </Flex>
        </HStackFull>{" "}
      </NavLink>
    </ScrollTransition>
  );
}
