import { HeaderInitialState } from "./header/state";
import { ProductInitialState } from "./product/state";

export const RootState = { ...HeaderInitialState, ...ProductInitialState };
export type IRootState = typeof RootState;
