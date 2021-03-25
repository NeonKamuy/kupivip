import React from "react";
import { Link } from "react-router-dom";
import { __CONFIG__ } from "../../../assets/config";
import { ICategoryListItem } from "../interfaces";

export const CategoryListItem: React.FC<ICategoryListItem> = (props) => {
  const {categoryName,slug} = props;

  return (
    <li className="cats__item">
      <Link to={`/categories/${slug}`} className="cats__link">
        {categoryName}
      </Link>
    </li>
  );
}