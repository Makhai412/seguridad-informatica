import * as tutorials from "../controllers/tutorial.controller.js";
import express from "express";

export default (app) => {
  let router = express.Router();
  
  // Create a new Tutorial
  router.post("/", tutorials.create);
  
  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);
  
  // Find all published Tutorials (IMPORTANTE: esta ruta debe ir antes de /:id)
  router.get("/published", tutorials.findAllPublished);
  
  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);
  
  // Update a Tutorial with id
  router.put("/:id", tutorials.update);
  
  // Delete a Tutorial with id
  router.delete("/:id", tutorials.deleteOne);
  
  // Delete all Tutorials
  router.delete("/", tutorials.deleteAll);
  
  app.use('/api/tutorials', router);
};
