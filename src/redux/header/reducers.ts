import { Action } from "redux";
import {
	HeaderActionType,
	IHeaderState,
	IToggleOpenedState,
} from "./interfaces";
import { HeaderInitialState } from "./state";

export class HeaderReducer {
	public static reduce(
		state = HeaderInitialState as IHeaderState,
		action: Action
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
			default: {
				return state;
			}
		}
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
