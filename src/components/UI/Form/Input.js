const Input = (props) => {
  const handleBlur = (event) => {
    console.log('Blur');
    const value = event.target.value;

    try {
      props.validate(value);
    } catch (error) {
      props.handleError(error.errors);

      return;
    }

    props.dispatchAction(value);
    props.handleError("");
  };

  return (
    <input
      type={props.type}
      id={props.id}
      name={props.name}
      className={props.className}
      defaultValue={props.value}
      placeholder=" "
      step={props.step}
      onBlur={handleBlur}
    />
  );
};

export default Input;
