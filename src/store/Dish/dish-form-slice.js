import { createSlice } from "@reduxjs/toolkit";

const getFieldStateById = (state, id) => {
  switch(id) {
    case "dish_name":
      return state.dishName;
    case "preparation_time":
      return state.preparationTime;
    case "dish_type":
      return state.dishType;
    case "no_of_slices":
      return state.noOfSlices;
    case "diameter":
      return state.diameter;
    case "spiciness_scale":
      return state.spicinessScale;
    case "slices_of_bread":
      return state.slicesOfBread;
    default:
      return null;
  }
}

const initialDishFormState = {
  dishName: {value: "", touched: false},
  preparationTime: {value: "", touched: false},
  dishType: {value: "", touched: false},
  noOfSlices: {value: 0, touched: false},
  diameter: {value: 0, touched: false},
  spicinessScale: {value: 1, touched: false},
  slicesOfBread: {value: 0, touched: false},
};

const dishFormSlice = createSlice({
  name: "dishForm",
  initialState: initialDishFormState,
  reducers: {
    setFormFieldValue(state, action) {
      let field = getFieldStateById(state, action.payload.id);

      if(field) {
        field.value = action.payload.value;
      }
    },
    setFormFieldTouched(state, action) {
      let field = getFieldStateById(state, action.payload.id);

      if(field) {
        field.touched = true;
      }
    }
  },
});

export const dishFormActions = dishFormSlice.actions;

export default dishFormSlice.reducer;
