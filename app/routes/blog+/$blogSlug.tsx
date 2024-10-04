import { useParams } from "@remix-run/react";
import { blogArray } from "./blog-posts/blogsArray";

export default function BlogSlug() {
  const blogSlug = useParams().blogSlug;
  const blog = blogArray.find((blog) => blog.slug === blogSlug);
  return <></>;
}
