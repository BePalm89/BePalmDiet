import "./RecipeDetails.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Title from "../../components/Title/Title.jsx";
import InfoPanel from "../../components/InfoPanel/InfoPanel.jsx";
import Button from "../../components/Button/Button.jsx";

const RecipeDetails = () => {
  let { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/recipes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setRecipe(res);
      });
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="btn-container">
        <Button label="Go to recipes" onClick={() => navigate("/recipes")} />
      </div>
      <div className="recipe-detail-container">
        <div className="img-container">
          <img src={recipe.photo} alt={recipe.name} />
        </div>
        <div className="recipe-detail-info">
          <Title text={recipe.name} level={1} />
          <p>{recipe.description}</p>
          <div className="recipe-detail-more-info">
            <InfoPanel
              panelTitle="Preparation time"
              infos={[
                {
                  title: "Total",
                  description: `${
                    Number(recipe.time.preparationTime) +
                    Number(recipe.time.cookingTime)
                  } minutes`,
                },
                {
                  title: "Preparation",
                  description: `${recipe.time.preparationTime} minutes`,
                },
                {
                  title: "Cooking",
                  description: `${recipe.time.cookingTime} minutes`,
                },
              ]}
            />
            <InfoPanel
              panelTitle="More info"
              variant="secondary"
              infos={[
                {
                  title: "Meal",
                  description: recipe.meal,
                },
                {
                  title: "Difficulty",
                  description: recipe.difficulty,
                },
                {
                  title: "Rating",
                  description: recipe.rating.toString(),
                },
              ]}
            />
          </div>
          <InfoPanel
            panelTitle="Ingredients"
            variant="secondary"
            infos={recipe.ingredients.map((ingredient) => ({
              description: `• ${ingredient.amount ?? ""} ${ingredient.unit} ${
                ingredient.name
              }${ingredient.comments ? ` (${ingredient.comments})` : ""}`,
            }))}
          />
          <InfoPanel
            panelTitle="Instruction"
            style="info-block-container-no-flex"
            infos={recipe.instructions.map((instruction) => ({
              title: instruction.title,
              description: instruction.description,
            }))}
          />
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;
