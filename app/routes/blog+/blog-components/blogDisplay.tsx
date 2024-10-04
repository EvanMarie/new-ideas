import { FlexFull } from "~/buildingBlockComponents/mainContainers";
import { BlogPost } from "../blog-posts/blogsArray";

export default function BlogDisplay({ blog }: { blog: BlogPost }) {
  return <FlexFull>{blog.title}</FlexFull>;
}
