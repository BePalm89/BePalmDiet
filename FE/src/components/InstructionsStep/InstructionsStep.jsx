import "./InstructionsStep.css";

import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Button from "../Button/Button";
import Input from "../Input/Input";
import LayoutStep from "../LayoutStep/LayoutStep";
import TextArea from "../TextArea/TextArea";
import Title from "../Title/Title";

const InstructionsStep = ({ onFormValid, formData, updateFormData }) => {
  const [instructions, setInstructions] = useState([
    { title: "", description: "" },
  ]);

  const handleFieldChange = (index, field, value) => {
    const newFields = [...instructions];
    newFields[index][field] = value;
    setInstructions(newFields);
    updateFormData({ instructions: newFields });
  };

  const handleAddFields = () => {
    const values = [...instructions];
    values.push({ title: "", description: "" });
    setInstructions(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...instructions];
    values.splice(index, 1);
    setInstructions(values);
    updateFormData({ instructions: values });
  };

  useEffect(() => {
    if (formData.instructions.length) {
      setInstructions(formData.instructions);
    }
    // Check for validation
    onFormValid(true);
  }, []);

  return (
    <LayoutStep
      title="Add instructions"
      titleImg="Write the instruction fro the recipe"
      descriptionImg="Introduce a name and a description for every instruction"
      urlPhotoImg="/images/instructions.jpg"
    >
      {instructions.map((instruction, index) => (
        <div key={`${instruction}~${index}`} className="instructions-form">
          <Title text={`Instruction ${index + 1}`} level={4} />
          <div className="instruction-form-item">
            <Input
              label="title"
              type="text"
              required={true}
              value={instruction.title}
              onChange={(event) =>
                handleFieldChange(index, "title", event.target.value)
              }
              id="title"
            />
            <TextArea
              label="description"
              placeholder="Enter the description for the instruction"
              id="description"
              value={instruction.description}
              required={true}
              onChange={(event) =>
                handleFieldChange(index, "description", event.target.value)
              }
            />
          </div>
          <div className="remove-instruction-container">
            {instructions.length > 1 && (
              <Button
                label="remove instruction"
                icon={{ name: "plus", url: "/icons/minus.png" }}
                onClick={() => handleRemoveFields(index)}
                variant="danger"
              />
            )}
          </div>
        </div>
      ))}
      <div>
        <Button
          label="add instruction"
          icon={{ name: "plus", url: "/icons/plus.png" }}
          onClick={() => handleAddFields()}
        />
      </div>
    </LayoutStep>
  );
};

InstructionsStep.propTypes = {
  onFormValid: PropTypes.func,
  formData: PropTypes.object,
  updateFormData: PropTypes.func,
};

export default InstructionsStep;
