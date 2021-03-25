import React from "react";
import { IProductDescription } from "../../constants";

export const ProductDescription: React.FC<{description: IProductDescription}> = (props) => {
  const {brand, title, color, material, madeIn, brandOrigin} = props.description;

  return (
    <div className="product__description">
        <div>{title + " " + brand}</div>
        <div>{wBullet("происхождение бренда", brandOrigin)}</div>
        <div>{wBullet("производство", madeIn)}</div>
        <div>{wBullet("материал", material)}</div>
        <div>{wBullet("цвет", color)}</div>
    </div>
  );
}

function wBullet(...strings: string[]): string {
  return "- " + strings.join(": ");
}