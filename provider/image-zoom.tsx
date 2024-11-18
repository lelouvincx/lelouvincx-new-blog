import { createContext, ReactNode, useState } from "react";

interface IImageZoomContext {
    isZoomed: boolean;
    imageSrc: string;
    setIsZoomed: (isZoomed: boolean, imageSrc: string) => void;
}

export const ImageZoomContext = createContext<IImageZoomContext>({
    isZoomed: false,
    imageSrc: "",
    setIsZoomed: () => {},
});

export default function ImageZoomProvider({ children }: { children: ReactNode }) {
    const [isZoomed, setIsZoomed] = useState(false);
    const [imageSrc, setImageSrc] = useState("");

    const onImageZoom = (isZoomed: boolean, imageSrc: string) => {
        setIsZoomed(isZoomed);
        setImageSrc(imageSrc);
    }

    return (
        <ImageZoomContext.Provider value={{ isZoomed, imageSrc, setIsZoomed: onImageZoom }}>
            {children}
        </ImageZoomContext.Provider>
    );
}