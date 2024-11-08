import "./StartRecipeStep.css";

import Input from "../Input/Input";
import Image from "../Image/Image";
import TextArea from "../TextArea/TextArea";
import { useEffect, useState } from "react";

const StartRecipeStep = ({ onFormValid, formData, updateFormData }) => {
  const [localData, setLocalFormData] = useState({
    name: formData.name || "",
    description: formData.description || "",
    photo: formData.photo || null,
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    photo: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    description: false,
    photo: false,
  });

  useEffect(() => {
    setTouched({
      name: !!formData.name,
      description: !!formData.description,
      photo: !!formData.photo,
    });
  }, [formData]);

  const validateForm = () => {
    const isValid =
      localData.name &&
      localData.description &&
      localData.photo &&
      touched.name &&
      touched.description &&
      touched.photo;

    onFormValid(isValid);
  };

  useEffect(() => {
    if (Object.values(touched).includes(true)) {
      validateForm();
    }
  }, [localData, touched]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;

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
    const updatedData = { ...localData, [id]: value };
    setLocalFormData(updatedData);
    updateFormData(updatedData);

    setTouched((prevTouched) => ({
      ...prevTouched,
      [id]: true,
    }));
  };

  const handleFileChange = (file) => {
    const updatedData = { ...localData, photo: file };
    setLocalFormData(updatedData);
    updateFormData(updatedData);

    setTouched((prevTouched) => ({
      ...prevTouched,
      photo: true,
    }));
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
            value={localData.name}
          />
          <TextArea
            label="description"
            required={true}
            placeholder="Enter the description for the recipe"
            id="description"
            fnc={handleInputChange}
            error={errors.description}
            value={localData.description}
          />
          <Input
            label="photo"
            id="photo"
            required={true}
            type="file"
            value={localData.photo?.name || ""}
            onFileChange={handleFileChange}
          />
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
