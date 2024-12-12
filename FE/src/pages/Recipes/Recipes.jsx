import { useEffect, useState } from "react";
import "./Recipe.css";
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
    setLoading(true);
    fetch("http://localhost:3000/api/v1/recipes")
      .then((res) => res.json())
      .then((res) => {
        setRecipes(res);
        setFilteredRecipes(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
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
