import { HomePageAction, IHomePageState } from "./interfaces";

// State
export const HomePageInitialState: IHomePageState = {
    [HomePageAction.toggleSearch]: {
      isOpen: false,
      className: "nav__mobile search"
    },
    [HomePageAction.toggleMainHamburger]: {
      isOpen: false,
      className: "nav__mobile main"
    },
    [HomePageAction.toggleQuestions]: {
      isOpen: false,
      className: "nav__mobile questions"
    }
} as const;
