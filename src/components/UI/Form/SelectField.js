import { useState } from "react";
import Label from "./Label";
import Select from "./Select";
import Option from "./Option";
import Error from "./Error";

const SelectField = (props) => {
  const { label, select, dispatchAction } = props;

  const [error, setError] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleError = (message) => {
    setError(message);
  };

  const selectClasses = error ? "select error" : "select";

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
            value={option.value}
            text={option.text}
            validate={select.validate}
            dispatchAction={dispatchAction}
            handleError={handleError}
            setIsActive={setIsActive}
          />
        ))}
      </Select>
      {error && <Error message={error} />}
    </div>
  );
};

export default SelectField;
