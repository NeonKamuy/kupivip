import { Action } from "redux";
import { HeaderActionType } from "./interfaces";

export default class HeaderActions {
  public static toggleSearch(): Action {
    return this.toggleOpenedAction(HeaderActionType.toggleSearch);
  }

  public static toggleMainHamburger(): Action {
    return this.toggleOpenedAction(HeaderActionType.toggleMainHamburger);
  }

  public static toggleQuestions(): Action {
    return this.toggleOpenedAction(HeaderActionType.toggleQuestions);
  }

  private static toggleOpenedAction(actionType: HeaderActionType): Action {
    return {
      type: actionType,
    };
  }
}