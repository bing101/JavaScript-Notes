// Members object array
const members = require("../../members");
const express = require("express");
const router = express.Router();
const uuid = require("uuid");

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

// Handling Push requests
router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };
  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "Please add a name and email." });
  }

  members.push(newMember);
  res.send(members);
});

// Handling Put request
router.put("/:id", (req, res) => {
  const memberId = req.params.id;
  const found = members.some((m) => m.id === parseInt(memberId));
  if (found) {
    members.forEach((m) => {
      if (m.id === parseInt(memberId)) {
        m.name = req.body.name ? req.body.name : m.name;
        m.mail = req.body.email ? req.body.email : req.email;

        return res.send(m);
      }
    });
  } else {
    res.status(400).json({ msg: "Member not found" });
  }
});

// Delete request
router.delete("/:id", (req, res) => {
  const found = members.some((m) => m.id === parseInt(req.params.id));
  if (found) {
    members.forEach((m, index) => {
      if (m.id === parseInt(req.params.id)) {
        members.splice(index, 1);
      }
    });
    res.json({ msg: "Member deleted", members });
  } else {
    res.status(400).json({ msg: "No such member" });
  }
});

module.exports = router;
