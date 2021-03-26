import { Action } from "redux";
import { ProductActionType } from "./interfaces";

export default class ProductActions {
    public static toggleSizePickerFAQ(): Action<ProductActionType.toggleSizePickerFAQ> {
        return { type: ProductActionType.toggleSizePickerFAQ };
    }

    public static hideSizePickerFAQ(): Action<ProductActionType.hideSizePickerFAQ> {
        return { type: ProductActionType.hideSizePickerFAQ };
    }
}
