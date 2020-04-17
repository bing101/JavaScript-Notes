const express = require("express");
const path = require("path");
const members = require("./members");
const logger = require("./middleware/logger");

// Instanciate express object
const app = express();

// Port number
const PORT = process.env.PORT || 5000;

// Use middleware
app.use(logger);

// Setting up a routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"), (err) => {
    if (err) throw err;
  });
});

// Resful request
app.get("/api/members", (req, res) => res.json(members));

// Getting a specified entry in members
app.get("/api/members/:id", (req, res) => {
  const user = members.some((u) => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(400).json({ msg: `No member with the id: ${req.params.id}` });
  }
  console.log(user);
  res.json(user);
});

// Setup server
app.listen(PORT, () => console.log("Server started on port " + PORT));
