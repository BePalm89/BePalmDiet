import "./RecipeCard.css";

import PropTypes from "prop-types";

import Difficulty from "../Difficulty/Difficulty";
import Link from "../Link/Link";
import Rating from "../Rating/Rating";
import Title from "../Title/Title";

const RecipeCard = ({ recipe }) => {
  const timeToDisplay = recipe.time.cookingTime + recipe.time.preparationTime;

  return (
    <div className="card-container">
      <Difficulty difficulty={recipe.difficulty} />
      <div className="card-img-container">
        <img src={recipe.photo} alt={recipe.name} />
      </div>
      <p className="recipe-meal">{recipe.meal}</p>
      <div className="card-info">
        <Title
          text={recipe.name}
          level={3}
          style={{
            color: "var(--color-surface-a0)",
            textTransform: "capitalize",
            fontSize: "var(--font-size-l)",
          }}
        />
        <div className="card-more-info">
          <div className="time-info">
            <img src="/icons/time.png" alt="time" id="time" />
            <p>{timeToDisplay} mins</p>
          </div>
          <Rating rating={recipe.rating} />
        </div>
        <Link label="Read recipe" url={`/recipes/${recipe._id}`} />
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf(["easy", "medium", "hard"]),
    meal: PropTypes.oneOf(["breakfast", "lunch", "dinner", "break"]),
    photo: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    time: PropTypes.shape({
      cookingTime: PropTypes.number.isRequired,
      preparationTime: PropTypes.number.isRequired,
    }),
  }),
};

export default RecipeCard;
