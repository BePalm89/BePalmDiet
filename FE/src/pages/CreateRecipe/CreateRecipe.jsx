import "./CreateRecipe.css";

import React, { useState } from "react";

import Wizard from "../../components/Wizard/Wizard";
import Button from "../../components/Button/Button";
import StartRecipeStep from "../../components/StartRecipeStep/StartRecipeStep";
import IngredientsStep from "../../components/IngredientsStep/IngredientsStep";
import InstructionsStep from "../../components/InstructionsStep/InstructionsStep";
import MoreInfoStep from "../../components/MoreInfoStep/MoreInfoStep";
import ReviewStep from "../../components/ReviewStep/ReviewStep";
const CreateRecipe = () => {
  const [steps, setSteps] = useState([
    {
      key: "first",
      label: "Start the recipe",
      isDone: false,
      component: StartRecipeStep,
    },
    {
      key: "second",
      label: "Ingredients",
      isDone: false,
      component: IngredientsStep,
    },
    {
      key: "third",
      label: "Instruction",
      isDone: false,
      component: InstructionsStep,
    },
    {
      key: "fourth",
      label: "More info",
      isDone: false,
      component: MoreInfoStep,
    },
    {
      key: "fifth",
      label: "Review",
      isDone: false,
      component: ReviewStep,
    },
  ]);

  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    photo: null,
    ingredients: [],
    instructions: [],
  });

  const updateFormData = (newData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const handleFormValid = (isValid) => {
    setIsFormValid(isValid);

    setSteps((prevSteps) =>
      prevSteps.map((step, index) =>
        index === activeStepIndex ? { ...step, isDone: isValid } : step
      )
    );
  };

  const handleNext = () => {
    console.log(formData);
    setActiveStepIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setActiveStepIndex((prevIndex) => prevIndex - 1);
  };

  const ActiveStepComponent = steps[activeStepIndex].component;

  return (
    <div className="create-recipe-container">
      <Wizard steps={steps} />
      <div className="main-container">
        {React.createElement(ActiveStepComponent, {
          onFormValid: handleFormValid,
          formData,
          updateFormData,
        })}

        <div className="cta-container">
          <Button
            label="previous"
            onClick={handlePrev}
            disabled={activeStepIndex === 0}
            variant="secondary"
          />
          {/* <Button label="next" onClick={handleNext} disabled={!isFormValid} /> */}
          <Button label="next" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default CreateRecipe;
