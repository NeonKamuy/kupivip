import { useState, useEffect } from "react";
import CategoryController from ".";
import { ICategoryListItem } from "../../components/categories/interfaces";
import { IProduct } from "../../views/product/constants";

// Get All Categories
export const useCategories = () => {
    const [categories, setCategories] = useState([] as ICategoryListItem[]);

    useEffect(() => {
        CategoryController.getAllCategory({ data: null }).then(res => setCategories(res));
    }, []);

    return categories;
}

// Get Product
export const useProduct = (slug: string) => {
    const [product, setProduct] = useState<IProduct | null>(null);

    useEffect(()=>{
        CategoryController.getProduct({data: {slug}}).then(res => setProduct(res));
    }, [slug]);

    return product;
}