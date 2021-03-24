// Images Dataset
export const GalleryImages: IGalleryImage[] = [
  {
    original: 'https://urbanboss.ru/wp-content/uploads/2019/09/IMG_1713-copy.jpg',
    thumbnail: 'https://urbanboss.ru/wp-content/uploads/2019/09/IMG_1713-copy-150x150.jpg',
  },
  {
    original: 'https://urbanboss.ru/wp-content/uploads/2019/09/IMG_1716-copy.jpg',
    thumbnail: 'https://urbanboss.ru/wp-content/uploads/2019/09/IMG_1716-copy-150x150.jpg',
  },
  {
    original: 'https://urbanboss.ru/wp-content/uploads/2019/09/IMG_1726-copy.jpg',
    thumbnail: 'https://urbanboss.ru/wp-content/uploads/2019/09/IMG_1726-copy-150x150.jpg',
  },
];

// ReactImageGallery Component Settings
export const ImageGallerySettings = {
  showPlayButton: false,
}

/******************* Interfaces ********************/
export interface IGalleryImage {
  original: string,
  thumbnail: string
}