import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Recipes from "./pages/Recipes/Recipes";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";
import Activities from "./pages/Activities/Activities";
import Header from "./components/Header/Header";
import CreateRecipe from "./pages/CreateRecipe/CreateRecipe";
import CreateActivity from "./pages/CreateActivity/CreateActivity.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
    <div>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/recipes" element={<Recipes />}></Route>
            <Route path="/recipes/create" element={<CreateRecipe />}></Route>
            <Route path="/recipes/:id" element={<RecipeDetails />}></Route>
            <Route path="/activities" element={<Activities />}></Route>
            <Route
              path="/activities/create"
              element={<CreateActivity />}
            ></Route>
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
