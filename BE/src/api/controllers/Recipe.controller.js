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

    const { name, description, difficulty, meal, comments, rating } = req.body;

    const time = JSON.parse(req.body.time);

    const instructions = JSON.parse(req.body.instructions);

    const ingredients = JSON.parse(req.body.ingredients);

    const photo = req.file ? req.file.path : null;

    const newRecipe = new Recipe({
      name,
      description,
      time,
      difficulty,
      meal,
      comments,
      rating,
      photo,
      instructions,
      ingredients
    });

    const recipe = await newRecipe.save();

    return res.status(201).json(recipe);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};
