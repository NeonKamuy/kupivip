import { Action } from "redux";
import { ICategoryListItem } from "../../components/header/categories/interfaces";
import { HeaderActionType, ILoadCategoriesAction, IToggleOpenedStateAction } from "./interfaces";

export default class HeaderActions {
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

    private static toggleOpenedAction(
        actionType:
            | HeaderActionType.toggleSearch
            | HeaderActionType.toggleQuestions
            | HeaderActionType.toggleMainHamburger
    ): IToggleOpenedStateAction {
        return {
            type: actionType,
        };
    }
}
