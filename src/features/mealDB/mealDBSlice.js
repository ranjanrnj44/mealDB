import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//initialState
let initialState = {
  mealItem: [],
  searchItem: [],
};

//async actions creators
//list categories
export const fetchCategories = createAsyncThunk("meal/categories", async () => {
  let response = await axios
    .get("https://www.themealdb.com/api/json/v1/1/categories.php")
    .catch((error) => console.log(error));
  // console.log(response.data.categories);
  return response.data.categories;
});

//search result
export const fetchSearchItem = createAsyncThunk(
  "meal/search",
  async (search) => {
    let response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    return response.data.meals;
  }
);

let mealDBSlice = createSlice({
  name: "mealDB",
  initialState,
  reducers: {
    cleanUpItems: (state) => {
      state.searchItem = "";
    },
  },
  extraReducers: {
    //for listing all categories
    [fetchCategories.pending]: (state) => {
      return { ...state };
    },
    [fetchCategories.fulfilled]: (state, { payload }) => {
      return { ...state, mealItem: payload };
    },
    [fetchCategories.rejected]: () => {
      console.log("Something Wrong, got rejected");
    },
    //search items
    [fetchSearchItem.pending]: (state) => {
      return { ...state };
    },
    [fetchSearchItem.fulfilled]: (state, { payload }) => {
      return { ...state, searchItem: payload };
    },
    [fetchSearchItem.rejected]: () => {
      console.log("Something Wrong, got rejected");
    },
  },
});

//actions - cleanup
export const { cleanUpItems } = mealDBSlice.actions;

//export reducer
export default mealDBSlice.reducer;
