import React from "react";

export const ProductSizePicker: React.FC<{}> = ()=>{
  return (
    <div className="product__size__picker">
      <div className="product__size__picker__header">
        <span>Выберите размер</span>
        <span className="product__size__picker__header__how_to">Как выбрать</span>
      </div>
      <div className="product__size__picker__table">
        <div><span>S</span></div>
        <div><span>M</span></div>
        <div><span>L</span></div>
        <div><span>XL</span></div>
        <div><span>XXL</span></div>
      </div>
    </div>
  );
}