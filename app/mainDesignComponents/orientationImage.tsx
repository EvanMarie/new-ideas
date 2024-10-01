import { useState, useEffect, useRef } from "react";

export default function OrientationImage({
  src,
  alt,
  className,
  portraitMaxHeight = "75vh",
  portraitMaxWidth,
  landscapeMaxHeight = "60vh",
  landscapeMaxWidth,
  squareMaxHeight = "75vh",
  squareMaxWidth = "100%",
  portraitObjectFit = "contain",
  landscapeObjectFit = "cover",
  squareObjectFit = "cover",
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
          setImageStyles({
            // LANDSCAPE IMAGES
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
          setImageStyles({
            // SQUARE IMAGES
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
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
      style={imageStyles}
    />
  );
}
