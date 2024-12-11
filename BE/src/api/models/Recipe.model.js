import mongoose from "mongoose";

const ingredientSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    type: { type: String, enum: ["liquid", "meat", "fish", "legume", "vegetables", "spices", "animal-products", "starches", "nuts"], required: false },
    amount: { type: Number, required: false },
    unit: { type: String, enum: ["ml", "l", "g", "kg", ""], required: false },
    comments: { type: String, required: false },
  },
  { timestamps: true, collation: "ingredients" }
);

const timeSchema = new mongoose.Schema(
  {
    cookingTime: { type: Number, required: false },
    preparationTime: { type: Number, required: false },
  },
  { timestamps: true, collation: "time" }
);

const instructionSchema = new mongoose.Schema(
  {
    title: { type: String, required: false },
    description: { type: String, required: false },
  },
  { timestamps: true, collation: "steps" }
);

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
    time: timeSchema,
    difficulty: { type: String, enum: ["easy", "medium", "hard"] },
    photo: { type: String, required: false },
    instructions: [instructionSchema],
    meal: {
      type: String,
      enum: ["breakfast", "lunch", "dinner", "break"],
      required: false,
    },
    comments: { type: String, required: false },
    rating: { type: Number, required: false, min: 1, max: 5 },
  },
  { timestamps: true, collection: "recipes" }
);

const Recipe = mongoose.model("recipes", recipeSchema, "recipes");

export default Recipe;
