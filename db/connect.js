const mongoose = require("mongoose"),
  timestamps = require("mongoose-timestamp");
mongoose
  .connect("mongodb://localhost/students", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then((db) => console.log("Database connect successfully.."))
  .catch((e) => console.log("Connect is failer"));