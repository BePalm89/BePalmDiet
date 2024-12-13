import "./Recipe.css";

import { useEffect, useState } from "react";

import { makeRequest } from "../../utils/api/makeRequest.js";
import { API_ENDPOINT } from "../../utils/api/url.enum.js";

import RecipeCard from "../../components/RecipeCard/RecipeCard";
import FiltersRecipe from "../../components/FilterRecipe/FiltersRecipe";
import Spinner from "../../components/Spinner/Spinner.jsx";

const Recipes = () => {
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
      filtered = recipes.filter(
        (recipe) => recipe.meal.toLowerCase() === filter,
      );
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
      <FiltersRecipe
        selectedFilter={selectedFilter}
        onFilterChange={filterRecipes}
        onSearchChange={handleSearchChange}
      />
      <div className="recipes-container">
        {loading ? (
          <Spinner />
        ) : (
          filteredRecipes?.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))
        )}
      </div>
    </div>
  );
};

export default Recipes;
