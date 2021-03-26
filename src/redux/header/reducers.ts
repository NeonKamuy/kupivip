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
                    "mainHamburger",
                    state.mainHamburger
                );
            case HeaderActionType.toggleSearch:
                return this.toggleOpenedAction(
                    state,
                    "search",
                    state.search
                );
            case HeaderActionType.toggleQuestions:
                return this.toggleOpenedAction(
                    state,
                    "questions",
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

    private static toggleOpenedAction<K extends keyof IHeaderState>(
        state: IHeaderState,
        key: K,
        actionState: IToggleOpenedState
    ): IHeaderState {
        let { isOpen, className } = actionState;
        if (isOpen) {
            className = className.replace(/\bopened\b/i, "");
        } else {
            className = className + " opened";
        }
        isOpen = !isOpen;

        return { ...state, [key]: { isOpen, className } };
    }
}
