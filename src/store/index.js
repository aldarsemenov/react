import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import menuSlice from "./slices/menuSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    menu:menuSlice
  },
});
