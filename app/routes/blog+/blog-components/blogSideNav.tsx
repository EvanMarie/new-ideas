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
      className="hidden xl:flex w-25vw h-95.5vh absolute top-0 right-0 bottom-0 overflow-hidden p-1.2vh z-100 bg-indigo-900/90 rounded-2vh border-500-md"
      type="fadeSlideInRight"
      delay={0.5}
    >
      <FlexFull>
        <VStackFull>
          <FlexFull className="text-col-500 textShadow justify-center pb-0.5vh">
            DarkViolet.ai Blog
          </FlexFull>
          <FlexFull className="bg-slate-950/50 overflow-hidden border-550-md rounded-2vh">
            <FlexFull className="h-89vh overflow-y-auto overflow-x-hidden">
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
                            className="absolute inset-0 bg-fuchsia-900/60 shadowNarrowTight rounded-none"
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
                                ? "text-col-500 subtleTextShadow"
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
