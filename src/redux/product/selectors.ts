import { IRootState } from "../state";
import { IProductState, ProductActionType } from "./interfaces";

export class ProductSelectors {
    public static getSizePickerFAQClassName(state: IRootState) {
        return state.ProductState.sizePickerFAQ.className;
    }
}
