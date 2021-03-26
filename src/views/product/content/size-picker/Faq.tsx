import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductActions from "../../../../redux/product/actions";
import { ProductSelectors } from "../../../../redux/product/selectors";

export const ProductSizePickerFAQ: React.FC<{}> = () => {
    const sizePickerFAQClassName = useSelector(
        ProductSelectors.getSizePickerFAQClassName
    );

    const dispatch = useDispatch();
    const closeFAQ = useCallback(()=>{
        dispatch(ProductActions.toggleSizePickerFAQ());
    }, []);

    return (
        <div className={sizePickerFAQClassName}>
            <div className="product__size_picker__faq" id="header">
                <button className="close" onClick={closeFAQ}>
                    <svg viewBox="0 0 20 20">
                        <path d="M18.2 20L0 1.7 1.7 0 20 18 18 20z"></path>
                        <path d="M1.7 20L20 1.7 18 0 0 18.2 1.7 20z"></path>
                    </svg>
                </button>
            </div>

            Здесь будет ваша информация
        </div>
    );
};
