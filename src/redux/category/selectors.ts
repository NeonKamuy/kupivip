import { IRootState } from "../state";
import { ICategoryState, CategoryActionType } from "./interfaces";

export class CategorySelectors {
    public static getSizeFiltersOpened(state: IRootState) {
        return state.CategoryState.sizeFilters.isOpen;
    }

    public static getSizeFilters(state: IRootState) {
        return state.CategoryState.sizeFilters;
    }

    public static getCheckedSizes(state: IRootState) {
        return state.CategoryState.checkedSizes;
    }
}
