// ReactImageGallery Component Settings
export const ImageGallerySettings = {
  showPlayButton: false,
}

/******************* Interfaces ********************/
export interface IGalleryImage {
  original: string,
  thumbnail: string
}

export interface IProduct extends IProductDescription {
  slug: string;
  price: number;
  discountlessPrice: number | null;
  images: string[];
  sizes: {id: number, name: string}[];
}

export interface IProductDescription {
  brand: string;
  title: string;
  color: string;
  madeIn: string;
  material: string;
  brandOrigin: string;
}