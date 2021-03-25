import { Action } from "redux";
import { HeaderActionTypesSet } from "./header/interfaces";
import { HeaderReducer } from "./header/reducers";
import { ProductActionTypesSet } from "./product/interfaces";
import ProductReducer from "./product/reducers";
import { IRootState, RootState } from "./state";

export const MainReducer = (
    state = RootState,
    action: Action<any>
): IRootState => {
    let response = {};

    if (HeaderActionTypesSet.has(action.type))
        response = HeaderReducer.reduce(state, action);
    if (ProductActionTypesSet.has(action.type))
        response = ProductReducer.reduce(state, action);

    return { ...state, ...response };
};
