import mongoose from "mongoose";

const ingredientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    amount: { type: Number, required: true },
  },
  { timestamps: true, collation: "ingredients" }
);

const timeSchema = new mongoose.Schema(
  {
    cookingTime: { type: Number, required: true },
    preparationTime: { type: Number, required: true },
  },
  { timestamps: true, collation: "time" }
);

const stepsSchema = new mongoose.Schema(
  {
    stepName: { type: String, required: true },
    instruction: { type: String, required: true },
  },
  { timestamps: true, collation: "steps" }
);

const subRecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: [ingredientSchema],
  steps: [stepsSchema],
});

const recipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    ingredients: [ingredientSchema],
    steps: [stepsSchema],
    time: timeSchema,
    difficulty: { type: String, enum: ["easy", "medium", "hard"] },
    subRecipes: [subRecipeSchema],
    photo: { type: String, required: true },
    meal: {
      type: String,
      enum: ["Breakfast", "Lunch", "Dinner", "Break"],
      required: true,
    },
    comments: { type: String, required: false },
    rating: { type: Number, required: true, min: 1, max: 5 },
  },
  { timestamps: true, collection: "recipes" }
);

const Recipe = mongoose.model("recipes", recipeSchema, "recipes");

export default Recipe;
