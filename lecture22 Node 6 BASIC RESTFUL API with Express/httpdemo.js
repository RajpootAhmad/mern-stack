const http = require("http");

http
  .createServer((req, res) => {
    console.log(req.url);

    switch (req.url) {
      case "/":
        res.write("<h1>My home page</h1>");
        break;

      case "/hobbies.html":
        res.write("<h1>My hobbies</h1>");
        break;

      default:
        res.write("Page not found");
        break;
    }
    res.end();
  })
  .listen(8080);
