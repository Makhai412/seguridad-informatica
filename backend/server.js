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

// Rutas
tutorialRoutes(app);

// Mostrar todas las rutas registradas para debugging
app._router.stack.forEach(function(r){
  if (r.route && r.route.path){
    console.log("Route registered:", r.route.path)
  }
});

// Sincronizar base de datos
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch(err => {
    console.error("Failed to sync db:", err);
  });

// Usar el puerto 3000 como en la configuración de Nginx
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  console.log(`Database host: ${db.sequelize.config.host}`);
});
