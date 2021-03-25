import React from "react";
import { IProductDescription } from "../../constants";

export const ProductDescription: React.FC<{description: IProductDescription}> = (props) => {
  const {brand, title, color, material, madeIn, brandOrigin} = props.description;

  return (
    <div className="product__description">
        <span>{title + brand}</span><br />
        <span>{wBullet("происхождение бренда", brandOrigin)}</span><br />
        <span>{wBullet("производство", madeIn)}</span><br />
        <span>{wBullet("материал", material)}</span><br />
        <span>{wBullet("цвет", color)}</span><br />
    </div>
  );
}

function wBullet(...strings: string[]): string {
  return "- " + strings.join(": ");
}