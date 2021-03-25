import React, { useCallback, useMemo, useState } from "react";
import { ICategoryContent } from "../../product/constants";
import { useFiltered, useSizes, useSorted } from "./hooks";
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

    return (
        <div className="category__container">
            <CategoryContentSortButton onSortChange={handleSortChange} />

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
