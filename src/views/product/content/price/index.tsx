import React from "react";
import { IProduct } from "../../constants";

export const ProductPrice: React.FC<{price: Pick<IProduct, "price" | "discountlessPrice">}> = (props)=>{
  const {price, discountlessPrice} = props.price;

  return (
    <div className="product__price">
      {discountlessPrice && <span className="product__price__discountless">9 900 ₽</span>}
      <span>6 000 ₽</span>
    </div>
  )
}