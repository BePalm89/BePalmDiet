import "./ReviewStep.css";

import { useEffect } from "react";
import PropTypes from "prop-types";

import InfoPanel from "../InfoPanel/InfoPanel";
import Title from "../Title/Title";

const ReviewStep = ({ onFormValid, formData }) => {
  console.log(formData);
  useEffect(() => {
    onFormValid(true);
  }, []);

  return (
    <div className="review-container">
      <Title
        text="Review the recipe"
        level={2}
        style={{ textTransform: "uppercase" }}
      />
      <div className="info-container">
        <div className="photo-container">
          <img src={formData.photo.url} alt={formData.name} />
        </div>
        <div className="title-description-container">
          <Title
            text={formData.name}
            level={1}
            style={{ color: "var(--color-primary-a50)" }}
          />
          <p className="description">{formData.description}</p>
          <InfoPanel
            panelTitle="Preparation time"
            infos={[
              {
                title: "Preparation",
                description: `${formData.preparationTime} minutes`,
              },
              {
                title: "Cooking",
                description: `${formData.cookingTime} minutes`,
              },
              {
                title: "Total",
                description: `${
                  Number(formData?.preparationTime) +
                  Number(formData?.cookingTime)
                } minutes`,
              },
            ]}
          />
          <InfoPanel
            panelTitle="More info"
            variant="secondary"
            infos={[
              {
                title: "Meal",
                description: formData.meal,
              },
              {
                title: "Difficulty",
                description: formData.difficulty,
              },
              {
                title: "Rating",
                description: formData.rating.toString(),
              },
            ]}
          />
        </div>
      </div>
      <InfoPanel
        panelTitle="Ingredients"
        infos={formData.ingredients.map((ingredient) => ({
          description: `• ${ingredient.amount ?? ""} ${ingredient.unit} ${
            ingredient.name
          }${ingredient.comments ? ` (${ingredient.comments})` : ""}`,
        }))}
      />
      <InfoPanel
        panelTitle="Instruction"
        variant="secondary"
        style="info-block-container-no-flex"
        infos={formData.instructions.map((instruction) => ({
          title: instruction.title,
          description: instruction.description,
        }))}
      />
    </div>
  );
};

ReviewStep.propTypes = {
  formData: PropTypes.object,
  onFormValid: PropTypes.func,
};

export default ReviewStep;
