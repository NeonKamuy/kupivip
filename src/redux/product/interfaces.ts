import { Action } from "redux";
import { IToggleOpenedState } from "../interfaces";

// Action
export enum ProductActionType {
    toggleSizePickerFAQ = "TOGGLE_SIZE_PICKER_FAQ",
}
export const ProductActionTypes = Object.values(ProductActionType);
export const ProductActionTypesSet = new Set(ProductActionTypes);

export type IProductAction = Action<ProductActionType.toggleSizePickerFAQ>;

// State
export interface IProductState {
    [ProductActionType.toggleSizePickerFAQ]: IToggleOpenedState;
}
