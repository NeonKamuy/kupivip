import { IProductAction, IProductState, ProductActionType } from "./interfaces";
import { ProductInitialState } from "./state";

export default class ProductReducer {
    public static reduce(
        state = ProductInitialState as IProductState,
        action: IProductAction
    ): IProductState {
        switch (action.type) {
            case ProductActionType.toggleSizePickerFAQ:
                return this.toggleSizePickerFAQ(state, action);
            default: {
                return state;
            }
        }
    }

    private static toggleSizePickerFAQ(
        state: IProductState,
        action: IProductAction
    ): IProductState {
        const actionState = state[action.type];
        let { isOpen, className } = actionState;

        if (isOpen) {
            className = className.replace(/\bopened\b/i, "");
        } else {
            className = className + " opened";
        }
        isOpen = !isOpen;

        return {
            ...state,
            [action.type]: { isOpen, className },
        };
    }
}
