import { useState, useEffect, useRef } from "react";

export default function OrientationImage({
  src,
  alt,
  className,
  portraitMaxHeight = "75vh",
  portraitMaxWidth = "75vw",
  landscapeMaxHeight = "75vh",
  landscapeMaxWidth = "75vw",
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
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleLoad = () => {
      if (imgRef.current) {
        const { naturalWidth, naturalHeight } = imgRef.current;

        if (naturalWidth > naturalHeight) {
          // LANDSCAPE IMAGES
          setImageStyles({
            width: "100%",
            height: "auto",
            maxHeight: landscapeMaxHeight,
            maxWidth: landscapeMaxWidth,
            objectFit: landscapeObjectFit,
          });
        } else if (naturalWidth < naturalHeight) {
          // PORTRAIT IMAGES
          setImageStyles({
            width: "auto",
            height: "100%",
            maxHeight: portraitMaxHeight,
            maxWidth: portraitMaxWidth,
            objectFit: portraitObjectFit,
          });
        } else {
          // SQUARE IMAGES
          setImageStyles({
            width: "100%",
            height: "100%",
            maxHeight: squareMaxHeight,
            maxWidth: squareMaxWidth,
            objectFit: squareObjectFit,
          });
        }
      }
    };

    if (imgRef.current) {
      // In case the image is already loaded
      if (imgRef.current.complete) {
        handleLoad();
      } else {
        imgRef.current.addEventListener("load", handleLoad);
      }
    }

    return () => {
      imgRef.current?.removeEventListener("load", handleLoad);
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

  return (
    <div className={className} style={{ display: "inline-block" }}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        style={{
          ...imageStyles,
          display: "block",
        }}
      />
    </div>
  );
}
