import axios from "axios";
import { __CONFIG__ } from "../../assets/config";
import { ICategoryListItem } from "../../components/categories/interfaces";
import { ICategoryContent, IProduct } from "../../views/product/constants";
import { IARequest } from "../interfaces";
import Requests from "../requests";

export default class CategoryController {
    public static getAllCategory(
        args: IARequest<null>
    ): Promise<ICategoryListItem[]> {
        return Requests.wrapInPromise(
            axios.get(`${__CONFIG__.serverApiURL}/categories/`),
            args
        ).then((res: any) => {
            return res.map((e: any) => ({
                categoryName: e.fields.category_name,
                slug: e.fields.slug,
            }));
        });
    }

    public static getCategoryContents(
        args: IARequest<{slug: string}>
    ): Promise<ICategoryContent[]> {
        const { slug } = args.data;
        return Requests.wrapInPromise(
            axios.get(`${__CONFIG__.serverApiURL}/categories/${slug}/`),
            args
        ).then((res: any) => res.map((e: any) => ({
            slug: e.fields.slug,
            title: e.fields.title,
            price: e.fields.price,
            discountlessPrice: e.fields.discountless_price,
            brand: e.fields.brand,
            sizes: e.fields.available_sizes,
        })));
    }

    public static getProduct(
        args: IARequest<{ slug: string }>
    ): Promise<IProduct> {
        const { slug } = args.data;
        return Requests.wrapInPromise(
            axios.get(`${__CONFIG__.serverApiURL}/products/${slug}/`),
            args
        ).then((res: any) => ({
            slug: res[0].fields.slug,
            sku: res[0].fields.sku,
            title: res[0].fields.title,
            price: res[0].fields.price,
            discountlessPrice: res[0].fields.discountless_price,
            color: res[0].fields.color,
            material: res[0].fields.material,
            brand: res[0].fields.brand,
            brandOrigin: res[0].fields.brand_origin,
            madeIn: res[0].fields.made_in,
            images: res[0].fields.images.split(","),
            sizes: res[0].fields.available_sizes,
        }));
    }
}
