import { useDispatch } from "react-redux";
import { dishFormActions } from "../../../store/Dish/dish-form-slice";

const Input = (props) => {
  const dispatch = useDispatch();

  const handleBlur = () => {
    dispatch(dishFormActions.setFormFieldTouched({ id: props.attributes.id }));
  };

  const handleChange = (event) => {
    const value = event.target.value;

    dispatch(dishFormActions.setFormFieldValue({ id: props.attributes.id, value: value }));
  };

  return <input {...props.attributes} onChange={handleChange} onBlur={handleBlur} />;
};

export default Input;
