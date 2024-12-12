import mongoose from "mongoose";

const activitySchema = mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true },
  howTo: { type: [String], required: true },
});

const Activity = mongoose.model("activities", activitySchema, "activities");

export default Activity;
