import "./Recipe.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { makeRequest } from "../../utils/api/makeRequest.js";
import { API_ENDPOINT } from "../../utils/api/url.enum.js";

import Button from "../../components/Button/Button.jsx";
import FiltersRecipe from "../../components/FilterRecipe/FiltersRecipe";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import Spinner from "../../components/Spinner/Spinner.jsx";
import Title from "../../components/Title/Title.jsx";

const Recipes = () => {
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getAllRecipes() {
      try {
        const { data } = await makeRequest({
          endpoint: API_ENDPOINT.GET_ALL_RECIPES,
          setLoading,
        });
        setRecipes(data);
        setFilteredRecipes(data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllRecipes();
  }, []);

  const filterRecipes = (filter) => {
    setSelectedFilter(filter);

    let filtered = recipes;

    if (filter !== "all") {
      if (filter === "lunch" || filter === "dinner") {
        filtered = recipes.filter(
          (recipe) => recipe.meal.toLowerCase() === filter,
        );
      }

      if (filter === "meat" || filter === "fish") {
        filtered = recipes.filter((recipe) =>
          recipe.ingredients.some(
            (ingredient) => ingredient.type.toLowerCase() === filter,
          ),
        );
      }
    }

    if (searchTerm) {
      filtered = filtered.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    setFilteredRecipes(filtered);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    filterRecipes(selectedFilter);
  };

  return (
    <div className="recipes-page">
      <div className="recipes-page-header">
        <Title text="Recipes' List" level={1} />
        <Button
          label="Create recipe"
          onClick={() => navigate("/recipes/create")}
        />
      </div>
      <FiltersRecipe
        selectedFilter={selectedFilter}
        onFilterChange={filterRecipes}
        onSearchChange={handleSearchChange}
      />
      <div className="recipes-container">
        {loading ? (
          <Spinner />
        ) : filteredRecipes.length ? (
          filteredRecipes?.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))
        ) : (
          <Title text="No recipe found" level={2} />
        )}
      </div>
    </div>
  );
};

export default Recipes;
