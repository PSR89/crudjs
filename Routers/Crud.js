const express = require("express");
const { addListener } = require("../models/CrudDB");
const router = express.Router();
const CrudDB1 = require("../models/CrudDB");

// Reading the total data from the database
router.get("/", async (req, res) => {
  try {
    const DBdata = await CrudDB1.find();
    res.json(DBdata);
  } catch (err) {
    console.log("Error" + err);
  }
});

// Reading the Single data from the data base
router.get("/:id", async (req, res) => {
  try {
    const DBdata = await CrudDB1.findById(req.params.id);
    res.json(DBdata);
  } catch (err) {
    console.log("Error" + err);
  }
});

// Inputting/ posting the data to the database
router.post("/", async (req, res) => {
  const DBdata = new CrudDB1({
    id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
    address: req.body.address,
    pincode: req.body.pincode,
    language: req.body.language,
    skills: req.body.skills,
    dress: req.body.dress,
    race: req.body.race,
    occupation: req.body.occupation,
  });
  try {
    const Data1 = await DBdata.save();
    res.json(Data1);
    console.log("Sucessfully updated ");
  } catch (err) {
    console.log("Error" + err);
  }
});

// patch/ update request
router.patch("/:id", async (req, res) => {
  try {
    const DBdata = await CrudDB1.findById(req.params.id);
    DBdata.dress = req.body.dress;
    const Data1 = await DBdata.save();
    res.json(Data1);
  } catch (err) {
    console.log("Error" + err);
  }
});

// Deleting the single Data
router.delete("/:id", async (req, res) => {
  try {
    const DBdata = await CrudDB1.findById(req.params.id);
    const Data1 = await DBdata.remove();
    res.json(Data1);
  } catch (err) {
    console.log("Error" + err);
  }
});
module.exports = router;
