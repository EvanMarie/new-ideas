import {
  Box,
  Flex,
  FlexFull,
  HStack,
  HStackFull,
  Transition,
  VStackFull,
  Wrap,
} from "~/buildingBlockComponents/mainContainers";
import { BlogPost } from "../blog-posts/blogsArray";
import Image from "~/buildingBlockComponents/image";
import FormatDate from "~/utils/formatDate";
import Text from "~/buildingBlockComponents/text";

export default function BlogDisplay({ blog }: { blog: BlogPost }) {
  return (
    <Transition className="w-full" type="fadeSlideInLeft" delay={0.4}>
      <VStackFull className="h-fit">
        <FlexFull className="shadowNarrowTight">
          <VStackFull className="bg-fuchsia-950 bg-gradient-to-r from-slate-950/40 via-slate-950/20 to-slate-950/40 pt-10vh px-1.5vh pb-5vh sm:px-2.5vh md:px-3vh lg:px-4vh xl:px-6vh xxl:px-8vh border-900-md insetShadow6xl rounded-none xl:w-75vw">
            {/* *********************** HEADER CONTENT *********************** */}
            <FlexFull className="p-1vh justify-center lg:pt-3vh xl:pt-4vh">
              <VStackFull
                className="bg-indigo-950/60 p-1vh border-700-md insetShadow6xl lg:max-w-90vh lg:py-2vh"
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

                {/* *********************** BLOG TAGS *********************** */}
                <Wrap className="w-full justify-evenly pt-0.5vh pb-1vh gap-0.5vh hover:cursor-pointer ">
                  {blog.tags.map((tag) => (
                    <Box
                      key={tag}
                      className="rounded-2vh bg-slate-900/80 text-col-400 px-1vh pb-0.2vh textShadow border-470-sm shadowNarrowTight text-xs sm:text-sm md:text-md hover:cursor-pointer "
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
                    <span className="text-md md:text-2vh xl:text-lg text-col-500 textShadow">
                      {blog.author}
                    </span>
                  </HStack>
                  <span className="text-md md:text-2vh xl:text-lg textShadow text-col-500">
                    {FormatDate({ inputDate: blog.date })}
                  </span>
                </HStackFull>
                <FlexFull className="px-1vh sm:px-2vh md:px-3vh pb-1vh">
                  <Text className="text-md xl:text-lg">{blog.summary}</Text>
                </FlexFull>
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
