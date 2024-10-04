import { FlexFull, VStackFull } from "~/buildingBlockComponents/mainContainers";
import { BlogPost } from "../blog-posts/blogsArray";

export default function BlogDisplay({ blog }: { blog: BlogPost }) {
  return (
    <FlexFull className="pt-2vh">
      <VStackFull className="h-fit">
        <FlexFull className="shadowNarrowTight">
          <VStackFull className="bg-fuchsia-950 bg-gradient-to-r from-slate-950/40 via-slate-950/20 to-slate-950/40 pt-1vh px-1.5vh pb-5vh sm:px-2vh border-900-md insetShadow6xl rounded-none">
            <FlexFull>{blog.title}</FlexFull>
            <VStackFull gap="gap-1.5vh" align="items-start">
              {blog.paragraphs}
            </VStackFull>
          </VStackFull>
        </FlexFull>
      </VStackFull>
    </FlexFull>
  );
}
