import { useState, useEffect, useRef } from "react";
import { Transition } from "~/buildingBlockComponents/mainContainers";

export default function OrientationImage({
  src,
  alt,
  className,
  portraitMaxHeight = "90vh",
  portraitMaxWidth = "65vw",
  landscapeMaxHeight = "65vh",
  landscapeMaxWidth = "90vw",
  squareMaxHeight = "75vh",
  squareMaxWidth = "75vw",
  portraitObjectFit = "contain",
  landscapeObjectFit = "contain",
  squareObjectFit = "contain",
}: {
  src: string;
  alt: string;
  className?: string;
  portraitMaxHeight?: string;
  portraitMaxWidth?: string;
  landscapeMaxHeight?: string;
  landscapeMaxWidth?: string;
  squareMaxHeight?: string;
  squareMaxWidth?: string;
  portraitObjectFit?: "contain" | "cover";
  landscapeObjectFit?: "contain" | "cover";
  squareObjectFit?: "contain" | "cover";
}) {
  const [imageStyles, setImageStyles] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [aspectRatio, setAspectRatio] = useState("1/1");
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      const { naturalWidth, naturalHeight } = img;
      const aspectRatio = naturalWidth / naturalHeight;
      setAspectRatio(`${naturalWidth}/${naturalHeight}`);

      if (aspectRatio > 0.9 && aspectRatio < 1.1) {
        // SQUARE IMAGES
        setImageStyles({
          maxHeight: squareMaxHeight,
          maxWidth: squareMaxWidth,
          objectFit: squareObjectFit,
        });
      } else if (naturalWidth > naturalHeight) {
        // LANDSCAPE IMAGES
        setImageStyles({
          maxHeight: landscapeMaxHeight,
          maxWidth: landscapeMaxWidth,
          objectFit: landscapeObjectFit,
        });
      } else {
        // PORTRAIT IMAGES
        setImageStyles({
          maxHeight: portraitMaxHeight,
          maxWidth: portraitMaxWidth,
          objectFit: portraitObjectFit,
        });
      }
      setIsLoading(false);
    };

    return () => {
      img.onload = null;
    };
  }, [
    src,
    landscapeMaxHeight,
    landscapeMaxWidth,
    portraitMaxHeight,
    portraitMaxWidth,
    squareMaxHeight,
    squareMaxWidth,
    landscapeObjectFit,
    portraitObjectFit,
    squareObjectFit,
  ]);

  const skeletonClass = `bg-gray-200 animate-pulse ${className} text-transparent`;

  return (
    <>
      <Transition
        className={`inline-block ${className} h-fit`}
        style={{ aspectRatio }}
      >
        {isLoading ? (
          <div
            className={skeletonClass}
            style={{
              width: "100%",
              height: "100%",
              ...imageStyles,
              minHeight: "40vh",
              minWidth: "40vw",
            }}
          >
            This
          </div>
        ) : (
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            className="block w-full h-full"
            style={imageStyles}
          />
        )}
      </Transition>
    </>
  );
}
