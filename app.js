const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
// const { errors } = require("celebrate");
// const errorHandler = require("./middlewares/error-handler");
// const { requestLogger, errorLogger } = require("./middlewares/logger");

require("dotenv").config();
const { login, createUser } = require("./controllers/users");
// const { corsOptions } = require("./utils/config");
const { NOT_FOUND_ERROR_MESSAGE } = require("./utils/errors");
const { NotFoundError } = require("./utils/errors/NotFoundError");

const { PORT = 3001 } = process.env;
const app = express();

// app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/signin", login);
app.post("/signup", createUser);

app.use("/users", require("./routes/users"));
app.use("/items", require("./routes/habitItems"));

app.use((req, res, next) => next(new NotFoundError(NOT_FOUND_ERROR_MESSAGE)));

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db") //CHANGE THE DB
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.listen(PORT, () => {
  console.log(`App listening at ${PORT}`);
});
