import Label from "./Label";
import Input from "./Input";
import Error from "./Error";

const InputField = (props) => {
  const { label, input, touched, validate } = props;

  let errorMessage = "";

  try {
    validate(input.value);
  } catch (error) {
    errorMessage = error.errors;
  }

  const inputClasses =
    errorMessage && touched
      ? `${props.className ?? ""} error`
      : props.className ?? "";

  const inputFieldClasses = errorMessage && touched ? "input-field error" : "input-field";

  return (
    <div className={inputFieldClasses}>
      <Input
        attributes={{
          ...input,
          name: input.name ?? input.id,
          className: inputClasses,
        }}
      />
      <Label htmlFor={input.id} text={label.text} />
      {errorMessage && touched && <Error message={errorMessage} />}
    </div>
  );
};

export default InputField;
