const mongoose = require("mongoose");

// defining the Database Structure

const CrudDBSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  techinfo: {
    type: String,
    require: true,
  },
  subscription: {
    type: Boolean,
    require: true,
    default: false,
  },
  views: {
    type: Boolean,
    require: true,
  },
  Followers: {
    type: Boolean,
    require: true,
  },
});

module.exports = mongoose.model("CrudDB", CrudDBSchema);
