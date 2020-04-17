// Members object array
const members = require("../../members");
const express = require("express");
const router = express.Router();

// Resful request
router.get("/", (req, res) => res.json(members));

// Getting a specified entry in members
router.get("/:id", (req, res) => {
  const user = members.some((u) => u.id === parseInt(req.params.id));
  if (user) {
    const result = members.filter((m) => m.id === parseInt(req.params.id));
    res.json(result);
  } else {
    res.status(400).json({ msg: `No member with the id: ${req.params.id}` });
  }
  console.log(user);
  res.json(user);
});

module.exports = router;
