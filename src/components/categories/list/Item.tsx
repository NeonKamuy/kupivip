import React from "react";
import { __CONFIG__ } from "../../../assets/config";
import { ICategoryListItem } from "../interfaces";

export const CategoryListItem: React.FC<ICategoryListItem> = (props) => {
  const {categoryName,slug} = props;

  return (
    <li className="cats__item">
      <a href={`${__CONFIG__.backendURL}/categories/${slug}`} className="cats__link">
        {categoryName}
      </a>
    </li>
  );
}