import fakeData from "../../eCommerceFakeData/fakeData"
import { GET_CART_FROM_LOCALSTORAGE, REMOVE_FROM_CART } from "../actions/type.js";
import { ADD_TO_CART } from "../actions/type.js";
import {addToDatabaseCart,getDatabaseCart, removeFromDatabaseCart} from "../../eCommerceFakeData/utilities/databaseManager"
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

    case GET_CART_FROM_LOCALSTORAGE:{
      const saveCart = getDatabaseCart()
      const productKeys = Object.keys(saveCart)
      const previousCut = productKeys.map(pdkey => {
        const product = state.fakeData.find(x => x.key === pdkey)
        product.quentity = saveCart[pdkey]
  
        return product
      })

      return {...state,cart:previousCut};
    }
    case REMOVE_FROM_CART: {

      const newCart=state.cart.filter(pd=>pd.key !== action.payload)
      removeFromDatabaseCart( action.payload)
    
      return {...state,cart:newCart};
    }
 
    default: {
      return state;
    }
  }
};

export default cartReducer;


