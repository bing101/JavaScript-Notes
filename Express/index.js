const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const router = express.Router();

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

// Members routing
app.use("/api/members", require("./routes/api/members"));

// Setup server
app.listen(PORT, () => console.log("Server started on port " + PORT));
