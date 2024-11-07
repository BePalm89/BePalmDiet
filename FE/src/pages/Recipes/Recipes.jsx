import { useEffect, useState } from "react";
import "./Recipe.css";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import FiltersRecipe from "../../components/FilterRecipe/FiltersRecipe";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/recipes")
      .then((res) => res.json())
      .then((res) => {
        setRecipes(res);
        setFilteredRecipes(res);
      });
  }, []);

  const filterRecipes = (filter) => {
    setSelectedFilter(filter);

    let filtered = recipes;

    if (filter !== "all") {
      filtered = recipes.filter(
        (recipe) => recipe.meal.toLowerCase() === filter
      );
    }

    if (searchTerm) {
      filtered = filtered.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
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
        {filteredRecipes?.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
