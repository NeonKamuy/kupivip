import {
    ICategoryAction,
    ICategoryState,
    CategoryActionType,
    IShowCategorySizeFiltersAction,
    ICheckCategorySizeAction,
} from "./interfaces";
import { CategoryInitialState } from "./state";

export default class CategoryReducer {
    public static reduce(
        state = CategoryInitialState as ICategoryState,
        action: ICategoryAction
    ): ICategoryState {
        switch (action.type) {
            case CategoryActionType.showSizeFilters:
                return this.showSizeFilters(state, action);
            case CategoryActionType.hideSizeFilters:
                return this.hideSizeFilters(state);
            case CategoryActionType.checkSize:
                return this.checkSize(state, action);
            default: {
                return state;
            }
        }
    }

    private static checkSize(
        state: ICategoryState,
        action: ICheckCategorySizeAction
    ): ICategoryState {
        const newChecked = new Set([...state.checkedSizes, action.size]);
        state.checkedSizes.has(action.size) && newChecked.delete(action.size);

        return {
            ...state,
            checkedSizes: newChecked,
        };
    }

    private static showSizeFilters(
        state: ICategoryState,
        action: IShowCategorySizeFiltersAction
    ): ICategoryState {
        return {
            ...state,
            sizeFilters: action.sizeFilters,
        };
    }

    private static hideSizeFilters(state: ICategoryState): ICategoryState {
        return { ...state, sizeFilters: CategoryInitialState.sizeFilters };
    }
}
