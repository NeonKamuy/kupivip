import { useState, useEffect } from "react";
import CategoryController from ".";
import { ICategoryListItem } from "../../components/categories/interfaces";

// Get All Categories
export const useCategories = () => {
    const [categories, setCategories] = useState([] as ICategoryListItem[]);

    useEffect(() => {
        CategoryController.getAllCategory({ data: null }).then(res => setCategories(res));
    }, []);

    return categories;
}
