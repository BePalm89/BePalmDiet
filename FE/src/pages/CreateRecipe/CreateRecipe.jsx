import "./CreateRecipe.css";

import React, { useState } from "react";

import Wizard from "../../components/Wizard/Wizard";
import Button from "../../components/Button/Button";
import StartRecipeStep from "../../components/StartRecipeStep/StartRecipeStep";
import IngredientsStep from "../../components/IngredientsStep/IngredientsStep";
import InstructionsStep from "../../components/InstructionsStep/InstructionsStep";
import MoreInfoStep from "../../components/MoreInfoStep/MoreInfoStep";
import ReviewStep from "../../components/ReviewStep/ReviewStep";
import {useNavigate} from "react-router-dom";

const CreateRecipe = () => {
  const navigate = useNavigate();

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
    difficulty: "",
    meal: "",
    preparationTime: "",
    cookingTime: "",
    rating: "",
    comments: "",
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

  const handleSubmit = () => {
    const body = new FormData();

    console.log(formData);

    const time = {
      cookingTime: formData.cookingTime,
      preparationTime: formData.preparationTime,
    }

    body.append("name", formData.name);
    body.append("description", formData.description);
    body.append("photo", formData.photo.data);
    body.append("ingredients", JSON.stringify(formData.ingredients));
    body.append("instructions", JSON.stringify(formData.instructions));
    body.append("time", JSON.stringify(time));
    body.append("difficulty", formData.difficulty);
    body.append("meal", formData.meal);
    body.append("comments", formData.comments);
    body.append("rating", formData.rating);

    fetch("http://localhost:3000/api/v1/recipes/create", {
      method: "POST",
      body: body,
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/recipes");
      });
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
          {steps[activeStepIndex].key === "fifth" ? (
            <Button label="submit" onClick={handleSubmit} />
          ) : (
            <Button label="next" onClick={handleNext} />
          )}
          {/* <Button label="next" onClick={handleNext} disabled={!isFormValid} /> */}
        </div>
      </div>
    </div>
  );
};

export default CreateRecipe;
