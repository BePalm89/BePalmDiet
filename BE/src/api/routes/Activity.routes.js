import express from "express";
import {
  createActivity,
  getActivityById,
  getAllActivities,
} from "../controllers/Activity.controller.js";
import { upload } from "../../middleware/file.js";

const router = express.Router();

router.get("/", getAllActivities);
router.get("/:id", getActivityById);
router.post("/create", upload.single("img"), createActivity);

export default router;
