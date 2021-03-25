import axios from "axios";
import { __CONFIG__ } from "../../assets/config";
import { ICategoryListItem } from "../../components/categories/interfaces";
import { IARequest } from "../interfaces";
import Requests from "../requests";

export default class CategoryController {
    public static getAllCategory(
        args: IARequest<null>
    ): Promise<ICategoryListItem[]> {
        return Requests.wrapInPromise(
            axios.get(`${__CONFIG__.backendURL}/categories/`),
            args
        ).then((res: any) => {
            return res.map((e: any) => ({
                categoryName: e.fields.category_name,
                slug: e.fields.slug,
            }));
        });
    }
}
