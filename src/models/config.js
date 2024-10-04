const mongoose = require("mongoose");

const configSchema = mongoose.Schema({
  rol: {
    type: String,
    required: true,
  },
  permiso: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("config", configSchema);
