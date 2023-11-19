const express = require("express");
const matches = require("./business/create_matches");
// Connection information
const port = 6969;
const indexPath = "./public/index.html";
// Set up express App
const app = express();
app.use(express.static(__dirname + "/public"));

// Starting the app
app.listen(port, () => {
  console.log(`Listening on port ${port} at address http://localhost:${port}/`);
});

// Entry point of the app
app.get("/", (req, res) => {
  res.sendFile(indexPath);
});

app.get("/ten-largest-collection", (req, res) => {
  const matches = require("./business/create_matches");
  const tenLargest =matches.getTenLargestCollection();
  res.send(tenLargest)
})

app.get("/atom-series-part-a", (req, res) => {
  const matches = require("./business/create_matches");
  const atomSeriesPartA =matches.getAtomSeriesPartACollection();
  res.send(atomSeriesPartA)
})

app.get("/atom-series-part-b", (req, res) => {
  const matches = require("./business/create_matches");
  const atomSeriesPartB =matches.getAtomSeriesPartBCollection();
  res.send(atomSeriesPartB)
})
