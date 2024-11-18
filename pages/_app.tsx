import ImageZoomProvider from "provider/image-zoom";

export default function MyApp({ Component, pageProps }) {
  return (
    <ImageZoomProvider>
        <Component {...pageProps} />
    </ImageZoomProvider>
    )
}