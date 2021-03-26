import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryActions from "../../../../redux/category/actions";
import { CategorySelectors } from "../../../../redux/category/selectors";

export const CategoryContentSizesMobile: React.FC<{}> = () => {
    const filters = useSelector(CategorySelectors.getSizeFilters);
    const checkedSizes = useSelector(CategorySelectors.getCheckedSizes);
    const { className, sizes } = filters;

    const dispatch = useDispatch();
    const hide = useCallback(() => {
        dispatch(CategoryActions.hideSizeFilters());
    }, []);

    const handleSizeCheck = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.currentTarget.value;
            dispatch(CategoryActions.checkSize(value));
            hide();
        },
        []
    );

    return (
        <div className={className}>
            <div className="category__size__filters__mob" id="header">
                <button className="close" onClick={hide}>
                    <svg viewBox="0 0 20 20">
                        <path d="M18.2 20L0 1.7 1.7 0 20 18 18 20z"></path>
                        <path d="M1.7 20L20 1.7 18 0 0 18.2 1.7 20z"></path>
                    </svg>
                </button>
            </div>

            <div>
                {sizes.map((e) => (
                    <div>
                        <input
                            type="checkbox"
                            value={e}
                            id={e}
                            checked={checkedSizes.has(e)}
                            onChange={handleSizeCheck}
                        />
                        <label style={{ marginLeft: 10 }} htmlFor={e}>
                            {e}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};
