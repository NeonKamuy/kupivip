import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ICategoryContent } from "../../product/constants";
import { useCheckedSizes, useFiltered, useSizes, useSorted } from "./hooks";
import { Sort } from "./interfaces";
import { CategoryContentItem } from "./components/Item";
import { CategoryContentSizes } from "./components/Sizes";
import { CategoryContentSortButton } from "./components/Sort";
import { useDispatch, useSelector } from "react-redux";
import { IShowCategorySizeFiltersAction } from "../../../redux/category/interfaces";
import CategoryActions from "../../../redux/category/actions";
import { CategorySelectors } from "../../../redux/category/selectors";

export const CategoryContent: React.FC<{ contents: ICategoryContent[] }> = (
    props
) => {
    const { contents } = props;
    const dispatch = useDispatch();
    const sizes = useSizes(contents);
    const checkedSizes = useSelector(CategorySelectors.getCheckedSizes);
    const sizeFiltersOpen = useSelector(CategorySelectors.getSizeFiltersOpened);

    const handleSizeCheck = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const target = e.currentTarget;
            const value = target.value;
            dispatch(CategoryActions.checkSize(value));
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

    const showFiltersSidebar = useCallback(() => {
        dispatch<IShowCategorySizeFiltersAction>(
            CategoryActions.showSizeFilters({
                sizes,
            })
        );
    }, [sizes, handleSizeCheck]);

    useEffect(() => {
        sizeFiltersOpen && showFiltersSidebar();
    }, [sizes]);

    return (
        <div className="category__container">
            <div className="category__button__container">
                <CategoryContentSortButton onSortChange={handleSortChange} />
                <div
                    className="category__button"
                    id="filter"
                    onClick={showFiltersSidebar}
                >
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
