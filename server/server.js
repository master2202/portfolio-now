const http = require("http");
const app = require("./src/app");

// configure server
const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, () => {
  let host =
    server.address().address === "::" ? "localhost" : server.address().address;
  console.log("server running on:");
  console.log("http://" + host + ":" + port);
});
