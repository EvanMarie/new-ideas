import { useParams } from "@remix-run/react";
import { blogArray, BlogPost } from "./blog-posts/blogsArray";
import BlogDisplay from "./blog-components/blogDisplay";

export default function BlogSlug() {
  const blogSlug = useParams().blogSlug;
  const blog = blogArray.find((blog) => blog.slug === blogSlug);
  return <BlogDisplay blog={blog as BlogPost} />;
}
