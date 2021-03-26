import { ICategoryListItem } from "../../components/header/categories/interfaces";
import { HeaderActionType, IHeaderState } from "./interfaces";

// State
export const HeaderInitialState: IHeaderState = {
    categories: [] as ICategoryListItem[],
    search: {
        isOpen: false,
        className: "nav__mobile search",
    },
    mainHamburger: {
        isOpen: false,
        className: "nav__mobile main",
    },
    questions: {
        isOpen: false,
        className: "nav__mobile questions",
    },
} as const;
