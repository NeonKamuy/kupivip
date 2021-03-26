import { ICategoryListItem } from "../../components/header/categories/interfaces";
import { HeaderActionType, IHeaderState } from "./interfaces";

export class HeaderSelectors {
  public static getCategoryList(state: IHeaderState): ICategoryListItem[] {
    return state.categories;
  }

  public static getSearchClassName(state: IHeaderState) {
    return state.search.className;
  }

  public static getMainHamburgerClassName(state: IHeaderState) {
    return state.mainHamburger.className;
  }

  public static getQuestionsClassName(state: IHeaderState) {
    return state.questions.className;
  }
}