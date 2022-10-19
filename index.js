const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url + ".html"
  );
  console.log("filePath: ", filePath);

  fs.readFile(filePath, (error, data) => {
    if (error) {
      console.log(error);
      if (error.code === "ENOENT") {
        fs.readFile(path.join(__dirname, "404.html"), (error, data) => {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        });
      }
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
