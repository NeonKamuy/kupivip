import React, { useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import HeaderActions from "../../../../redux/header/actions";
import ProductActions from "../../../../redux/product/actions";
import { IProduct } from "../../constants";

export const ProductSizePicker: React.FC<{ sizes: IProduct["sizes"] }> = (
    props
) => {
    const { sizes } = props;
    const [picked, setPicked] = useState<number | null>(null);

    const togglePicked = useCallback((id: number) => {
        setPicked((picked) => (picked === id ? null : id));
    }, []);

    const sizeCells = useMemo(() => {
        return sizes.map((e) => {
            let className = "product__size__picker__table__cell";
            if (e.id === picked) className += " picked";

            return (
                <div className={className} onClick={() => togglePicked(e.id)}>
                    <span>{e.name}</span>
                </div>
            );
        });
    }, [picked]);

    const dispatch = useDispatch();
    const toggleSizePickerFAQ = useCallback(()=>{
        dispatch(ProductActions.toggleSizePickerFAQ);
    }, []);

    return (
        <div className="product__size__picker">
            <div className="product__size__picker__header">
                <span>Выберите размер</span>
                <span
                    className="product__size__picker__header__how_to"
                    onClick={toggleSizePickerFAQ}
                >
                    Как выбрать
                </span>
            </div>
            <div className="product__size__picker__table">{sizeCells}</div>
        </div>
    );
};
