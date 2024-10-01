import { useState, useEffect, useRef } from "react";

export default function OrientationImage({
  src,
  alt,
  className,
  portraitMaxHeight = "75vh",
  portraitMaxWidth = "100%",
  landscapeMaxHeight = "100%",
  landscapeMaxWidth = "100%",
  squareMaxHeight = "100%",
  squareMaxWidth = "100%",
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
}) {
  const [imageStyles, setImageStyles] = useState({});
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleLoad = () => {
      if (imgRef.current) {
        const { naturalWidth, naturalHeight } = imgRef.current;

        if (naturalWidth > naturalHeight) {
          setImageStyles({
            width: "100%",
            height: "auto",
            maxHeight: landscapeMaxHeight,
            maxWidth: landscapeMaxWidth,
          });
        } else if (naturalWidth < naturalHeight) {
          setImageStyles({
            width: "auto",
            height: "100%",
            maxHeight: portraitMaxHeight,
            maxWidth: portraitMaxWidth,
          });
        } else {
          setImageStyles({
            width: "100%",
            height: "100%",
            maxHeight: squareMaxHeight,
            maxWidth: squareMaxWidth,
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
