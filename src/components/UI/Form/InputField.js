import Label from './Label';
import Input from './Input';
import Error from './Error';
import { useState } from 'react';

const InputField = (props) => {
  const { label, input, dispatchAction } = props;

  const [error, setError] = useState('');

  const handleError = (message) => {
    setError(message);
  }

  const inputClasses = error ? `${props.className ?? ''} error` : props.className ?? '';
  const inputFieldClasses = error ? "input-field error" : "input-field";

  return (
    <div className={inputFieldClasses}>
      <Input
        type={input.type}
        id={input.id}
        name={input.name ?? input.id}
        value={input.value}
        className={inputClasses}
        dispatchAction={dispatchAction}
        validate={input.validate}
        handleError={handleError}
      />
      <Label htmlFor={input.id} text={label.text} />
      {error && <Error message={error} />}
    </div>
  );
};

export default InputField;
