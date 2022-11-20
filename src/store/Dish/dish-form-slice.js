import { createSlice } from "@reduxjs/toolkit";

const initialDishFormState = {
  dishName: "",
  preparationTime: "",
  dishType: "",
  noOfSlices: 0,
  diameter: 0,
  spicinessScale: 1,
  slicesOfBread: 0,
};

const dishFormSlice = createSlice({
  name: "dishForm",
  initialState: initialDishFormState,
  reducers: {
    setDishName(state, action) {
      state.dishName = action.payload;
    },
    setPreparationTime(state, action) {
      state.preparationTime = action.payload;
    },
    setDishType(state, action) {
      state.dishType = action.payload;
    },
    setNoOfSlices(state, action) {
      state.noOfSlices = action.payload;
    },
    setDiameter(state, action) {
      state.diameter = action.payload;
    },
    setSpicinessScale(state, action) {
      state.spicinessScale = action.payload;
    },
    setSlicesOfBread(state, action) {
      state.slicesOfBread = action.payload;
    },
  },
});

export const dishFormActions = dishFormSlice.actions;

export default dishFormSlice.reducer;
