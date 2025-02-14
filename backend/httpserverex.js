const http = require("http");
const fs = require("fs/promises")

const server = http.createServer(async (req, res) => {
  const url = req.url;
  const method = req.method;
  
  if (url === "/home" && method === "GET") {
    res.statusCode = 200;
    const data = await fs.readFile("./home.html");  
    res.write(data);
  } else if (url === "/about" && method === "POST") {
    res.statusCode = 200;
    const data = await fs.readFile("./about.html");
    res.write(data);
  } else {
    res.statusCode = 404;
    res.write("<h1>404 Error</h1>");
  }
  res.end();
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
