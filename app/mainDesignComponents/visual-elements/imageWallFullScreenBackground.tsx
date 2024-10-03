import { Box, FlexFull, Wrap } from "~/buildingBlockComponents/mainContainers";
import ImageWall from "~/mainDesignComponents/visual-elements/imageWall";

export default function ImageWallFullScreenBackground({
  images,
  overlay = "bg-slate-950/80 bg-gradient-to-bl from-indigo-900/20 via-violet-900/20 to-indigo-900/20",
  overflow = "overflow-y-auto",
}: {
  images: string[];
  overlay?: string;
  overflow?: string;
}) {
  return (
    <>
      <FlexFull className="fixed inset-0 h-100svh">
        <ImageWall imageArray={images} />
        <FlexFull
          className={`justify-center h-100svh items-center fixed ${overflow} ${overlay} z-10 text-transparent`}
        >
          This
        </FlexFull>
      </FlexFull>
    </>
  );
}
