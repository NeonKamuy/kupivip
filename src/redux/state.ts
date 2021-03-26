import { CategoryInitialState } from "./category/state";
import { HeaderInitialState } from "./header/state";
import { ProductInitialState } from "./product/state";

export const RootState = {
    HeaderState: HeaderInitialState,
    ProductState: ProductInitialState,
    CategoryState: CategoryInitialState,
};
export type IRootState = typeof RootState;
