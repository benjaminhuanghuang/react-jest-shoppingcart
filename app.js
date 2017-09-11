const path = require("path");
const express = require("express");

const app = new express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "client/dist")));

var items = require("./items.js");

var conversions = {
  USDtoCAD: 1.5,
  USDtoGBP: 0.9
};

var locale = {
  country: "USA"
};

// use middleware simulate latency
// server.use(function(req,res,next)
// {
//   setTimeout(next,3000)
// });

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/rates", function(req, res) {
  res.json(conversions);
});
app.get("/items", function(req, res) {
  res.json(items);
});
app.delete("/items/:id", function(req, res) {
  items = items.filter(item => req.params.id !== item.id);
});
app.get("/locale", function(req, res) {
  res.json(locale);
});

module.exports = app;
