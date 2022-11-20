import Card from "../UI/Card";

import "./ResponseContainer.css";

const ResponseContainer = (props) => {
  const containerClass = Object.keys(props.response).length
    ? "response-container show"
    : "response-container";

  return (
    <Card className={containerClass}>
      <h3>Your dish's data</h3>
      {Object.keys(props.response).map((key, index) => (
        <div key={index} className="response-row">
          <span className="response-key">{key}:</span>
          <span className="response-value">{props.response[key]}</span>
        </div>
      ))}
    </Card>
  );
};

export default ResponseContainer;
