import React, { useCallback, useMemo, useState } from "react";
import { ICategoryContent } from "../../product/constants";
import { useFiltered, useSizes, useSorted } from "./hooks";
import { Sort } from "./interfaces";
import { CategoryContentItem } from "./components/Item";
import { CategoryContentSizes } from "./components/Sizes";
import { CategoryContentSortButton } from "./components/Sort";
import { CategoryContentSizesMobile } from "./components/SizesMobile";
import { useDispatch } from "react-redux";

export const CategoryContent: React.FC<{ contents: ICategoryContent[] }> = (
    props
) => {
    const { contents } = props;
    const sizes = useSizes(contents);

    const [checkedSizes, setCheckedSizes] = useState<Set<string>>(
        new Set<string>()
    );
    const handleSizeCheck = useCallback(
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

    const filtered = useFiltered(contents, checkedSizes);
    const sorted = useSorted(filtered, sort);

    const dispatch = useDispatch();

    return (
        <div className="category__container">
            <div className="category__button__container">
                <CategoryContentSortButton onSortChange={handleSortChange} />
                <div className="category__button" id="filter">
                    <span>Фильтровать</span>
                </div>
            </div>

            <div className="category__columns">
                <div className="category__column left">
                    <div className="title">Размер</div>
                    <CategoryContentSizes
                        checkedSizes={checkedSizes}
                        onSizeCheck={handleSizeCheck}
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
