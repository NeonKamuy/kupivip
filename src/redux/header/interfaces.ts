import { Action } from "redux";
import { ICategoryListItem } from "../../components/header/categories/interfaces";
import { IToggleOpenedState } from "../interfaces";

// Action
export enum HeaderActionType {
    toggleSearch = "TOGGLE_HEADER_SEARCH",
    toggleMainHamburger = "TOGGLE_HEADER_MAIN_HAMBURGER",
    toggleQuestions = "TOGGLE_HEADER_QUESTIONS",
    loadCategories = "LOAD_CATEGORIES_LIST",
}
export const HeaderActionTypes = Object.values(HeaderActionType);
export const HeaderActionTypesSet = new Set(HeaderActionTypes);

export type IHeaderAction =
    | Action<
          | HeaderActionType.toggleMainHamburger
          | HeaderActionType.toggleQuestions
          | HeaderActionType.toggleSearch
      >
    | ILoadCategoriesAction;

// State
export interface IHeaderState {
    search: IToggleOpenedState;
    mainHamburger: IToggleOpenedState;
    questions: IToggleOpenedState;
    categories: ICategoryListItem[];
}

// Categories Load Action
export interface ILoadCategoriesAction
    extends Action<HeaderActionType.loadCategories> {
    categories: ICategoryListItem[];
}
