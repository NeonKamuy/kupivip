import { Action } from "redux";
import { ICategoryListItem } from "../../components/header/categories/interfaces";
import { HeaderActionType, ILoadCategoriesAction } from "./interfaces";

export default class HeaderActions {
    public static loadCategories(categories: ICategoryListItem[]): ILoadCategoriesAction {
      return {categories, type: HeaderActionType.loadCategories};
    }

    public static toggleSearch(): Action<HeaderActionType.toggleSearch> {
        return {type: HeaderActionType.toggleSearch};
    }

    public static toggleMainHamburger(): Action<HeaderActionType.toggleMainHamburger> {
        return {type: HeaderActionType.toggleMainHamburger};
    }

    public static toggleQuestions(): Action<HeaderActionType.toggleQuestions> {
        return {type: HeaderActionType.toggleQuestions};
    }
}
