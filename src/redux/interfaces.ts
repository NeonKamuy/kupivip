import { Action } from "redux";
import { HeaderActionType } from "./header/interfaces";
import { ProductActionType } from "./product/interfaces";

// Toggle Opened State
export interface IToggleOpenedState {
    isOpen: boolean;
    className: string;
}

// Toggle Opened State Action Types
export type IToggleOpenedStateActionType =
    | HeaderActionType.toggleMainHamburger
    | HeaderActionType.toggleQuestions
    | HeaderActionType.toggleSearch
    | ProductActionType.toggleSizePickerFAQ;

// Toggle Opened State Action
export type IToggleOpenedStateAction = Action<IToggleOpenedStateActionType>;
