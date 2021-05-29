import fakeData from "../../eCommerceFakeData/fakeData"
import { REMOVE_FROM_CART } from "../actions/type.js";
import { ADD_TO_CART } from "../actions/type.js";
import {addToDatabaseCart} from "../../eCommerceFakeData/utilities/databaseManager"
const initialState = {
  cart: [],
  fakeData: fakeData,
 
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const sameProduct = state.cart.find((pd) => pd.key === action.payload.key)
      let count = 1;
      let newCart;
      if (sameProduct) {
        count = action.payload.quentity + 1;
        action.payload.quentity = count;
        const otherProduct = state.cart.filter(x => x.key !== action.payload.key)
        newCart = [...otherProduct, sameProduct]
      } else {
  
        action.payload.quentity = count;
        newCart = [...state.cart, action.payload]
      }
      addToDatabaseCart(action.payload.key, count)
     
      return {...state,cart:newCart};
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
