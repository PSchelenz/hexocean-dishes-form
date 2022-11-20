import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Select = (props) => {
  const handleClick = () => {
    props.setIsActive(prevState => !prevState);
  };

  const selectClasses = props.isActive ? `${props.className} active` : props.className;

  return (
    <div id={props.id} name={props.name} className="select-wrapper">
      <div className={selectClasses} onClick={handleClick}>{props.value}<FontAwesomeIcon icon={faAngleDown}/></div>
      <ul className="options-list">
        {props.children}
      </ul>
    </div>
  );
};

export default Select;
