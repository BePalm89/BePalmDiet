import "./CreateActivity.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../components/Input/Input.jsx";
import TextArea from "../../components/TextArea/TextArea.jsx";
import Title from "../../components/Title/Title.jsx";
import Button from "../../components/Button/Button.jsx";

const CreateActivity = () => {
  const navigate = useNavigate();

  const [activityData, setActivityData] = useState({
    name: "",
    description: "",
    img: null,
    howTo: [],
  });

  const [howToFields, setHowToFields] = useState([""]);

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    img: "",
    howTo: [],
  });

  const [isValidForm, setIsValidForm] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: "This field is required",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: "",
      }));
    }

    setActivityData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleFileChange = (file) => {
    setActivityData((prevState) => ({
      ...prevState,
      img: file,
    }));
  };

  const handleHowToChange = (index, value) => {
    const updateHowToFields = [...howToFields];
    updateHowToFields[index] = value;

    const updatedErrors = [...errors.howTo];
    if (!value.trim()) {
      updatedErrors[index] = "This field is required";
    } else {
      updatedErrors[index] = "";
    }

    setHowToFields(updateHowToFields);
    setErrors((prevErrors) => ({
      ...prevErrors,
      howTo: updatedErrors,
    }));
    setActivityData((prevState) => ({
      ...prevState,
      howTo: updateHowToFields,
    }));
  };

  const handleAddStep = () => {
    const values = [...howToFields];
    values.push("");
    setHowToFields(values);
  };

  const handleRemoveStep = (index) => {
    const values = [...howToFields];
    values.splice(index, 1);
    setHowToFields(values);
  };

  const handleCreateActivity = (e) => {
    e.preventDefault();
    const body = new FormData();

    body.append("name", activityData.name);
    body.append("description", activityData.description);
    body.append("img", activityData.img);
    body.append("howTo", JSON.stringify(activityData.howTo));

    fetch("http://localhost:3000/api/v1/activities/create", {
      method: "POST",
      body: body,
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/activities");
      });
  };

  useEffect(() => {
    const isNameValid = activityData.name.trim() !== "";
    const isDescriptionValid = activityData.description.trim() !== "";
    const isImageValid = activityData.img !== null;
    const areHowToStepsValid = howToFields.every((step) => step.trim() !== "");
    const areHowToErrorsEmpty = errors.howTo.every((error) => error === "");
    setIsValidForm(
      isNameValid &&
        isDescriptionValid &&
        isImageValid &&
        areHowToStepsValid &&
        areHowToErrorsEmpty,
    );
  }, [activityData, howToFields, errors]);

  return (
    <div className="create-activity-container">
      <h1>Create activity</h1>
      <form noValidate className="create-activity-form">
        <Input
          label="name"
          id="name"
          required={true}
          placeholder="Enter the name of the activity"
          type="text"
          value={activityData.name}
          onChange={handleInputChange}
          error={errors.name}
        />
        <TextArea
          label="description"
          id="description"
          required={true}
          placeholder="Enter the description of the activity"
          value={activityData.description}
          onChange={handleInputChange}
          error={errors.description}
        />
        <Input
          id="img"
          type="file"
          name="img"
          label="photo"
          required={true}
          value={activityData.img?.name || ""}
          onFileChange={handleFileChange}
        />
        <Title text="Introduce the steps for doing the activity" level={4} />
        {howToFields.map((howTo, index) => (
          <div key={index} className="how-to-container">
            <Input
              id="step"
              label={`how to ${index + 1}`}
              type="text"
              required={true}
              value={howTo}
              onChange={(e) => handleHowToChange(index, e.target.value)}
              error={errors.howTo[index]}
            />
            <div className="remove-how-to-container">
              {howToFields.length > 1 && (
                <Button
                  label="Remove step"
                  icon={{ name: "minus", url: "/icons/minus.png" }}
                  variant="danger"
                  onClick={() => handleRemoveStep(index)}
                />
              )}
            </div>
          </div>
        ))}
        <div>
          <Button
            label="Add step"
            icon={{ name: "plus", url: "/icons/plus.png" }}
            onClick={() => handleAddStep()}
            variant="outline"
          />
        </div>

        <Button
          label="create activity"
          type="submit"
          onClick={handleCreateActivity}
          disabled={!isValidForm}
        />
      </form>
    </div>
  );
};

export default CreateActivity;
