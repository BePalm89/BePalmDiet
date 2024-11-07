import express from "express";
import {
  getAllRecipes,
  getRecipeById,
  createNewRecipe,
} from "../controllers/Recipe.controller.js";
import { upload } from "../../middleware/file.js";

const router = express.Router();

router.get("/", getAllRecipes);
router.get("/:id", getRecipeById);
router.post("/create", upload.single("photo"), createNewRecipe);

export default router;
