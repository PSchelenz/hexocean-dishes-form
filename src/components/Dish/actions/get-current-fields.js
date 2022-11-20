export const getCurrentFields = (fields) => {
  const requiredFields = {
    name: fields.dishName,
    preparation_time: fields.preparationTime,
    type: fields.dishType,
  };

  switch (fields.dishType) {
    case "pizza":
      return { ...requiredFields, no_of_slices: fields.noOfSlices, diameter: fields.diameter };
    case "soup":
      return { ...requiredFields, spiciness_scale: fields.spicinessScale };
    case "sandwich":
      return { ...requiredFields, slices_of_bread: fields.slicesOfBread };
    default:
      return {};
  }
};
