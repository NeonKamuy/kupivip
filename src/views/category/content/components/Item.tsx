import React from "react";
import { Link } from "react-router-dom";
import { ICategoryContent } from "../../../product/constants";

export const CategoryContentItem: React.FC<{ item: ICategoryContent }> = ({
    item,
}) => {
    return (
        <Link to={`/products/${item.slug}`} className="category__item">
            <div className="category__item__image" />
            <div>
                {item.title} {item.brand}
            </div>
            <div className="category__item__price__container">
                <span className="category__item__price discountless">
                    {item.discountlessPrice &&
                        item.discountlessPrice.toLocaleString("ru-RU") + " руб."}
                </span>
                <span className="category__item__price">
                    {item.price.toLocaleString("ru-RU")} руб.
                </span>
            </div>
        </Link>
    );
};
