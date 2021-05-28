import { createStore, combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const combinedReducer = combineReducers({
    cart: cartReducer,
    // user: userReducer,
})

export const store = createStore(combinedReducer, composeWithDevTools())