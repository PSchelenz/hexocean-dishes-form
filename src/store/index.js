import { configureStore } from "@reduxjs/toolkit";
import dishFormReducer from './Dish/dish-form-slice';

const store = configureStore({
  reducer: dishFormReducer,
});

export default store;