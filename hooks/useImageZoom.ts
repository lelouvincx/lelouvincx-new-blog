import { ImageZoomContext } from "provider/image-zoom";
import { useContext } from "react";

export const useImageZoom = () => useContext(ImageZoomContext)