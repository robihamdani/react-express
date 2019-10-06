const express = require("express");
const router = express.Router();

//  @route      GET api/contacts
//  @desc       GET all users contacts
//  @access     Public
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

//  @route      POST api/contacts
//  @desc       GET all users contacts
//  @access     Public
router.post("/", (req, res) => {
  res.send("Get all contacts");
});

//  @route      POST api/contacts/:id
//  @desc       UPDATE users contacts
//  @access     Public
router.put("/:id", (req, res) => {
  res.send("Get all contacts");
});

//  @route      DELETE api/contacts/:id
//  @desc       DELETE users contacts
//  @access     Public
router.delete("/", (req, res) => {
  res.send("Get all contacts");
});

module.exports = router;
