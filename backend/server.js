import express from "express";
import cors from "cors";
import db from "./app/models/index.js";
import tutorialRoutes from "./app/routes/tutorial.routes.js";

const app = express();

const corsOptions = {
  origin: "*", // Permitir acceso desde cualquier origen durante desarrollo
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Agregar encabezados para mostrar qué servidor manejó la solicitud
app.use((req, res, next) => {
  res.header("X-Backend-Server", process.env.HOSTNAME || "unknown");
  next();
});

// Ruta simple
app.get("/", (req, res) => {
  res.json({ 
    message: "Welcome to the Tutorial Application.",
    server: process.env.HOSTNAME || "unknown"
  });
});
