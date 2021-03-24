import { HeaderActionType, IHeaderState } from "./interfaces";

export class HeaderSelectors {
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