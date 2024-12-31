import "./RecipeDetails.css";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { API_ENDPOINT } from "../../utils/api/url.enum.js";
import { makeRequest } from "../../utils/api/makeRequest.js";

import Button from "../../components/Button/Button.jsx";
import InfoPanel from "../../components/InfoPanel/InfoPanel.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";
import Title from "../../components/Title/Title.jsx";

const RecipeDetails = () => {
  let { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getRecipeById() {
      try {
        const { data } = await makeRequest({
          endpoint: `${API_ENDPOINT.GET_RECIPE_BY_ID}/${id}`,
          setLoading,
        });
        setRecipe(data);
      } catch (error) {
        console.log(error);
      }
    }
    getRecipeById();
  }, [id]);

  const deleteRecipe = async () => {
    const { status } = await makeRequest({
      endpoint: `${API_ENDPOINT.DELETE_RECIPE}/${id}`,
      method: "DELETE",
      setLoading,
    });

    if (status === 200) {
      navigate("/recipes");
    }
  };

  if (loading || !recipe) return <Spinner />;

  return (
    <>
      <div className="btn-container">
        <Button label="Go to recipes" onClick={() => navigate("/recipes")} />
        <Button label="Delete Recipe" variant="danger" onClick={deleteRecipe} />
      </div>

      <div className="recipe-detail-container">
        <div className="img-container">
          <img src={recipe?.photo} alt={recipe?.name} />
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
