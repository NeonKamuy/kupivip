import { IToggleOpenedState } from "../interfaces";
import {
    HeaderActionType,
    IHeaderAction,
    IHeaderState,
    ILoadCategoriesAction,
} from "./interfaces";
import { HeaderInitialState } from "./state";

export class HeaderReducer {
    public static reduce(
        state = HeaderInitialState as IHeaderState,
        action: IHeaderAction
    ): IHeaderState {
        switch (action.type) {
            case HeaderActionType.toggleMainHamburger:
                return this.toggleOpenedAction(
                    state,
                    action.type,
                    state.mainHamburger
                );
            case HeaderActionType.toggleSearch:
                return this.toggleOpenedAction(
                    state,
                    action.type,
                    state.search
                );
            case HeaderActionType.toggleQuestions:
                return this.toggleOpenedAction(
                    state,
                    action.type,
                    state.questions
                );
            case HeaderActionType.loadCategories:
                return this.loadCategories(
                    state,
                    action as ILoadCategoriesAction
                );
            default: {
                return state;
            }
        }
    }

    private static loadCategories(
        state: IHeaderState,
        action: ILoadCategoriesAction
    ): IHeaderState {
        return { ...state, categories: action.categories };
    }

    private static toggleOpenedAction(
        state: IHeaderState,
        actionType: HeaderActionType,
        actionState: IToggleOpenedState
    ): IHeaderState {
        let { isOpen, className } = actionState;
        if (isOpen) {
            className = className.replace(/\bopened\b/i, "");
        } else {
            className = className + " opened";
        }
        isOpen = !isOpen;

        return { ...state, [actionType]: { isOpen, className } };
    }
}
