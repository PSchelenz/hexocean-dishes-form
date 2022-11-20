import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

const FormHeader = (props) => {
  return (
    <div className="form-header">
      <h2>
        {props.text}
      </h2>
      <FontAwesomeIcon icon={faUtensils} size="lg"/>
    </div>
  );
};

export default FormHeader;
