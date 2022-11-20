const Option = (props) => {
  const handleClick = event => {
    props.setIsActive(false);
    const value = event.target.dataset.value;
    
    try {
      props.validate(value);
    } catch (error) {
      props.handleError(error.errors);

      return;
    }

    props.dispatchAction(value);
    props.handleError('');
  }

  return (
    <li className="option" data-value={props.value} onClick={handleClick}>
      {props.text}
    </li>
  );
};

export default Option;