import { Action } from "redux";
import { IToggleOpenedState } from "../interfaces";

// Action
export enum ProductActionType {
    toggleSizePickerFAQ = "TOGGLE_SIZE_PICKER_FAQ",
    showSizePickerFAQ = "SHOW_SIZE_PICKER_FAQ",
    hideSizePickerFAQ = "HIDE_SIZE_PICKER_FAQ",
}
export const ProductActionTypes = Object.values(ProductActionType);
export const ProductActionTypesSet = new Set(ProductActionTypes);

export type IProductAction = Action<
    | ProductActionType.toggleSizePickerFAQ
    | ProductActionType.showSizePickerFAQ
    | ProductActionType.hideSizePickerFAQ
>;

// State
export interface IProductState {
    sizePickerFAQ: IToggleOpenedState;
}
