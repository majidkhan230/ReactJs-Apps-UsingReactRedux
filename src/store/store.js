import { createStore } from "redux";
import { bankReducer } from "./reducers/bankReducers";

export const store = createStore(bankReducer)


console.log(store.getState())