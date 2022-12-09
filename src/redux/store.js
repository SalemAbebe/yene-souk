import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import filterReducer from "./slice/filterSlice";
import cartReducer from "./slice/cartSlice";
import ProductFilter from "../components/product/productFilter/ProductFilter";
import checkoutReducer from "./slice/checkoutSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  // filter: filterReducer,
  // product: ProductFilter,
  cart: cartReducer,
  checkout: checkoutReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
