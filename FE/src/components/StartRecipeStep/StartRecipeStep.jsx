import "./StartRecipeStep.css";

import Input from "../Input/Input";
import Image from "../Image/Image";
import TextArea from "../TextArea/TextArea";
import { useState } from "react";

const StartRecipeStep = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    photo: null,
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    photo: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    console.log(id);
    console.log(value);
    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: "This field is quired",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: "",
      }));
    }
  };

  return (
    <div className="start-recipe-container">
      <h2>Start the recipe</h2>
      <div className="start-recipe-body">
        <div className="start-recipe-form">
          <Input
            label="name"
            id="name"
            required={true}
            placeholder="Enter the name of the recipe"
            type="text"
            fnc={handleInputChange}
            error={errors.name}
          />
          <TextArea
            label="description"
            required={true}
            placeholder="Enter the description for the recipe"
            id="description"
            fnc={handleInputChange}
            error={errors.description}
          />
          <Input label="photo" id="photo" required={true} type="file" />
        </div>
        <Image
          title="Start creating your recipe"
          description="Introduce a name, a description and a photo"
          urlPhoto="/images/start-recipe.jpg"
        />
      </div>
    </div>
  );
};

export default StartRecipeStep;
