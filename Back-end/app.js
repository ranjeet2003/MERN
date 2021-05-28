const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const placesRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/users-routes");
const HttpError = require("./models/http-error");

const app = express();

const DB_URL =
  "mongodb+srv://ranjeet:G6PEjnRCVgEc9Zsx@cluster0.en7x9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(bodyParser.json());

app.use("/api/places", placesRoutes); // => /api/places...
app.use("/api/users", usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

mongoose
  .connect(
    "mongodb+srv://ranjeet:G6PEjnRCVgEc9Zsx@cluster0.en7x9.mongodb.net/MERN?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5555);
    console.log("Connection stablished");
  })
  .catch((err) => {
    console.log(err);
  });
