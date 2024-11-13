import "./ReviewStep.css";

import PropTypes from "prop-types";

import Title from "../Title/Title";
import InfoPanel from "../InfoPanel/InfoPanel";

const ReviewStep = ({ formData }) => {
  return (
    <div className="review-container">
      <Title
        text="Review the recipe"
        level={2}
        style={{ textTransform: "uppercase" }}
      />
      <div className="info-container">
        <div className="photo-container">
          <img src={formData.photo} alt={formData.name} />
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
                  Number(formData.preparationTime) +
                  Number(formData.preparationTime)
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
                description: formData.rating,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

ReviewStep.propTypes = {
  formData: PropTypes.object,
};

export default ReviewStep;
