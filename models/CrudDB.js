const mongoose = require("mongoose");

// defining the Database Structure

const CrudDBSchema = new mongoose.Schema({
  id: {
    type: Number,
    require: true,
  },
  first_name: {
    type: String,
    require: true,
  },
  last_name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  pincode: {
    type: String,
    require: true,
  },
  language: {
    type: String,
    require: true,
  },
  skills: {
    type: String,
    require: true,
  },
  dress: {
    type: String,
    require: true,
  },
  race: {
    type: String,
    require: true,
  },
  occupation: {
    type: String,
    require: true,
  },
});
// kljlkhju
module.exports = mongoose.model("CrudDB", CrudDBSchema);
