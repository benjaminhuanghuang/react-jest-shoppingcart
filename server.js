const path = require('path');
const express = require('express');
const React = require('react');

const server = new express();

server.set("view engine", "ejs");
server.set("views",  path.join(__dirname, 'views'));
server.use(express.static(path.join(__dirname, 'www')));

var items = require('./items.js');

var conversions = {
    USDtoCAD: 1.5,
    USDtoGBP: 0.9
};


var locale = {
    country: "USA"
}


// simulate latency
//server.use(function(req,res,next){setTimeout(next,3000)});


server.get('/', function (req, res) {
        res.render('index');
    })
    .get("/rates", function (req, res) {
        res.json(conversions);
    })
    .get("/items", function (req, res) {
        res.json(items);
    })
    .delete("/items/:id", function (req, res) {
        items = items.filter(item => req.params.id !== item.id);
    })
    .get("/locale", function (req, res) {
        res.json(locale);
    });

let instance = server.listen(9527, () => {
    console.info("Express listening on port 9527.");
});
module.exports = instance;