import React from "react";
import { IProduct } from "../../constants";

export const ProductSizePicker: React.FC<{sizes: IProduct["sizes"]}> = (props)=>{
  const {sizes} = props;

  return (
    <div className="product__size__picker">
      <div className="product__size__picker__header">
        <span>Выберите размер</span>
        <span className="product__size__picker__header__how_to">Как выбрать</span>
      </div>
      <div className="product__size__picker__table">
        {sizes.map(e => <div className="product__size__picker__table__row"><span>{e.name}</span></div>)}
      </div>
    </div>
  );
}