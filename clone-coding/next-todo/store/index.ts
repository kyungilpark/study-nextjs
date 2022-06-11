// import { createStore, applyMiddleware, combineReducers } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector
} from "react-redux";
import todo from "./todo";

// 타입이 지원되는 커스텀 useSelector 먼들기 1
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
// 타입이 지원되는 커스텀 useSelector 먼들기 2
// declare module "react-redux" {
//   interface DEfaultRootState extends RootState {}
// }

const rootReducer = combineReducers({
  todo: todo.reducer
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload
    };
    if (state.count) nextState.count = state.count;
    return nextState;
  }
  return rootReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

// const bindMiddleware = (middleware: any) => {
//   if (process.env.NODE_ENV !== "production") {
//     const { composeWithDevTools } = require("redux-devtools-extension");
//     return composeWithDevTools(applyMiddleware(...middleware));
//   }
//   return applyMiddleware(...middleware);
// };
//
// const initStore = () => {
//   return createStore(reducer, bindMiddleware([]));
// };

const initStore = () => {
  return configureStore({
    reducer,
    devTools: true
  });
};

export const wrapper = createWrapper(initStore);
