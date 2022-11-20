export const getCurrentFields = (fields) => {
  const requiredFields = {
    name: fields.dishName.value,
    preparation_time: fields.preparationTime.value,
    type: fields.dishType.value,
  };

  switch (fields.dishType.value) {
    case "pizza":
      return { ...requiredFields, no_of_slices: +fields.noOfSlices.value, diameter: +fields.diameter.value };
    case "soup":
      return { ...requiredFields, spiciness_scale: +fields.spicinessScale.value };
    case "sandwich":
      return { ...requiredFields, slices_of_bread: +fields.slicesOfBread.value };
    default:
      return {};
  }
};
