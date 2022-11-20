import { useState } from "react";
import Label from "./Label";
import Select from "./Select";
import Option from "./Option";
import Error from "./Error";

const SelectField = (props) => {
  const { label, select, touched, validate } = props;

  const [isActive, setIsActive] = useState(false);

  let errorMessage = "";

  try {
    validate(select.value);
  } catch (error) {
    errorMessage = error.errors;
  }

  const selectClasses = errorMessage && touched ? "select error" : "select";

  return (
    <div className="select-field">
      <Label htmlFor={select.id} text={label.text} />
      <Select
        id={select.id}
        name={select.name ?? select.id}
        value={select.value}
        className={selectClasses}
        isActive={isActive}
        setIsActive={setIsActive}
      >
        {props.options.map((option, index) => (
          <Option
            key={index}
            selectId={select.id}
            value={option.value}
            text={option.text}
            setIsActive={setIsActive}
          />
        ))}
      </Select>
      {errorMessage && touched && <Error message={errorMessage} />}
    </div>
  );
};

export default SelectField;
