import { ICategoryListItem } from "../../components/header/categories/interfaces";
import { IRootState } from "../state";
import { HeaderActionType, IHeaderState } from "./interfaces";

export class HeaderSelectors {
  public static getCategoryList(state: IRootState): ICategoryListItem[] {
    return state.HeaderState.categories;
  }

  public static getSearchClassName(state: IRootState) {
    return state.HeaderState.search.className;
  }

  public static getMainHamburgerClassName(state: IRootState) {
    return state.HeaderState.mainHamburger.className;
  }

  public static getQuestionsClassName(state: IRootState) {
    return state.HeaderState.questions.className;
  }
}