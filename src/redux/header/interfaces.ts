// Action 
export enum HeaderActionType {
  toggleSearch = "TOGGLE_HEADER_SEARCH",
  toggleMainHamburger = "TOGGLE_HEADER_MAIN_HAMBURGER",
  toggleQuestions = "TOGGLE_HEADER_QUESTIONS"
}
export const HeaderActionTypes = Object.values(HeaderActionType);
export const HeaderActionTypesSet = new Set(HeaderActionTypes);

// State
export interface IHeaderState {
  [HeaderActionType.toggleSearch]: IToggleOpenedState,
  [HeaderActionType.toggleMainHamburger]: IToggleOpenedState,
  [HeaderActionType.toggleQuestions]: IToggleOpenedState
}

// Toggle Opened State
export interface IToggleOpenedState {
  isOpen: boolean,
  className: string
}