import { ScrollTransition } from "~/mainDesignComponents/scrollTransition";
import { BlogPost } from "../blog-posts/blogsArray";
import { NavLink } from "@remix-run/react";
import { motion } from "framer-motion";
import {
  Box,
  Flex,
  HStack,
  HStackFull,
  VStackFull,
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
      delay={0.01 * (index + 0.1) + 0.1}
      type="rotate3D"
      className={`w-full lg:w-1/2 xxl:w-1/3 py-0.5vh px-3vh sm:py-0.7vh sm:px-5vh md:px-8vh lg:p-1.3vh rounded-2.2vh`}
    >
      <NavLink to={blog.slug} key={blog.slug} className="rounded-2.2vh">
        <motion.div
          className="w-full flex bg-indigo-950 bg-gradient-to-r from-fuchsia-500/10 via-fuchsia-500/10 to-fuchsia-500/10 justify-between h-full items-center hover:cursor-pointer rounded-[2.2vh]"
          layout
          style={{
            border: "0.2vh solid #000",
            boxShadow: "0 0 1vh rgba(49, 46, 129, 0.5)",
            padding: "1vh 0",
            zIndex: 10,
            borderRadius: "2.2vh",
          }}
          whileHover={{
            scale: 1.06,
            transition: { duration: 0.3 },
            borderRadius: "4vh",
            boxShadow: boxGlow,
            border: "0.2vh solid #000",
            backgroundColor: indigo900,
            padding: "1vh 0",
            zIndex: 50,
          }}
        >
          <VStackFull>
            <HStackFull>
              <VStackFull
                className="py-1vh px-2vh h-full justify-between"
                gap="gap-1vh"
                align="items-start"
              >
                <span className="text-2vh text-fuchsia-200 textShadow font-semibold leading-tight">
                  {blog.title}
                </span>
                <Text
                  className="text-sm leading-tight text-white subtleTextShadow"
                  noOfLines={2}
                >
                  {blog.summary}
                </Text>
              </VStackFull>
              <Flex className="w-16vh h-16vh flex-shrink-0 hidden sm:flex">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full rounded-full fade-outer z-20"
                />
              </Flex>
            </HStackFull>
            {/* *********************** AUTHOR AND DATE *********************** */}
            <HStackFull
              className="items-center hover:cursor-pointer justify-between px-2vh"
              gap="gap-1.5vh"
            >
              <HStack className="items-center gap-1vh">
                <Box className="rounded-full  border-900-sm shadowNarrowNormal">
                  <Image
                    alt={blog.title}
                    src={blog.avatar}
                    className="w-3vh h-3vh sm:w-4vh sm:h-4vh rounded-full"
                  />
                </Box>
                <span className="text-1.7vh sm:text-2vh text-cyan-200 textShadow">
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
    </ScrollTransition>
  );
}
