import { Action } from "redux";
import { ICategoryListItem } from "../../components/header/categories/interfaces";

// Action
export enum HeaderActionType {
    toggleSearch = "TOGGLE_HEADER_SEARCH",
    toggleMainHamburger = "TOGGLE_HEADER_MAIN_HAMBURGER",
    toggleQuestions = "TOGGLE_HEADER_QUESTIONS",
    loadCategories = "LOAD_CATEGORIES_LIST",
}
export const HeaderActionTypes = Object.values(HeaderActionType);
export const HeaderActionTypesSet = new Set(HeaderActionTypes);

export type IHeaderAction = IToggleOpenedStateAction | ILoadCategoriesAction;

// State
export interface IHeaderState {
    [HeaderActionType.toggleSearch]: IToggleOpenedState;
    [HeaderActionType.toggleMainHamburger]: IToggleOpenedState;
    [HeaderActionType.toggleQuestions]: IToggleOpenedState;
    [HeaderActionType.loadCategories]: ICategoryListItem[];
}

// Toggle Opened State
export interface IToggleOpenedState {
    isOpen: boolean;
    className: string;
}

// Toggle Opened State Action
export type IToggleOpenedStateAction = Action<
    | HeaderActionType.toggleMainHamburger
    | HeaderActionType.toggleQuestions
    | HeaderActionType.toggleSearch
>;

// Categories Load Action
export interface ILoadCategoriesAction extends Action<HeaderActionType.loadCategories> {
    categories: ICategoryListItem[];
}
