import "./CreateActivity.css";

import { useState } from "react";

import Input from "../../components/Input/Input.jsx";
import TextArea from "../../components/TextArea/TextArea.jsx";
import Title from "../../components/Title/Title.jsx";
import Button from "../../components/Button/Button.jsx";

const CreateActivity = () => {
  const [howToFields, setHowToFields] = useState([""]);

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

  return (
    <div className="create-activity-container">
      <h1>Create activity</h1>
      <form noValidate className="create-activity-form">
        <Input id="name" type="text" required={true} value="" label="name" />
        <TextArea
          id="description"
          value=""
          label="description"
          required={true}
        />
        <Input id="img" type="file" name="img" label="photo" />
        <Title text="Introduce the steps for doing the activity" level={4} />
        {howToFields.map((howTo, index) => (
          <div key={index} className="how-to-container">
            <Input label={`how to ${index + 1}`} type="text" />
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

        <Button label="create activity" type="submit" />
      </form>
    </div>
  );
};

export default CreateActivity;
