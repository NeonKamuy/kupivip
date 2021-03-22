import { Action } from "redux";
import { HomePageActionsSet } from "./home-page/interfaces";
import { HomePageReducer } from "./home-page/reducers";
import { IRootState, RootState } from "./state";

export const MainReducer = (state = RootState, action: Action<any>): IRootState => {
  let response = {};
  if(HomePageActionsSet.has(action.type)) response = HomePageReducer.reduce(state, action);
  return {...state, ...response};
}