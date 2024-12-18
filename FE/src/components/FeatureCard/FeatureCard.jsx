import "./FeatureCard.css";

import PropTypes from "prop-types";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import PsychologyIcon from "@mui/icons-material/Psychology";
import FavoriteIcon from "@mui/icons-material/Favorite";

import Title from "../Title/Title.jsx";

const FeatureCard = ({ feature }) => {
  const iconsMap = {
    utensil: (
      <RestaurantMenuIcon
        style={{ fontSize: 40, color: "var(--color-primary-a40)" }}
      />
    ),
    thinking: (
      <PsychologyIcon
        style={{ fontSize: 40, color: "var(--color-accent-a40)" }}
      />
    ),
    heart: (
      <FavoriteIcon
        style={{ fontSize: 40, color: "var(--color-error-text-hover)" }}
      />
    ),
  };
  return (
    <div className="feature-card-container">
      <div className="feature-card-title">
        <p>{iconsMap[feature.icon]}</p>
        <Title
          text={feature.title}
          level={2}
          style={{ color: "var(--color-surface-a0)" }}
        />
      </div>
      <p className="feature-description">{feature.description}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  feature: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default FeatureCard;
