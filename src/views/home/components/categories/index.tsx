import React from "react";
import { CategoriesList } from "./CategoriesList";
import { CategoriesSearchBar } from "./SearchBar";

export const Categories: React.FC<{}> = () => {
    return (
        <div className="cats">
            <div className="container container--large">
                <div className="cats__wrapper">
                    <CategoriesList />
                    <CategoriesSearchBar />
                </div>
            </div>
        </div>
    );
};
