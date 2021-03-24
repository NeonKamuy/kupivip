import { HeaderActionType, IHeaderState } from "./interfaces";

// State
export const HeaderInitialState: IHeaderState = {
    [HeaderActionType.toggleSearch]: {
      isOpen: false,
      className: "nav__mobile search"
    },
    [HeaderActionType.toggleMainHamburger]: {
      isOpen: false,
      className: "nav__mobile main"
    },
    [HeaderActionType.toggleQuestions]: {
      isOpen: false,
      className: "nav__mobile questions"
    }
} as const;
