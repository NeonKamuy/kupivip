import { Action } from "redux";
import { CategoryActionTypesSet } from "./category/interfaces";
import CategoryReducer from "./category/reducers";
import { HeaderActionTypesSet } from "./header/interfaces";
import { HeaderReducer } from "./header/reducers";
import { ProductActionTypesSet } from "./product/interfaces";
import ProductReducer from "./product/reducers";
import { IRootState, RootState } from "./state";

export const MainReducer = (
    state = RootState,
    action: Action<any>
): IRootState => {
    let response: IRootState = {...state};

    if (HeaderActionTypesSet.has(action.type))
        response.HeaderState = HeaderReducer.reduce(state.HeaderState, action);
    if (ProductActionTypesSet.has(action.type))
        response.ProductState = ProductReducer.reduce(state.ProductState, action);
    if (CategoryActionTypesSet.has(action.type))
        response.CategoryState = CategoryReducer.reduce(state.CategoryState, action);

    return response;
};
