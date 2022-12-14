import * as yup from "yup";

export const dishFormValidationSchema = yup.object().shape({
  dishName: yup
    .string()
    .min(1, "Dish name cannot be empty"),
  preparationTime: yup
    .string()
    .matches(/^[0-9]{2}:[0-9]{2}:[0-9]{2}$/, "Time format should be HH:MM:SS"),
  dishType: yup
    .string(),
  noOfSlices: yup
    .number()
    .typeError("Number of slices should be an integer")
    .positive("Number of slices should be positive")
    .integer("Number of slices should be an integer"),
  diameter: yup
    .number()
    .typeError("Diameter value should be a number")
    .positive("Diameter value should be positive"),
  spicinessScale: yup
    .number()
    .typeError("Spiciness scale value should be a number")
    .integer("Spiciness scale value should be an integer")
    .min(1, "Spiciness scale should be in 1-10 range")
    .max(10, "Spiciness scale should be in 1-10 range"),
  slicesOfBread: yup
    .number()
    .typeError("Value of slices of bread should be a number")
    .min(1, "The number of slices should be bigger than 0"),
});

export const formIsValid = (fields) => {
  switch (fields.dishType.value) {
    case "pizza":
      return dishFormValidationSchema.isValidSync({
        dishName: fields.dishName.value,
        preparationTime: fields.preparationTime.value,
        noOfSlices: fields.noOfSlices.value,
        diameter: fields.diameter.value,
      });
    case "soup":
      return dishFormValidationSchema.isValidSync({
        dishName: fields.dishName.value,
        preparationTime: fields.preparationTime.value,
        spicinessScale: fields.spicinessScale.value,
      });
    case "sandwich":
      return dishFormValidationSchema.isValidSync({
        dishName: fields.dishName.value,
        preparationTime: fields.preparationTime.value,
        slicesOfBread: fields.slicesOfBread.value,
      });
    default:
      return false;
  }
};
