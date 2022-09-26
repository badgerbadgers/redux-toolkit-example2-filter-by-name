import { configureStore } from "@reduxjs/toolkit";
import filterSliderReducer from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    productFilter: filterSliderReducer
  }
});
