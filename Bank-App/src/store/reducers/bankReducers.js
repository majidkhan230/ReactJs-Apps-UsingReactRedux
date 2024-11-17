const initialValue = {
  amount: 1000,
};

export const bankReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case "amountdeposit":
      return { amount: state.amount + payload };

    case "withdraw":
      return { amount: state.amount - payload };

    case "showAll":
      return { amount: state.amount };

    default:
      return state;
  }
};

// import { combineReducers } from "redux"

// export const depositCash = (state,{type,payload})=>{
//     if(type === "depositCash"){
//         return state.cash + payload
//     }
//     return state
// }

// export const withdrawCash = (state,{type,payload})=>{
//     if(type === "withdrawCash"){
//         return state.cash - payload
//     }
// }

// export const showAllTransactions = ()=>{
//     if(type ==="showAll"){
//         return state.cash
//     }
// }

// export const RootReducers  = combineReducers({
//     deposit : depositCash,
//     withdraw : withdrawCash,
//     showAll : showAllTransactions
// })
