import { configureStore } from "@reduxjs/toolkit";

//get the slice parts
import mealDBSlice from "../features/mealDB/mealDBSlice";

let store = configureStore({
  reducer: {
    meal: mealDBSlice,
  },
});

export default store;
