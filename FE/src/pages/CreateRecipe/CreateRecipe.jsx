import "./CreateRecipe.css";

import { useState } from "react";

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

  const [activeStep, setActiveStep] = useState(steps[0]);

  const handleNext = () => {
    const currentIndex = steps.indexOf(activeStep);
    setActiveStep(steps[currentIndex + 1]);
  };

  const handlePrev = () => {
    const currentIndex = steps.indexOf(activeStep);
    setActiveStep(steps[currentIndex - 1]);
  };

  return (
    <div className="create-recipe-container">
      <Wizard steps={steps} />
      <div className="main-container">
        <div>{activeStep.component()}</div>
        <div className="cta-container">
          <Button
            label="previous"
            onClick={handlePrev}
            disabled={steps.indexOf(activeStep) === 0}
          />
          <Button label="next" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default CreateRecipe;
