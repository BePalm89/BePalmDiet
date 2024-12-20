import express from "express";
import cors from "cors";
import recipesRouter from "../api/routes/Recipe.routes.js";
import activitiesRouter from "../api/routes/Activity.routes.js";

const server = express();

server.use(cors());

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/api/v1/recipes", recipesRouter);
server.use("/api/v1/activities", activitiesRouter);

server.use("*", (req, res, next) => {
  console.log("here *");
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

server.use((error, req, res, next) => {
  console.log("here");
  return res
    .status(error.status || 500)
    .json(error.message || "Unexpected error");
});

export default server;
