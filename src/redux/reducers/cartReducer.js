import fakeData from "../../eCommerceFakeData/fakeData"
import { REMOVE_FROM_CART } from "../actions/type.js";
import { ADD_TO_CART } from "../actions/type.js";

const initialState = {
  cart: [],
  fakeData: fakeData,
 
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
     
      return state;
    }
    case REMOVE_FROM_CART: {
    
      return state;
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
