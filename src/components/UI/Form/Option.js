import { useDispatch } from "react-redux";
import { dishFormActions } from "../../../store/Dish/dish-form-slice";

const Option = (props) => {
  const dispatch = useDispatch();

  const handleClick = (event) => {
    props.setIsActive(false);

    const value = event.target.dataset.value;

    dispatch(dishFormActions.setFormFieldTouched({ id: props.selectId }));
    dispatch(
      dishFormActions.setFormFieldValue({ id: props.selectId, value: value })
    );
  };

  return (
    <li className="option" data-value={props.value} onClick={handleClick}>
      {props.text}
    </li>
  );
};

export default Option;
