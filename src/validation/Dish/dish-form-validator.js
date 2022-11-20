import * as yup from "yup";

export const dishFormValidationSchema = yup.object().shape({
  dishName: yup.string().min(1, "Dish name cannot be empty"),
  preparationTime: yup
    .string()
    .matches(/^[0-9]{2}:[0-9]{2}:[0-9]{2}$/, "Time format should be HH:MM:SS"),
  dishType: yup.string(),
  noOfSlices: yup
    .number()
    .positive("Number of slices should be positive")
    .integer("Number of slices should be an integer"),
  diameter: yup.number().positive("Diameter value should be positive"),
  spicinessScale: yup
    .number()
    .integer()
    .min(1, "Spiciness scale should be in 1-10 range")
    .max(10, "Spiciness scale should be in 1-10 range"),
  slicesOfBread: yup
    .number()
    .min(1, "The number of slices should be bigger than 0"),
});

export const validateForm = (fields) => {
  switch (fields.dishType) {
    case "pizza":
      return dishFormValidationSchema.isValidSync({
        dishName: fields.dishName,
        preparationTime: fields.preparationTime,
        noOfSlices: fields.noOfSlices,
        diameter: fields.diameter,
      });
    case "soup":
      return dishFormValidationSchema.isValidSync({
        dishName: fields.dishName,
        preparationTime: fields.preparationTime,
        spicinessScale: fields.spicinessScale,
      });
    case "sandwich":
      return dishFormValidationSchema.isValidSync({
        dishName: fields.dishName,
        preparationTime: fields.preparationTime,
        slicesOfBread: fields.slicesOfBread,
      });
    default:
      return false;
  }
};
