import { Action, AnyAction } from "redux";
import {
	HeaderActionType,
	IHeaderAction,
	IHeaderState,
	ILoadCategoriesAction,
	IToggleOpenedState,
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
					state, action.type, state[HeaderActionType.toggleMainHamburger]
				);
			case HeaderActionType.toggleSearch:
				return this.toggleOpenedAction(
					state, action.type, state[HeaderActionType.toggleSearch]
				);
			case HeaderActionType.toggleQuestions:
				return this.toggleOpenedAction(
					state, action.type, state[HeaderActionType.toggleQuestions]
				)
			case HeaderActionType.loadCategories:
				return this.loadCategories(state, action as ILoadCategoriesAction);
			default: {
				return state;
			}
		}
	}

	private static loadCategories(state: IHeaderState, action: ILoadCategoriesAction): IHeaderState {
		return {...state, [action.type]: action.categories }
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
