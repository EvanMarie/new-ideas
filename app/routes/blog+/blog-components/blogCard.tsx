import { ScrollTransition } from "~/mainDesignComponents/scrollTransition";
import { BlogPost } from "../blog-posts/blogsArray";
import { NavLink } from "@remix-run/react";
import { motion } from "framer-motion";
import {
  Box,
  Flex,
  FlexFull,
  HStack,
  HStackFull,
  VStackFull,
  Wrap,
} from "~/buildingBlockComponents/mainContainers";
import Image from "~/buildingBlockComponents/image";
import Text from "~/buildingBlockComponents/text";
import FormatDate from "~/utils/formatDate";

export default function BlogIndexCard({
  blog,
  index,
}: {
  blog: BlogPost;
  index: number;
}) {
  const boxGlow =
    "#000 0.05vh 0.05vh 0.05vh, black 0px 0px 0.1vh, #FFF 0px 0px 0.05vh, #FFF 0px 0px 0.1vh, #FFF 0px 0px 0.15vh, #FFF 0px 0px 0.2vh, #FFF 0px 0px 0.25vh, 0.8vh 0.2vh 0.6vh rgba(0,0,0,0)";
  const indigo900 = "#312e81"; // theme('colors.indigo.900')
  return (
    <ScrollTransition
      type="rotate3D"
      className={`w-full lg:w-1/2 xxl:w-1/3 py-0.5vh px-3vh sm:py-0.7vh sm:px-5vh md:px-8vh lg:px-1.3vh rounded-2.2vh `}
    >
      <motion.div className="my-1.3vh hover:my-0 hover:py-1.3vh transition-300">
        <NavLink
          to={blog.slug}
          key={blog.slug}
          className="rounded-2.2vh hover:cursor-pointer "
        >
          <motion.div
            className="w-full flex bg-indigo-950 bg-gradient-to-r from-fuchsia-500/10 via-fuchsia-500/10 to-fuchsia-500/10 justify-between items-center hover:cursor-pointer rounded-[2.2vh] group h-full"
            layout
            style={{
              border: "0.2vh solid #000",
              boxShadow: "0.5vh 0.5vh 0.5vh rgba(0, 0, 100, 0.9)",
              padding: "1vh 0",
              zIndex: 0,
              borderRadius: "2.2vh",
            }}
            whileHover={{
              scale: 1.06,
              transition: { duration: 0.3 },
              borderRadius: "4vh",
              border: "0.13vh solid cyan",
              backgroundColor: indigo900,
              padding: "1vh 0",
              zIndex: 50,
            }}
          >
            <VStackFull>
              {/* *********************** TITLE AND IMAGE *********************** */}
              <HStackFull>
                <VStackFull
                  className="px-2vh h-full justify-between transition-300"
                  gap="gap-1vh"
                  align="items-start"
                >
                  <HStackFull className="justify-between items-center gap-1vh hover:cursor-pointer ">
                    <span
                      className="text-2vh sm:text-2.3vh text-fuchsia-200 textShadow font-semibold leading-tight"
                      style={{ lineHeight: 1.4 }}
                    >
                      {blog.title}
                    </span>
                    <Flex className="w-6vh h-6vh sm:w-8vh sm:h-8vh flex-shrink-0 hover:cursor-pointer ">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full rounded-full fade-outer z-20"
                      />
                    </Flex>
                  </HStackFull>
                  <Text
                    className="text-sm text-white subtleTextShadow hover:cursor-pointer "
                    noOfLines={2}
                    style={{ lineHeight: 1.6 }}
                  >
                    {blog.summary}
                  </Text>
                </VStackFull>
              </HStackFull>
              {/* *********************** TAGS *********************** */}
              <Wrap className="w-full justify-evenly pt-0.5vh pb-1vh gap-0.5vh hover:cursor-pointer ">
                {blog.tags.map((tag) => (
                  <Box
                    key={tag}
                    className="rounded-2vh bg-slate-900/80 text-fuchsia-400 px-1vh pb-0.2vh textShadow border-900-md shadowNarrowTight text-xs sm:text-sm hover:cursor-pointer "
                  >
                    {tag}
                  </Box>
                ))}
              </Wrap>
              {/* *********************** AUTHOR AND DATE *********************** */}
              <HStackFull
                className="items-center hover:cursor-pointer justify-between px-2vh"
                gap="gap-1.5vh"
              >
                <HStack className="items-center gap-1vh">
                  <Box className="rounded-full border-900-sm shadowNarrowNormal">
                    <Image
                      alt={blog.title}
                      src={blog.avatar}
                      className="w-3vh h-3vh sm:w-4vh sm:h-4vh rounded-full"
                    />
                  </Box>
                  <span className="text-1.7vh sm:text-2vh text-col-500 textShadow">
                    {blog.author}
                  </span>
                </HStack>
                <span className="text-sm text-white textShadow">
                  {FormatDate({ inputDate: blog.date })}
                </span>
              </HStackFull>
            </VStackFull>
          </motion.div>
        </NavLink>
      </motion.div>
    </ScrollTransition>
  );
}
