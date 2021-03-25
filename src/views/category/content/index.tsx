import { wrap } from "lodash";
import React, { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ICategoryListItem } from "../../../components/header/categories/interfaces";
import { ICategoryContent } from "../../product/constants";
import { useSizes } from "./hooks";
import { Sort } from "./interfaces";

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

    const [sort, setSort] = useState<Sort>(Sort.OurChoice);
    const handleSortChange = useCallback(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            const target = e.currentTarget;
            setSort(target.value as Sort);
        },
        []
    );

    const filtered = useMemo(() => {
        const filtered = checkedSizes.size
            ? contents.filter((e) =>
                  e.sizes.some((e) => checkedSizes.has(e.name))
              )
            : contents;
        return [...filtered];
    }, [checkedSizes, contents]);

    const sorted = useMemo(() => {
        if (sort === Sort.PriceAsc) return sortByPriceAsc(filtered);
        if (sort === Sort.PriceDesc) return sortByPriceDesc(filtered);

        return [...filtered];
    }, [sort, filtered]);

    return (
        <div className="category__container">
            <div className="select">
                <select onChange={handleSortChange}>
                    <option selected disabled>
                        Сортировать
                    </option>
                    <option value={Sort.OurChoice}>Наш выбор</option>
                    <option value={Sort.PriceAsc}>Цена по возрастанию</option>
                    <option value={Sort.PriceDesc}>Цена по убыванию</option>
                </select>
            </div>

            <div className="category__columns">
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
                    {sorted.map((e) => (
                        <Link
                            to={`/products/${e.slug}`}
                            className="category__item"
                        >
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
        </div>
    );
};

function sortByOurChoice(items: ICategoryContent[]): ICategoryContent[] {
    return items;
}

function sortByPriceAsc(items: ICategoryContent[]): ICategoryContent[] {
    return items.sort((a, b) => {
        if (a.price < b.price) return -1;
        if (a.price > b.price) return 1;
        return 0;
    });
}

function sortByPriceDesc(items: ICategoryContent[]): ICategoryContent[] {
    return items.sort((a, b) => {
        if (a.price > b.price) return -1;
        if (a.price < b.price) return 1;
        return 0;
    });
}
