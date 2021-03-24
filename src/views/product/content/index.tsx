import React from "react";
import ReactImageGallery from "react-image-gallery";
import { GalleryImages, ImageGallerySettings } from "./constants";
import { ProductDeliveryButton } from "./delivery";
import { ProductPrice } from "./price";
import { ProductSizePicker } from "./size-picker";

export const ProductContent:React.FC<{}> = ()=>{
  return (
    <div className="product__container">
			<div className="product__column">
				<ReactImageGallery items={GalleryImages} {...ImageGallerySettings} />
			</div>
      <div className="product__column">
				<div className="product__name"><span>Paul & Shark</span></div>
        <div className="product__category"><span>Кофта</span></div>
        <ProductPrice />
        <ProductSizePicker />
        <div className="product__cart__button">
          <span>Добавить в корзину</span>
        </div>
        <div className="product__description">
          {
          "Рубашка Tommy Hillfiger\n\
          - происхождение бренда: США\n\
          - производство: Маврикий\n\
          - материал: 98% хлопок, 2% эластан\n\
          - особенности модели: regular fit, слегка приталенный крой, рубашка застегивается на пуговицы\n\
          - цвет: серый/синий/белый/желтый\n\
          - рекомендации по уходу: стирать при температуре до 30, гладить при температуре до 110, отбеливать без применения хлора, допускается машинная сушка при низкой температуре и химическая чистка"
          }
        </div>
        <ProductDeliveryButton />
      </div>
    </div>
  )
}