import { ICategoryState } from "./interfaces";

// State
export const CategoryInitialState: ICategoryState = {
    sizeFilters: {
        sizes: [] as string[],
        className: "category__size__filters__mob",
        isOpen: false
    },
    checkedSizes: new Set<string>()
} as const;
