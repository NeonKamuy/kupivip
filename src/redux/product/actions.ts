import { CommonActions } from "../actions";
import { IToggleOpenedStateAction } from "../interfaces";
import { ProductActionType } from "./interfaces";

export default class ProductActions extends CommonActions {
    public static toggleSizePickerFAQ(): IToggleOpenedStateAction {
        return this.toggleOpenedAction(ProductActionType.toggleSizePickerFAQ);
    }
}
