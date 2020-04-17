const express = require("express");
const path = require("path");
const members = require("./members");

// Instanciate express object
const app = express();

// Port number
const PORT = process.env.PORT || 5000;

// Setting up a routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"), (err) => {
    if (err) throw err;
  });
});

// Resful request
app.get("/api/members", (req, res) => res.json(members));

// Setup server
app.listen(PORT, () => console.log("Server started on port " + PORT));
