import React, { useCallback, useRef, useState } from "react";
import ReactImageGallery from "react-image-gallery";
import { IGalleryImage, ImageGallerySettings } from "../../constants";

export const ProductGallery: React.FC<{images: IGalleryImage[]}> = (props) => {
    const {images} = props;
    const galleryRef = useRef<ReactImageGallery>(null);
    const [, setIsFullscreen] = useState(false);

    const toggleFullscreen = useCallback(()=>{
      setIsFullscreen(isFullscreen => {
        const gallery = galleryRef.current;
        if(!gallery) return isFullscreen;

        isFullscreen ? gallery.exitFullScreen() : gallery.fullScreen();
        return !isFullscreen;
      })
    }, []);

    return (
        <ReactImageGallery
            additionalClass="product__image__gallery__root"
            items={images}
            onClick={toggleFullscreen}
            ref={galleryRef}
            {...ImageGallerySettings}
        />
    );
};
