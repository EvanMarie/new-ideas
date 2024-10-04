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
import Text from "~/buildingBlockComponents/text";

export default function BlogIndexCard({
  blog,
  index,
}: {
  blog: BlogPost;
  index: number;
}) {
  return (
    <ScrollTransition
      delay={0.01 * (index + 0.1) + 0.1}
      type="rotate3D"
      className={`w-full lg:w-1/2 xl:w-1/3 rounded-none py-0.5vh px-1vh sm:py-0.7vh sm:px-3vh md:px-5vh lg:p-0 lg:rounded-none`}
    >
      <NavLink to={blog.slug} key={blog.slug}>
        <HStackFull className="bg-col-300 bg-gradient-to-r from-fuchsia-300/50 via-cyan-300/50 to-purple-300/50 justify-between rounded-2.2vh lg:rounded-none border-900-md shadowNarrowNormal h-full items-center">
          <VStackFull
            className="p-1vh h-full justify-between"
            gap="gap-0"
            align="items-start"
          >
            <span className="text-2vh text-purple-900 textGlowXs font-semibold">
              {blog.title}
            </span>
            <Text
              className="text-sm leading-tight text-slate-900"
              noOfLines={2}
            >
              {blog.summary}
            </Text>
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
              className="w-full h-full rounded-tl-none rounded-bl-none rounded-tr-2vh rounded-br-2vh lg:rounded-none"
            />
          </Flex>
        </HStackFull>{" "}
      </NavLink>
    </ScrollTransition>
  );
}
