import { createStore } from "redux";
import { bankReducer } from "./reducers/bankReducers";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage,
  }


  const persistedReducer = persistReducer(persistConfig, bankReducer)
 

export let store = createStore(persistedReducer)
export  let persistor = persistStore(store)







// export const store = createStore(bankReducer)


console.log(store.getState())