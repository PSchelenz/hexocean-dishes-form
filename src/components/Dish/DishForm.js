import Form from "../UI/Form/Form";
import InputField from "../UI/Form/InputField";
import SelectField from "../UI/Form/SelectField";
import TimeField from "../UI/Form/TimeField";
import FormHeader from "../Layout/FormHeader";
import Button from "../UI/Button";
import { useSelector, useDispatch } from "react-redux";
import { dishFormActions } from "../../store/Dish/dish-form-slice";
import { dishFormValidationSchema as validatorSchema, validateForm } from "../../validation/Dish/dish-form-validator";

import "./DishForm.css";

const DishForm = (props) => {
  const dishFormState = useSelector((state) => state);
  const dispatch = useDispatch();

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
          value: dishFormState.dishName,
          validate: (value) => {
            return validatorSchema.validateSync({ dishName: value });
          },
        }}
        dispatchAction={(value) => dispatch(dishFormActions.setDishName(value))}
      />
      <TimeField
        label={{ text: "Preparation time" }}
        input={{
          type: "time",
          id: "prep_time",
          value: dishFormState.preparationTime,
          validate: (value) => {
            return validatorSchema.validateSync({ preparationTime: value });
          },
        }}
        dispatchAction={(value) =>
          dispatch(dishFormActions.setPreparationTime(value))
        }
      />
      <SelectField
        label={{ text: "Dish type" }}
        select={{
          type: "select",
          id: "dish_type",
          value: dishFormState.dishType,
          validate: (value) => {
            return validatorSchema.validateSync({ dishType: value });
          },
        }}
        options={[
          { value: "pizza", text: "Pizza" },
          { value: "soup", text: "Soup" },
          { value: "sandwich", text: "Sandwich" },
        ]}
        dispatchAction={(value) => dispatch(dishFormActions.setDishType(value))}
      />
      {dishFormState.dishType === "pizza" && (
        <>
          <InputField
            label={{ text: "Number of slices" }}
            input={{
              type: "number",
              id: "no_of_slices",
              value: dishFormState.noOfSlices,
              validate: (value) => {
                return validatorSchema.validateSync({ noOfSlices: value });
              },
            }}
            dispatchAction={(value) =>
              dispatch(dishFormActions.setNoOfSlices(value))
            }
          />
          <InputField
            label={{ text: "Diameter" }}
            input={{
              type: "number",
              id: "diameter",
              value: dishFormState.diameter,
              step: "0.01",
              validate: (value) => {
                return validatorSchema.validateSync({ diameter: value });
              },
            }}
            dispatchAction={(value) =>
              dispatch(dishFormActions.setDiameter(value))
            }
          />
        </>
      )}
      {dishFormState.dishType === "soup" && (
        <InputField
          label={{ text: "Spiciness Scale" }}
          input={{
            type: "number",
            id: "spiciness_scale",
            value: dishFormState.spicinessScale,
            min: "1",
            max: "10",
            validate: (value) => {
              return validatorSchema.validateSync({ spicinessScale: value });
            },
          }}
          dispatchAction={(value) =>
            dispatch(dishFormActions.setSpicinessScale(value))
          }
        />
      )}
      {dishFormState.dishType === "sandwich" && (
        <InputField
          label={{ text: "Slices of bread" }}
          input={{
            type: "number",
            id: "slices_of_bread",
            value: dishFormState.slicesOfBread,
            validate: (value) => {
              return validatorSchema.validateSync({ slicesOfBread: value });
            },
          }}
          dispatchAction={(value) =>
            dispatch(dishFormActions.setSlicesOfBread(value))
          }
        />
      )}
      <Button type="submit" text="Submit" />
    </Form>
  );
};

export default DishForm;
