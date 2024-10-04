import {
  Box,
  Flex,
  FlexFull,
  HStack,
  HStackFull,
  Transition,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import { BlogPost } from "../blog-posts/blogsArray";
import Image from "~/buildingBlockComponents/image";
import FormatDate from "~/utils/formatDate";
import Divider from "~/buildingBlockComponents/divider";

export default function BlogDisplay({ blog }: { blog: BlogPost }) {
  return (
    <Transition className="w-full" type="fadeSlideInLeft" delay={0.5}>
      <VStackFull className="h-fit">
        <FlexFull className="shadowNarrowTight">
          <VStackFull className="bg-fuchsia-950 bg-gradient-to-r from-slate-950/40 via-slate-950/20 to-slate-950/40 pt-10vh px-1.5vh pb-5vh sm:px-2.5vh md:px-3vh lg:px-4vh xxl:px-6vh border-900-md insetShadow6xl rounded-none xl:w-75vw">
            {/* *********************** HEADER CONTENT *********************** */}
            <FlexFull className="p-1vh justify-center">
              <VStackFull
                className="bg-indigo-950/60 p-1vh border-700-md insetShadow6xl lg:max-w-90vh"
                gap="gap-1.5vh"
              >
                {/* *********************** TITLE *********************** */}
                <VStackFull className="px-1vh">
                  <span className="kufam-font text-col-500 text-lg md:text-xl text-center">
                    {blog.title}
                  </span>
                </VStackFull>

                {/* *********************** IMAGE *********************** */}

                <Flex className="w-80vw h-80vw sm:w-50vh sm:h-50vh flex-shrink-0 hover:cursor-pointer ">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full rounded-full fade-outer z-20"
                  />
                </Flex>
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
            </FlexFull>

            {/* *********************** BLOG CONTENT *********************** */}
            <VStackFull gap="gap-1.5vh" align="items-start">
              {blog.paragraphs}
            </VStackFull>
          </VStackFull>
        </FlexFull>
      </VStackFull>
    </Transition>
  );
}
