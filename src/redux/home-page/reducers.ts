import { Action } from "redux";
import {
	HomePageAction,
	IHomePageState,
	IToggleOpenedState,
} from "./interfaces";
import { HomePageInitialState } from "./state";

export class HomePageReducer {
	public static reduce(
		state = HomePageInitialState as IHomePageState,
		action: Action
	): IHomePageState {
		switch (action.type) {
			case HomePageAction.toggleMainHamburger:
				return this.toggleOpenedAction(
					state, action.type, state[HomePageAction.toggleMainHamburger]
				);
			case HomePageAction.toggleSearch:
				return this.toggleOpenedAction(
					state, action.type, state[HomePageAction.toggleSearch]
				);
			case HomePageAction.toggleQuestions:
				return this.toggleOpenedAction(
					state, action.type, state[HomePageAction.toggleQuestions]
				)
			default: {
				return state;
			}
		}
	}

	private static toggleOpenedAction(
		state: IHomePageState,
		actionType: HomePageAction,
		actionState: IToggleOpenedState
	): IHomePageState {
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
