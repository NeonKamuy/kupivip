import React from "react";
import { CategoryList } from "./list";
import { CategoriesSearchBar } from "./search";

export const Categories: React.FC<{}> = () => {
    return (
        <div className="cats">
            <div className="container container--large">
                <div className="cats__wrapper">
                    <CategoryList />
                    <CategoriesSearchBar />
                </div>
            </div>
        </div>
    );
};
