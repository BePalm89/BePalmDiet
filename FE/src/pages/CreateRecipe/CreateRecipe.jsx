import "./CreateRecipe.css";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { makeRequest } from "../../utils/api/makeRequest.js";
import { API_ENDPOINT } from "../../utils/api/url.enum.js";

import Banner from "../../components/Banner/Banner";
import Button from "../../components/Button/Button";
import IngredientsStep from "../../components/IngredientsStep/IngredientsStep";
import InstructionsStep from "../../components/InstructionsStep/InstructionsStep";
import MoreInfoStep from "../../components/MoreInfoStep/MoreInfoStep";
import ReviewStep from "../../components/ReviewStep/ReviewStep";
import Spinner from "../../components/Spinner/Spinner.jsx";
import StartRecipeStep from "../../components/StartRecipeStep/StartRecipeStep";
import Wizard from "../../components/Wizard/Wizard";

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

  const [loading, setLoading] = useState(false);
  const [banner, setBanner] = useState({
    isOpen: false,
    level: "info",
    message: "",
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
        index === activeStepIndex ? { ...step, isDone: isValid } : step,
      ),
    );
  };

  const handleNext = () => {
    setActiveStepIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setActiveStepIndex((prevIndex) => prevIndex - 1);
  };

  const handleSubmit = async () => {
    const body = new FormData();

    const time = {
      cookingTime: formData.cookingTime,
      preparationTime: formData.preparationTime,
    };

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

    const { status } = await makeRequest({
      endpoint: API_ENDPOINT.CREATE_RECIPE,
      method: "POST",
      isJSON: false,
      body,
      setLoading,
      setBanner,
    });

    if (status === 201) {
      setBanner({
        isOpen: true,
        level: "success",
        message: `Recipe ${formData.name} successfully created`,
      });
      setTimeout(() => {
        navigate("/recipes");
      }, 1000);
    }
  };

  const ActiveStepComponent = steps[activeStepIndex].component;
  const handleCloseBanner = () => {
    setBanner({ ...banner, isOpen: false });
  };

  return (
    <>
      <Banner
        isOpen={banner.isOpen}
        level={banner.level}
        message={banner.message}
        onClose={handleCloseBanner}
      />
      <div className="create-recipe-container">
        <Wizard steps={steps} />
        <div className="main-container">
          {loading ? (
            <Spinner />
          ) : (
            React.createElement(ActiveStepComponent, {
              onFormValid: handleFormValid,
              formData,
              updateFormData,
            })
          )}

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
    </>
  );
};

export default CreateRecipe;
