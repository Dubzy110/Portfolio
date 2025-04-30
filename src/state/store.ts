import { combineReducers, configureStore } from "@reduxjs/toolkit";

import gridReducer from "./reducers/gridSlice";

const rootReducer = combineReducers({ grid: gridReducer });

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
