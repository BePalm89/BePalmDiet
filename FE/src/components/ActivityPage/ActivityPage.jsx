import "./ActivityPage.css";

import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import Input from "../Input/Input.jsx";
import TextArea from "../TextArea/TextArea.jsx";
import Title from "../Title/Title.jsx";
import Button from "../Button/Button.jsx";

const ActivityPage = ({ title, activity, btn }) => {
  const [activityData, setActivityData] = useState({
    name: activity?.name ?? "",
    description: activity?.description ?? "",
    img: activity?.img ?? null,
    howTo: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    img: "",
    howTo: [],
  });

  const [howToFields, setHowToFields] = useState(
    activity?.howTo?.length ? activity.howTo : [""],
  );

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

  useEffect(() => {
    const isNameValid = activityData.name.trim() !== "";
    const isDescriptionValid = activityData.description.trim() !== "";
    const isImageValid = activityData.img !== null;
    const areHowToStepsValid = howToFields.every((step) => step.trim() !== "");
    const areHowToErrorsEmpty = errors.howTo.every(
      (error) => error === "" || error === undefined,
    );
    console.log(areHowToErrorsEmpty);
    console.log(errors.howTo);
    setIsValidForm(
      isNameValid &&
        isDescriptionValid &&
        isImageValid &&
        areHowToStepsValid &&
        areHowToErrorsEmpty,
    );
  }, [activityData, howToFields, errors]);

  return (
    <div className="activity-page-container">
      <h1>{title}</h1>
      <form noValidate className="activity-form">
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
          value={activityData.img?.name || activityData.img || ""}
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
          label={btn.labelBtn}
          type="submit"
          onClick={(e) => btn.handleSubmit(e, activityData)}
          disabled={!isValidForm}
        />
      </form>
    </div>
  );
};

ActivityPage.propTypes = {
  title: PropTypes.string.isRequired,
  activity: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    img: PropTypes.string,
    description: PropTypes.string,
    howTo: PropTypes.arrayOf(PropTypes.string),
  }),
  btn: PropTypes.shape({
    labelBtn: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }),
};

export default ActivityPage;
