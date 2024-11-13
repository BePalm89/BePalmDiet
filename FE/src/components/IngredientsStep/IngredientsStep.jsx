import "./IngredientsStep.css";

import { useEffect, useState } from "react";

import Button from "../Button/Button";
import Input from "../Input/Input";
import Select from "../Select/Select";
import TextArea from "../TextArea/TextArea";
import LayoutStep from "../LayoutStep/LayoutStep";
import Title from "../Title/Title";
const IngredientsStep = ({ onFormValid, formData, updateFormData }) => {
  const [ingredientFields, setIngredientFields] = useState([
    { name: "", amount: "", type: "", unit: "", comments: "" },
  ]);

  const handleAddFields = () => {
    const values = [...ingredientFields];
    values.push({ name: "", amount: "", type: "", unit: "", comments: "" });
    setIngredientFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...ingredientFields];
    values.splice(index, 1);
    setIngredientFields(values);
  };

  const handleFieldChange = (index, field, value) => {
    const newFields = [...ingredientFields];
    newFields[index][field] = value;
    setIngredientFields(newFields);
    updateFormData({ ingredients: newFields });
  };

  useEffect(() => {
    if (formData.ingredients.length) {
      setIngredientFields(formData.ingredients);
    }
    // Check for validation
    onFormValid(true);
  }, []);

  const typeOptions = [
    { label: "liquid", value: "liquid", icon: "/icons/liquid.png" },
    { label: "meat", value: "meat", icon: "/icons/meat.png" },
    { label: "fish", value: "fish", icon: "/icons/fish.png" },
    { label: "legume", value: "legume", icon: "/icons/legume.png" },
    { label: "vegetables", value: "vegetables", icon: "/icons/vegetables.png" },
    { label: "spices", value: "spices", icon: "/icons/spices.png" },
    {
      label: "animal products",
      value: "animal-products",
      icon: "/icons/eggs.png",
    },
    { label: "starches", value: "starches", icon: "/icons/starches.png" },
  ];

  const unitLiquidOptions = [
    { label: "ml", value: "ml" },
    { label: "l", value: "l" },
  ];

  const unitSolidOptions = [
    { label: "g", value: "g" },
    { label: "kg", value: "kg" },
  ];

  return (
    <LayoutStep
      title="Add the ingredients"
      titleImg="Start introducing the ingredients"
      descriptionImg="Introduce the ingredients with their nama, type, amount and if you need some comments"
      urlPhotoImg="/images/ingredients.jpg"
    >
      {ingredientFields.map((ingredient, index) => (
        <div key={`${ingredient}~${index}`} className="ingredient-form">
          <Title text={`Ingredient ${index + 1}`} level={4} />
          <div className="ingredient-form-item">
            <Input
              label="name"
              type="text"
              required={true}
              value={ingredient.name}
              onChange={(event) =>
                handleFieldChange(index, "name", event.target.value)
              }
              name="name"
              id="name"
            />
            <Select
              options={typeOptions}
              required={true}
              id="type"
              label="type"
              placeholder="select the type"
              value={ingredient.type}
              onChange={(option) =>
                handleFieldChange(index, "type", option.value)
              }
            />
          </div>
          {ingredient?.type && (
            <>
              {ingredient.type !== "spices" && (
                <div className="ingredient-form-item">
                  <Input
                    label="amount"
                    type="text"
                    required={true}
                    value={ingredient.amount}
                    onChange={(event) =>
                      handleFieldChange(index, "amount", event.target.value)
                    }
                  />
                  <Select
                    options={
                      ingredient.type === "liquid"
                        ? unitLiquidOptions
                        : unitSolidOptions
                    }
                    id="unit"
                    label="unit"
                    placeholder="select the unit"
                    value={ingredient.unit}
                    onChange={(option) =>
                      handleFieldChange(index, "unit", option.value)
                    }
                  />
                </div>
              )}
              <TextArea
                label="comments"
                placeholder="Enter the description for the recipe"
                id="comments"
                value={ingredient.comments}
                onChange={(event) =>
                  handleFieldChange(index, "comments", event.target.value)
                }
              />
            </>
          )}
          <div className="remove-ingredient-container">
            <Button
              label="remove ingredient"
              icon={{ name: "plus", url: "/icons/plus.png" }}
              onClick={() => handleRemoveFields(index)}
            />
          </div>
        </div>
      ))}
      <div>
        <Button
          label="add ingredient"
          icon={{ name: "plus", url: "/icons/plus.png" }}
          onClick={() => handleAddFields()}
        />
      </div>
    </LayoutStep>
  );
};

export default IngredientsStep;
