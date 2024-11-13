import "./InstructionsStep.css";

import { useState, useEffect } from "react";

import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";
import LayoutStep from "../LayoutStep/LayoutStep";
import Title from "../Title/Title";

const InstructionsStep = ({ onFormValid, formData, updateFormData }) => {
  const [instructions, setInstruction] = useState([
    { title: "", description: "" },
  ]);

  const handleFieldChange = (index, field, value) => {
    const newFields = [...instructions];
    newFields[index][field] = value;
    setInstruction(newFields);
    updateFormData({ instructions: newFields });
  };

  const handleAddFields = () => {
    const values = [...instructions];
    values.push({ title: "", description: "" });
    setInstruction(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...instructions];
    values.splice(index, 1);
    setInstruction(values);
    updateFormData({ instructions: values });
  };

  useEffect(() => {
    if (formData.instructions.length) {
      setInstruction(formData.instructions);
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
            <Button
              label="remove instruction"
              icon={{ name: "plus", url: "/icons/plus.png" }}
              onClick={() => handleRemoveFields(index)}
            />
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

export default InstructionsStep;
