import { Action } from "redux";
import ProductActions from "./actions";
import { IProductAction, IProductState, ProductActionType } from "./interfaces";
import { ProductInitialState } from "./state";

export default class ProductReducer {
    public static reduce(
        state = ProductInitialState as IProductState,
        action: IProductAction
    ): IProductState {
        switch (action.type) {
            case ProductActionType.toggleSizePickerFAQ:
                return this.toggleSizePickerFAQ(state);
            case ProductActionType.hideSizePickerFAQ:
                return this.hideSizePickerFAQ(state);
            default: {
                return state;
            }
        }
    }

    private static toggleSizePickerFAQ(state: IProductState): IProductState {
        const actionState = state.sizePickerFAQ;
        let { isOpen, className } = actionState;

        isOpen ? this.hideSizePickerFAQ(state) : this.showSizePickerFAQ(state);
        isOpen = !isOpen;

        return {
            ...state,
            sizePickerFAQ: { isOpen, className },
        };
    }

    private static showSizePickerFAQ(state: IProductState): IProductState {
        return {
            ...state,
            sizePickerFAQ: {
                isOpen: true,
                className:
                    ProductInitialState.sizePickerFAQ.className + " opened",
            },
        };
    }

    private static hideSizePickerFAQ(state: IProductState): IProductState {
        return { ...state, sizePickerFAQ: ProductInitialState.sizePickerFAQ };
    }
}
