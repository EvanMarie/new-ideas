import {
  Flex,
  FlexFull,
  Transition,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import { blogArray } from "../blog-posts/blogsArray";
import { useParams } from "@remix-run/react";
import { NavLink } from "react-router-dom";

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
      className="hidden xl:flex w-25vw h-95.5vh bg-indigo-950/30 absolute top-0 right-0 bottom-0 overflow-hidden p-1vh z-100"
      type="fadeSlideInRight"
      delay={0.5}
    >
      <VStackFull>
        <FlexFull className="text-col-500 textShadow justify-center pb-0.5vh">
          Blog List
        </FlexFull>
        <FlexFull className="bg-slate-950/50 overflow-hidden border-500-md">
          <FlexFull className="h-89vh overflow-y-auto overflow-x-hidden">
            <VStackFull align="items-start" className="h-fit">
              {blogList.map(
                (blog: { title: string; slug: string }, index: number) => (
                  <Transition
                    key={blog.slug}
                    delay={0.5 + 0.05 * (index + 0.1)}
                    type="rotate3D"
                    className={`w-full rounded-none ${
                      currentBlogSlug === blog.slug
                        ? "bg-fuchsia-900/60"
                        : "border-transparent"
                    } px-1vh py-0.3vh`}
                  >
                    <NavLink
                      className="w-full h-full flex"
                      to={`/blog/${blog.slug}`}
                    >
                      <span
                        key={blog.slug}
                        className={`text-sm w-full ${
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
            </VStackFull>
          </FlexFull>
        </FlexFull>
      </VStackFull>
    </Transition>
  );
}
