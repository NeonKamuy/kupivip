import { wrap } from "lodash";
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { ICategoryContent } from "../../product/constants";
import { useSizes } from "./hooks";

export const CategoryContent: React.FC<{ contents: ICategoryContent[] }> = (
    props
) => {
    const { contents } = props;
    const sizes = useSizes(contents);

    const [checkedSizes, setCheckedSizes] = useState<Set<string>>(
        new Set<string>()
    );
    const onSizeCheck = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const target = e.currentTarget;
            setCheckedSizes((checkedSizes) => {
                const newChecked = new Set([...checkedSizes, target.value]);
                checkedSizes.has(target.value) &&
                    newChecked.delete(target.value);
                return newChecked;
            });
        },
        []
    );

    return (
        <div className="category__container">
            <div className="category__column left">
                <div className="title">Размер</div>
                {sizes.map((e) => (
                    <div>
                        <input
                            type="checkbox"
                            value={e}
                            id={e}
                            checked={checkedSizes.has(e)}
                            onChange={onSizeCheck}
                        />
                        <label style={{ marginLeft: 10 }} htmlFor={e}>
                            {e}
                        </label>
                    </div>
                ))}
            </div>

            <div className="category__column right">
                {(checkedSizes.size
                    ? contents.filter((e) =>
                          e.sizes.some((e) => checkedSizes.has(e.name))
                      )
                    : contents
                ).map((e) => (
                    <Link to={`/products/${e.slug}`} className="category__item">
                            <div className="category__item__image" />
                            <div>
                                {e.title} {e.brand}
                            </div>
                            <div className="category__item__price__container">
                                <span className="category__item__price discountless">
                                    {e.discountlessPrice &&
                                        e.discountlessPrice.toLocaleString(
                                            "ru-RU"
                                        ) + " руб."}
                                </span>
                                <span className="category__item__price">
                                    {e.price.toLocaleString("ru-RU")} руб.
                                </span>
                            </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
