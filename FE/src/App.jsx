import "./App.css";

import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer.jsx";

import Home from "./pages/Home/Home";
import Recipes from "./pages/Recipes/Recipes";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";
import Activities from "./pages/Activities/Activities";
import CreateRecipe from "./pages/CreateRecipe/CreateRecipe";
import CreateActivity from "./pages/CreateActivity/CreateActivity.jsx";
import EditActivity from "./pages/EditActivity/EditActivity.jsx";

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
            <Route
              path="/activities/edit/:id"
              element={<EditActivity />}
            ></Route>
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
