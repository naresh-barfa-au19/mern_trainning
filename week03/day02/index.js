var http = require("http");
var fs = require("fs");
var path = require("path");

http
  .createServer(function (req, res) {
    console.log(req.url);
    if (req.url === "/") {
      fs.readFile("myshop.html", function (err, html) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
      });
    } else if (req.url.match(".css$")) {
      var cssPath = path.join(__dirname, "public", req.url);
      var fileStream = fs.createReadStream(cssPath, "UTF-8");
      res.writeHead(200, { "Content-Type": "text/css" });
      fileStream.pipe(res);
    } else if (req.url.match(".jpg$")) {
      console.log("Image : => ", __dirname + "/public");
      var imagePath = path.join(__dirname, req.url);
      var fileStream = fs.createReadStream(imagePath);
      res.writeHead(200, { "Content-Type": "image/jpg" });
      fileStream.pipe(res);
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("No Page Found");
    }
  })
  .listen(3000, () => console.log("Server Started"));
