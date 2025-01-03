import "./StartRecipeStep.css";

import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Input from "../Input/Input";
import LayoutStep from "../LayoutStep/LayoutStep";
import TextArea from "../TextArea/TextArea";

const StartRecipeStep = ({ onFormValid, formData, updateFormData }) => {
  const [localData, setLocalFormData] = useState({
    name: formData.name || "",
    description: formData.description || "",
    photo: formData.photo?.data || null,
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
    const photoURL = URL.createObjectURL(file);
    const updatedData = { ...localData, photo: { url: photoURL, data: file } };
    setLocalFormData(updatedData);
    updateFormData(updatedData);

    setTouched((prevTouched) => ({
      ...prevTouched,
      photo: true,
    }));
  };

  return (
    <LayoutStep
      title="Start the recipe"
      titleImg="Start creating your recipe"
      descriptionImg="Introduce a name, a description and a photo"
      urlPhotoImg="/images/start-recipe.jpg"
    >
      <Input
        label="name"
        id="name"
        required={true}
        placeholder="Enter the name of the recipe"
        type="text"
        onChange={handleInputChange}
        error={errors.name}
        value={localData.name}
      />
      <TextArea
        label="description"
        required={true}
        placeholder="Enter the description for the recipe"
        id="description"
        onChange={handleInputChange}
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
    </LayoutStep>
  );
};

StartRecipeStep.propTypes = {
  onFormValid: PropTypes.func,
  formData: PropTypes.object,
  updateFormData: PropTypes.func,
};

export default StartRecipeStep;
