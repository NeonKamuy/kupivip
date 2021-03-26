import { Action } from "redux";
import { IToggleOpenedState } from "../interfaces";

// Action
export enum CategoryActionType {
    showSizeFilters = "SHOW_SIZE_FILTERS",
    hideSizeFilters = "HIDE_SIZE_FILTERS",
    checkSize = "CHECK_SIZE",
}
export const CategoryActionTypes = Object.values(CategoryActionType);
export const CategoryActionTypesSet = new Set(CategoryActionTypes);

export type ICategoryAction =
    | ICheckCategorySizeAction
    | IShowCategorySizeFiltersAction
    | Action<CategoryActionType.hideSizeFilters>;

// Show Size Filters Action
export interface IShowCategorySizeFiltersAction
    extends Action<CategoryActionType.showSizeFilters> {
    sizeFilters: ICategoryState["sizeFilters"];
}

// Check Size Action
export interface ICheckCategorySizeAction
    extends Action<CategoryActionType.checkSize> {
    size: string;
}

// State
export interface ICategoryState {
    sizeFilters: {
        sizes: string[];
        className: string;
        isOpen: boolean;
    };
    checkedSizes: Set<string>;
}
