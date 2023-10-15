import { combineReducers } from "redux";
import productReducer from './productSlice';
import detailReducer from './detailSlice';
import cartReducer from './cartSlice';

export const rootReducer = combineReducers({
    product: productReducer,
    details: detailReducer,
    cart: cartReducer,
});