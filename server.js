const http = require("http");
require("dotenv").config();
const { createDonor, getAllDonors } = require("./controllers/donateController");

const baseUrl = '/api/donors';

const server = http.createServer((req, res) => {
  if (req.url === `${baseUrl}/get` && req.method === "GET") {
    getAllDonors(req, res);
  } else if (req.url === `${baseUrl}/save` && req.method === "POST") {
    createDonor(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" })
    res.end(JSON.stringify({ message: "Route Not Found" }))
  }
})

const PORT = process.env.PORT || 6000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;
