// Action 
export enum HomePageAction {
  toggleSearch = "TOGGLE_HOME_PAGE_SEARCH",
  toggleMainHamburger = "TOGGLE_HOME_PAGE_MAIN_HAMBURGER",
  toggleQuestions = "TOGGLE_HOME_PAGE_QUESTIONS"
}
export const HomePageActions = Object.values(HomePageAction);
export const HomePageActionsSet = new Set(HomePageActions);

// State
export interface IHomePageState {
  [HomePageAction.toggleSearch]: IToggleOpenedState,
  [HomePageAction.toggleMainHamburger]: IToggleOpenedState,
  [HomePageAction.toggleQuestions]: IToggleOpenedState
}

// Toggle Opened State
export interface IToggleOpenedState {
  isOpen: boolean,
  className: string
}