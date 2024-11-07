import Recipe from "../models/Recipe.model.js";

export const getAllRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.find();
    return res.status(200).json(recipes);
  } catch (error) {
    return next(error);
  }
};

export const getRecipeById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const recipe = await Recipe.findById(id);

    if (!recipe) {
      return res.status(404).json("Recipe not found");
    }
    return res.status(200).json(recipe);
  } catch (error) {
    return next(error);
  }
};

export const createNewRecipe = async (req, res, next) => {
  try {
    const newRecipe = new Recipe(req.body);

    if (req.file) {
      newRecipe.photo = req.file.path;
    }

    const recipe = await newRecipe.save();

    return res.status(201).json(recipe);
  } catch (error) {
    return next(error);
  }
};
