import { FlexFull, VStackFull } from "~/buildingBlockComponents/mainContainers";
import { BlogPost } from "../blog-posts/blogsArray";

export default function BlogDisplay({ blog }: { blog: BlogPost }) {
  return (
    <FlexFull className="pt-2vh">
      <VStackFull className="h-fit py-1vh pb-4vh">
        <FlexFull>{blog.title}</FlexFull>
        <FlexFull className="p-1vh">
          <FlexFull className="shadowNarrowTight">
            <VStackFull
              gap="gap-1.5vh"
              className="bg-indigo-950 p-1vh sm:px-2vh border-900-md insetShadow6xl"
              align="items-start"
            >
              {blog.paragraphs}
            </VStackFull>
          </FlexFull>
        </FlexFull>
      </VStackFull>
    </FlexFull>
  );
}
