import { Action } from "redux";
import { HomePageAction } from "./interfaces";

export default class HomePageActions {
  public static toggleSearch(): Action {
    return this.toggleOpenedAction(HomePageAction.toggleSearch);
  }

  public static toggleMainHamburger(): Action {
    return this.toggleOpenedAction(HomePageAction.toggleMainHamburger);
  }

  public static toggleQuestions(): Action {
    return this.toggleOpenedAction(HomePageAction.toggleQuestions);
  }

  private static toggleOpenedAction(actionType: HomePageAction): Action {
    return {
      type: actionType,
    };
  }
}