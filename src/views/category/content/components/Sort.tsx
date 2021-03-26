import React from "react";
import { Sort } from "../interfaces";

export const CategoryContentSortButton: React.FC<{
    onSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}> = ({ onSortChange }) => {
    return (
        <div className="select">
            <select onChange={onSortChange}>
                <option selected disabled>
                    Сортировать
                </option>
                <option value={Sort.OurChoice}>Наш выбор</option>
                <option value={Sort.PriceAsc}>Цена по возрастанию</option>
                <option value={Sort.PriceDesc}>Цена по убыванию</option>
            </select>
        </div>
    );
};
