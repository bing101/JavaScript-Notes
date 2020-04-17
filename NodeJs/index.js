// Creating a server
http = require("http");
fs = require("fs");
path = require("path");

const users = [
  {
    id: 0,
    name: "Diyam Grover",
    roll: "student",
  },
  {
    id: 1,
    name: "Arindam Bhatyacharya",
    roll: "student",
  },
];

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    });
  }
  if (req.url === "/about") {
    fs.readFile(
      path.join(__dirname, "public", "about.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  }

  // Building a restfull service
  if (req.url == "/api/users") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

PORT = process.env.PORT || 4000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
