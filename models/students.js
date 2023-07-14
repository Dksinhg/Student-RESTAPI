const mongoose = require("mongoose");
const validator = require("validator");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minlength: 3,
  },
  email: {
    type: String,
    require: true,
    unique: [true, "Email is already present"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  phone: {
    type: Number,
    min: 10,
    required: true,
    unique: true,
  },
  address: [{
    District: {
      type: String,
      require: true,
    },
    State: {
      type: String,
      require: true,
    },
  }],
});

//new collections
const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
