// Import the required modules
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./userRouter");
const bodyParser = require("body-parser");
// Load the environment variables from the .env file
dotenv.config();

// Create an express app
const app = express();
app.use(express.json());
// Define env variables
const port = process.env.PORT || 3000;
const address = process.env.ADDRESS;
const dbUrl = process.env.URI;

// Connect to the database
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

  //define middleware for routes
app.use(userRouter);
// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, this is the root route!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://${address}:${port}`);
});
