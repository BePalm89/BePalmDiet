import "./Wizard.css";

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

export default Wizard;
