import React from "react";
import {
  Flex,
  FlexFull,
  Transition,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import { blogArray } from "../blog-posts/blogsArray";
import { useParams } from "@remix-run/react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogSideNav() {
  const blogList = blogArray
    .map((blog) => ({
      title: blog.title,
      slug: blog.slug,
      date: blog.date,
    }))
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      }
      if (a.date > b.date) {
        return -1;
      }
      return 0;
    });

  const currentBlogSlug = useParams().blogSlug;
  return (
    <Transition
      className="hidden xl:flex w-25vw h-95.5vh absolute top-0 right-0 bottom-0 overflow-hidden rounded-none z-100 bg-indigo-900/90 border-l-col-600 border-l-[0.2vh] border-l-solid"
      type="fadeSlideInRight"
      delay={0.5}
    >
      <FlexFull>
        <VStackFull className="bg-fuchsia-900">
          <FlexFull className="text-col-500 textShadow justify-center pb-0.5vh bg-slate-950/30 rounded-none">
            DarkViolet.ai Blog
          </FlexFull>
          <FlexFull className="bg-slate-900/80 overflow-hidden rounded-none">
            <FlexFull className="h-91.3vh overflow-y-auto overflow-x-hidden insetShadow6xl rounded-none">
              <VStackFull align="items-start" className="h-fit">
                <AnimatePresence>
                  {blogList.map(
                    (blog: { title: string; slug: string }, index: number) => (
                      <Transition
                        key={blog.slug}
                        delay={0.5 + 0.05 * (index + 0.1)}
                        type="rotate3D"
                        className="w-full rounded-none relative"
                      >
                        {currentBlogSlug === blog.slug && (
                          <motion.div
                            layoutId="active-blog-background"
                            className="absolute inset-0 bg-col-400 shadowNarrowTight rounded-none"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 30,
                              mass: 1,
                            }}
                          />
                        )}
                        <NavLink
                          className={`w-full h-full flex px-1vh py-0.5vh ${
                            currentBlogSlug !== blog.slug
                              ? "hover:bg-fuchsia-400/20 transition-300 rounded-none"
                              : ""
                          }`}
                          to={`/blog/${blog.slug}`}
                        >
                          <span
                            className={`text-sm w-full relative z-10 ${
                              currentBlogSlug === blog.slug
                                ? "text-col-900 font-semibold lightTextShadow"
                                : ""
                            }`}
                          >
                            {blog.title}
                          </span>
                        </NavLink>
                      </Transition>
                    )
                  )}
                </AnimatePresence>
              </VStackFull>
            </FlexFull>
          </FlexFull>
        </VStackFull>
      </FlexFull>
    </Transition>
  );
}
