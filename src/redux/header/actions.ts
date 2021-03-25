import { Action } from "redux";
import { ICategoryListItem } from "../../components/header/categories/interfaces";
import { CommonActions } from "../actions";
import { IToggleOpenedStateAction } from "../interfaces";
import { HeaderActionType, ILoadCategoriesAction } from "./interfaces";

export default class HeaderActions extends CommonActions {
    public static loadCategories(categories: ICategoryListItem[]): ILoadCategoriesAction {
      return {categories, type: HeaderActionType.loadCategories};
    }

    public static toggleSearch(): IToggleOpenedStateAction {
        return this.toggleOpenedAction(HeaderActionType.toggleSearch);
    }

    public static toggleMainHamburger(): IToggleOpenedStateAction {
        return this.toggleOpenedAction(HeaderActionType.toggleMainHamburger);
    }

    public static toggleQuestions(): IToggleOpenedStateAction {
        return this.toggleOpenedAction(HeaderActionType.toggleQuestions);
    }
}
