import { ICategoryListItem } from "../../components/header/categories/interfaces";
import { HeaderActionType, IHeaderState } from "./interfaces";

export class HeaderSelectors {
  public static getCategoryList(state: IHeaderState): ICategoryListItem[] {
    return state[HeaderActionType.loadCategories];
  }

  public static getSearchClassName(state: IHeaderState) {
    return state[HeaderActionType.toggleSearch].className;
  }

  public static getMainHamburgerClassName(state: IHeaderState) {
    return state[HeaderActionType.toggleMainHamburger].className;
  }

  public static getQuestionsClassName(state: IHeaderState) {
    return state[HeaderActionType.toggleQuestions].className;
  }
}