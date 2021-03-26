import { IProductState, ProductActionType } from "./interfaces";

export class ProductSelectors {
    public static getSizePickerFAQClassName(state: IProductState) {
        return state.sizePickerFAQ.className;
    }
}
