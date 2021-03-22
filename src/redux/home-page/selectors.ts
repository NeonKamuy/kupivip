import { HomePageAction, IHomePageState } from "./interfaces";

export class HomePageSelectors {
  public static getSearchClassName(state: IHomePageState) {
    return state[HomePageAction.toggleSearch].className;
  }

  public static getMainHamburgerClassName(state: IHomePageState) {
    return state[HomePageAction.toggleMainHamburger].className;
  }

  public static getQuestionsClassName(state: IHomePageState) {
    return state[HomePageAction.toggleQuestions].className;
  }
}