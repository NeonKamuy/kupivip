import { __CONFIG__ } from "../../../assets/config";
import { IGalleryImage, IProduct } from "../constants"

export function useGalleryImages(product: Pick<IProduct, "sku"|"images">): IGalleryImage[] {
  const galleryImages: IGalleryImage[] = [];

  for(const image of product.images){
    galleryImages.push({
      original: `${__CONFIG__.serverURL}/static/images/${product.sku}/${image}.jpg`,
      thumbnail: `${__CONFIG__.serverURL}/static/images/${product.sku}/${image}---300x300.jpg`
    })
  }

  return galleryImages;
}