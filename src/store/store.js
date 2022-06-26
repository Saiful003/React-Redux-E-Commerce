import { createStore, combineReducers } from "redux";
import { cartReducer } from "../reducers/cartReducer";
import { productsReducer } from "../reducers/productsReducer";
import { favouriteReducer } from "../reducers/favouriteReducer";
import { inputReducer } from "../reducers/inputReducer";
import { themeReducer } from "../reducers/themeReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  theme: themeReducer,
  input: inputReducer,
  favourite: favouriteReducer,
});

export const store = createStore(rootReducer);
