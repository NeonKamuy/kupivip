// ReactImageGallery Component Settings
export const ImageGallerySettings = {
  showPlayButton: false,
}

/******************* Interfaces ********************/
// Product Gallery Image Type
export interface IGalleryImage {
  original: string,
  thumbnail: string
}

// Product Full Information
export interface IProduct extends IProductDescription {
  sku: string;
  slug: string;
  price: number;
  discountlessPrice: number | null;
  images: string[];
  sizes: {id: number, name: string}[];
}

// Product Description
export interface IProductDescription {
  brand: string;
  title: string;
  color: string;
  madeIn: string;
  material: string;
  brandOrigin: string;
}

// Category Contents Element
export type ICategoryContent = Pick<IProduct, "slug" | "title" | "price" | "discountlessPrice" | "brand" | "sizes">;