import { useEffect, useState } from "react";
import "./Recipe.css";
import Difficulty from "../../components/Difficulty/Difficulty";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/recipes")
      .then((res) => res.json())
      .then((res) => setRecipes(res));
  }, []);

  return (
    <div className="recipes-container">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe._id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Recipes;
