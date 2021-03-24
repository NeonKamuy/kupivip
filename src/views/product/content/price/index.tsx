import React from "react";

export const ProductPrice: React.FC<{}> = ()=>{
  return (
    <div className="product__price">
      <span className="product__price__old">9 900 ₽</span>
      <span>6 000 ₽</span>
    </div>
  )
}