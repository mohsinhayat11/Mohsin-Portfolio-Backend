require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
connectDB();

// Routes
app.use("/api/contact", contactRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("Portfolio Backend Running...");
});

// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});