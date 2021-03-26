import { ICategoryListItem } from "../../components/header/categories/interfaces";
import { IProductState, ProductActionType } from "./interfaces";

// State
export const ProductInitialState: IProductState = {
    sizePickerFAQ: {
      isOpen: false,
      className: "product__size_picker__faq"
    }
} as const;
