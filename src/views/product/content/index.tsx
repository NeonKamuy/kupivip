import React from "react";
import { IProduct } from "../constants";
import { ProductDeliveryButton } from "./delivery";
import { ProductDescription } from "./description";
import { ProductGallery } from "./gallery";
import { useGalleryImages } from "./hooks";
import { ProductPrice } from "./price";
import { ProductSizePicker } from "./size-picker";

export const ProductContent: React.FC<{ product: IProduct }> = (props) => {
    const { product } = props;
    const galleryImages = useGalleryImages(product);

    return (
        <div className="product__container">
            <div className="product__column left">
                <ProductGallery images={galleryImages} />
            </div>
            <div className="product__column right">
                <div className="product__name">
                    <span>{product.brand}</span>
                </div>
                <div className="product__category">
                    <span>{product.title}</span>
                </div>
                <ProductPrice price={product} />
                <ProductSizePicker sizes={product.sizes} />
                <div className="product__cart__button">
                    <span>Добавить в корзину</span>
                </div>
                <ProductDescription description={product} />
                <ProductDeliveryButton />
            </div>
        </div>
    );
};
