import { createStore } from "redux";
import { addToCartReducer } from "./reducers/addToCartReducer";

export const store = createStore(addToCartReducer);


console.log(store.getState());