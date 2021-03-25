import { ICategoryListItem } from "../../components/header/categories/interfaces";
import { IProductState, ProductActionType } from "./interfaces";

// State
export const ProductInitialState: IProductState = {
    [ProductActionType.toggleSizePickerFAQ]: {
      isOpen: false,
      className: "product__size__picker__faq"
    }
} as const;
