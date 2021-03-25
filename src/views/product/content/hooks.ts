import { __CONFIG__ } from "../../../assets/config";
import { IGalleryImage } from "../constants"

export function useGalleryImages(images: string[]): IGalleryImage[] {
  const galleryImages: IGalleryImage[] = [];

  for(const image of images){
    galleryImages.push({
      original: `${__CONFIG__.serverURL}/static/images/884B/${image}.jpg`,
      thumbnail: `${__CONFIG__.serverURL}/static/images/884B/${image}---300x300.jpg`
    })
  }

  return galleryImages;
}