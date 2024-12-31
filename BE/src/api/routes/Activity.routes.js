import express from "express";
import {
  createActivity,
  deleteActivity,
  getActivityById,
  getAllActivities,
  updateActivity,
} from "../controllers/Activity.controller.js";
import { upload } from "../../middleware/file.js";

const router = express.Router();

router.get("/", getAllActivities);
router.get("/:id", getActivityById);
router.post("/create", upload.single("img"), createActivity);
router.delete("/:id", deleteActivity);
router.put("/:id", upload.single("img"), updateActivity);

export default router;
