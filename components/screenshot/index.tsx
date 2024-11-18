import cn from "clsx";
import { useImageZoom } from "hooks/useImageZoom";
import Image from "next/image";
import Class from "./screenshot.module.css"
export function Screenshot({ src, imageName, alt, full }) {
  const { imageSrc, isZoomed, setIsZoomed } = useImageZoom();

  const onImageClick = () => {
    setIsZoomed(!isZoomed, imageName);
  }

  console.log(imageName, imageSrc, imageName === imageSrc);
  return (
      <div
        onClick={onImageClick}
        className={cn(
          "-mb-4 mt-6 flex justify-center overflow-hidden rounded-xl border dark:border-zinc-800",
          full ? "bg-white" : "bg-zinc-100",
          isZoomed && imageName === imageSrc ? Class.Zoom : "",
        )}
      >
        <Image
          src={src}
          alt={alt}
          className={cn(
            "w-auto select-none bg-white",
            full ? "" : "ring-1 ring-gray-200",
          )}
        />
      </div>
  );
}
