import { wrap } from "lodash";
import React, { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ICategoryListItem } from "../../../components/header/categories/interfaces";
import { ICategoryContent } from "../../product/constants";
import { useSizes } from "./hooks";
import { Sort } from "./interfaces";
import { CategoryContentItem } from "./Item";
import { CategoryContentSizes } from "./Sizes";
import { CategoryContentSortButton } from "./Sort";

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
            <CategoryContentSortButton onSortChange={handleSortChange} />

            <div className="category__columns">
                <div className="category__column left">
                    <div className="title">Размер</div>
                    <CategoryContentSizes
                        checkedSizes={checkedSizes}
                        onSizeCheck={onSizeCheck}
                        sizes={sizes}
                    />
                </div>
                <div className="category__column right">
                    {sorted.map((e) => (
                        <CategoryContentItem item={e} />
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
