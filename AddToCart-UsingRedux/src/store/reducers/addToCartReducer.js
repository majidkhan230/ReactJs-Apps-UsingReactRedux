const initialState = {
  allproducts: [],
  addtocart: [],
};

export const addToCartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "allproducts":
      return { ...state, allproducts: [...payload] };
    case "addtocart":
      return { ...state, addtocart: [...state.addtocart, payload] }; 
    case "removeaddtocart":
      return {
        ...state,
        addtocart: state.addtocart.filter((item) => item.id !== payload.id), 
      };
    default:
      return state;
  }
};
