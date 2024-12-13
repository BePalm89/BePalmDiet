import Activity from "../models/Activity.model.js";
import { deleteFile } from "../../utils/deleteFile.js";

export const getAllActivities = async (req, res, next) => {
  try {
    const activities = await Activity.find();
    return res.status(200).json(activities);
  } catch (error) {
    return next(error);
  }
};

export const getActivityById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const activity = await Activity.findById(id);

    if (!activity) {
      return res.status(404).json("Activity not found");
    }
    return res.status(200).json(activity);
  } catch (error) {
    return next(error);
  }
};

export const createActivity = async (req, res, next) => {
  try {
    const { name, description } = req.body;

    const howTo = JSON.parse(req.body.howTo);

    const img = req.file ? req.file.path : null;

    const newActivity = new Activity({
      name,
      description,
      img,
      howTo,
    });

    const activity = await newActivity.save();

    return res.status(201).json(activity);
  } catch (error) {
    return next(error);
  }
};

export const deleteActivity = async (req, res, next) => {
  try {
    const { id } = req.params;

    const oldActivity = await Activity.findById(id);

    if (!oldActivity) {
      return res.status(404).json("Activity not found");
    }
    const deletedActivity = await Activity.findByIdAndDelete(id);

    deleteFile(deletedActivity.img);

    return res.status(200).json(deletedActivity);
  } catch (error) {
    return next(error);
  }
};
