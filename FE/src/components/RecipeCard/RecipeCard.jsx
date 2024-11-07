import "./RecipeCard.css";
import Difficulty from "../Difficulty/Difficulty";
import Rating from "../Rating/Rating";
import Link from "../Link/Link";

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
        <h4>{recipe.name}</h4>
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

export default RecipeCard;
