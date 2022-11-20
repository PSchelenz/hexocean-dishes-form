import Form from "../UI/Form/Form";
import InputField from "../UI/Form/InputField";
import SelectField from "../UI/Form/SelectField";
import FormHeader from "../Layout/FormHeader";
import Button from "../UI/Button";
import { useSelector } from "react-redux";
import {
  dishFormValidationSchema as validatorSchema,
  validateForm,
} from "../../validation/Dish/dish-form-validator";

import "./DishForm.css";

const DishForm = (props) => {
  const dishFormState = useSelector((state) => state);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Form className="dish-form" onSubmit={handleSubmit}>
      <FormHeader text="Choose your dish" />
      <InputField
        label={{ text: "Dish name" }}
        input={{
          type: "text",
          id: "dish_name",
          value: dishFormState.dishName.value,
        }}
        touched={dishFormState.dishName.touched}
        validate={(value) => {
          return validatorSchema.validateSync({ dishName: value });
        }}
      />
      <InputField
        label={{ text: "Preparation time" }}
        input={{
          type: "time",
          id: "preparation_time",
          value: dishFormState.preparationTime.value,
          step: "1"
        }}
        touched={dishFormState.preparationTime.touched}
        validate={(value) => {
          return validatorSchema.validateSync({ preparationTime: value });
        }}
      />
      <SelectField
        label={{ text: "Dish type" }}
        select={{
          type: "select",
          id: "dish_type",
          value: dishFormState.dishType.value,
        }}
        options={[
          { value: "pizza", text: "Pizza" },
          { value: "soup", text: "Soup" },
          { value: "sandwich", text: "Sandwich" },
        ]}
        touched={dishFormState.dishType.touched}
        validate={(value) => {
          return validatorSchema.validateSync({ dishType: value });
        }}
      />
      {dishFormState.dishType.value === "pizza" && (
        <>
          <InputField
            label={{ text: "Number of slices" }}
            input={{
              type: "number",
              id: "no_of_slices",
              value: dishFormState.noOfSlices.value,
            }}
            touched={dishFormState.noOfSlices.touched}
            validate={(value) => {
              return validatorSchema.validateSync({ noOfSlices: value });
            }}
          />
          <InputField
            label={{ text: "Diameter" }}
            input={{
              type: "number",
              id: "diameter",
              value: dishFormState.diameter.value,
              step: "0.01",
            }}
            touched={dishFormState.diameter.touched}
            validate={(value) => {
              return validatorSchema.validateSync({ diameter: value });
            }}
          />
        </>
      )}
      {dishFormState.dishType.value === "soup" && (
        <InputField
          label={{ text: "Spiciness Scale" }}
          input={{
            type: "number",
            id: "spiciness_scale",
            value: dishFormState.spicinessScale.value,
            min: "1",
            max: "10",
          }}
          touched={dishFormState.spicinessScale.touched}
          validate={(value) => {
            return validatorSchema.validateSync({ spicinessScale: value });
          }}
        />
      )}
      {dishFormState.dishType.value === "sandwich" && (
        <InputField
          label={{ text: "Slices of bread" }}
          input={{
            type: "number",
            id: "slices_of_bread",
            value: dishFormState.slicesOfBread.value,
          }}
          touched={dishFormState.slicesOfBread.touched}
          validate={(value) => {
            return validatorSchema.validateSync({ slicesOfBread: value });
          }}
        />
      )}
      <Button type="submit" text="Submit" />
    </Form>
  );
};

export default DishForm;
