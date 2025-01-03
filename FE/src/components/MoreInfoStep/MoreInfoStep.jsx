import "./MoreInfoStep.css";

import { useState } from "react";
import PropTypes from "prop-types";

import Input from "../Input/Input";
import LayoutStep from "../LayoutStep/LayoutStep";
import Select from "../Select/Select";
import TextArea from "../TextArea/TextArea";

const MoreInfoStep = ({ onFormValid, formData, updateFormData }) => {
  const [moreInfoData, setMoreInfoData] = useState({
    difficulty: formData.difficulty || "",
    meal: formData.meal || "",
    preparationTime: formData.preparationTime || "",
    cookingTime: formData.cookingTime || "",
    rating: formData.rating || "",
    comments: formData.comments || "",
  });

  const difficultyOptions = [
    { label: "easy", value: "easy" },
    { label: "medium", value: "medium" },
    { label: "hard", value: "hard" },
  ];

  const mealOptions = [
    { label: "breakfast", value: "breakfast" },
    { label: "lunch", value: "lunch" },
    { label: "break", value: "break" },
    { label: "dinner", value: "dinner" },
  ];

  const ratingOptions = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
  ];

  const handleInputChange = (field, value) => {
    const newFields = { ...moreInfoData };
    newFields[field] = value;
    setMoreInfoData(newFields);
    updateFormData(newFields);
    onFormValid(true);
  };

  return (
    <LayoutStep
      title="Add more info"
      titleImg="Add more info for the recipe"
      descriptionImg="Add the difficulty, the rating, for which type of meal is the recipe and the time for preparing it and cooking it"
      urlPhotoImg="/images/more-info.jpg"
    >
      <div className="more-info-form-item">
        <Select
          options={difficultyOptions}
          id="difficulty"
          label="Difficulty"
          placeholder="Select the difficulty"
          value={moreInfoData.difficulty}
          onChange={(option) => handleInputChange("difficulty", option.value)}
        />
        <Select
          options={mealOptions}
          id="meal"
          label="meal"
          placeholder="Select the meal"
          value={moreInfoData.meal}
          onChange={(option) => handleInputChange("meal", option.value)}
        />
      </div>
      <div className="more-info-form-item">
        <Input
          label="preparation time"
          id="preparation-time"
          placeholder="Enter the preparation time"
          value={moreInfoData.preparationTime}
          type="number"
          onChange={(e) => handleInputChange("preparationTime", e.target.value)}
        />
        <Input
          label="cooking time"
          id="cooking-time"
          placeholder="Enter the cooking time"
          value={moreInfoData.cookingTime}
          type="number"
          onChange={(e) => handleInputChange("cookingTime", e.target.value)}
        />
      </div>
      <Select
        options={ratingOptions}
        id="rating"
        label="rating"
        placeholder="Select the rating"
        value={moreInfoData.rating}
        onChange={(option) => handleInputChange("rating", option.value)}
      />
      <TextArea
        label="comments"
        placeholder="Enter the description for the recipe"
        id="comments"
        value={moreInfoData.comments}
        onChange={(event) => handleInputChange("comments", event.target.value)}
      />
    </LayoutStep>
  );
};

MoreInfoStep.propTypes = {
  onFormValid: PropTypes.func,
  formData: PropTypes.object,
  updateFormData: PropTypes.func,
};

export default MoreInfoStep;
