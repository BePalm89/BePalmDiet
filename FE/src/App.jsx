import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Recipes from "./pages/Recipes/Recipes";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";
import Activities from "./pages/Activities/Activities";
import Header from "./components/Header/Header";
import CreateRecipe from "./pages/CreateRecipe/CreateRecipe";
function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/recipes" element={<Recipes />}></Route>
          <Route path="/recipes/create" element={<CreateRecipe />}></Route>
          <Route path="/recipes/:id" element={<RecipeDetails />}></Route>
          <Route path="/activities" element={<Activities />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
