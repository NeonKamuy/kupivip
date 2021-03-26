import { Action } from "redux";
import {
    CategoryActionType,
    ICheckCategorySizeAction,
    IShowCategorySizeFiltersAction,
} from "./interfaces";
import { CategoryInitialState } from "./state";

export default class CategoryActions {
    public static checkSize(size: string): ICheckCategorySizeAction {
        return { type: CategoryActionType.checkSize, size };
    }

    public static showSizeFilters(
        args: Omit<
            IShowCategorySizeFiltersAction["sizeFilters"],
            "className" | "isOpen"
        >
    ): IShowCategorySizeFiltersAction {
        return {
            sizeFilters: {
                ...args,
                isOpen: true,
                className:
                    CategoryInitialState.sizeFilters.className + " opened",
            },
            type: CategoryActionType.showSizeFilters,
        };
    }

    public static hideSizeFilters(): Action<CategoryActionType.hideSizeFilters> {
        return { type: CategoryActionType.hideSizeFilters };
    }
}
