import express from "express";
import cors from "cors";
import db from "./app/models/index.js";
import tutorialRoutes from "./app/routes/tutorial.routes.js";
 
const app = express();
 
const corsOptions = {
  origin: "*", // Allow access from any origin during development
  // For production, you would want to restrict this to your frontend domains
  // origin: ["http://192.168.50.30", "http://192.168.50.10", "http://192.168.50.20", "http://192.168.50.11", "http://192.168.50.12"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
};
 
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
// Add headers to show which server handled the request
app.use((req, res, next) => {
  res.header("X-Backend-Server", process.env.HOSTNAME || "unknown");
  next();
});

// Simple route
app.get("/", (req, res) => {
  res.json({ 
    message: "Welcome to the Tutorial Application.",
    server: process.env.HOSTNAME || "unknown"
  });
});
 
// Routes
tutorialRoutes(app);
 
// Sync database
db.sequelize.sync().then(() => {
  console.log("Synced db.");
}).catch(err => {
  console.error("Failed to sync db:", err);
});
 
// Make sure we're using the same port as in Nginx config (3000)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
