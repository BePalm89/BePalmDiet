import "./Wizard.css";

import PropTypes from "prop-types";

const Wizard = ({ steps }) => {
  return (
    <div className="wizard-container">
      <ul>
        {steps.map((step, index) => (
          <li key={step.key}>
            <div className="step-info">
              <p>step &nbsp;{index + 1}</p>
              <p> {step.label}</p>
            </div>
            <div className={`step-number ${step.isDone ? "done" : ""}`}>
              <p>{index + 1}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

Wizard.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      isDone: PropTypes.bool,
      component: PropTypes.func,
    })
  ),
};

export default Wizard;
