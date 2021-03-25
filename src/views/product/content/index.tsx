import React from "react";
import ReactImageGallery from "react-image-gallery";
import { useProduct } from "../../../controllers/categories/hooks";
import { ImageGallerySettings, IProduct } from "../constants";
import { ProductDeliveryButton } from "./delivery";
import { ProductDescription } from "./description";
import { useGalleryImages } from "./hooks";
import { ProductPrice } from "./price";
import { ProductSizePicker } from "./size-picker";

export const ProductContent:React.FC<{product: IProduct}> = (props)=>{
  const {product} = props;
  const galleryImages = useGalleryImages(product.images);

  return (
    <div className="product__container">
			<div className="product__column left">
				<ReactImageGallery items={galleryImages} {...ImageGallerySettings} />
			</div>
      <div className="product__column right">
				<div className="product__name"><span>{product.brand}</span></div>
        <div className="product__category"><span>{product.title}</span></div>
        <ProductPrice price={product} />
        <ProductSizePicker sizes={product.sizes} />
        <div className="product__cart__button">
          <span>Добавить в корзину</span>
        </div>
        <ProductDescription description={product} />
        <ProductDeliveryButton />
      </div>
    </div>
  )
}