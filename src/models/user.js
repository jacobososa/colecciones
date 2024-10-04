const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  cel: {
    type: String,
    require: true,
  },
  cedula: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("user", userSchema);
