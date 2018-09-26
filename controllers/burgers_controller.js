var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});


router.post("/burgers", function (req, res) {
  burger.insertOne([
    "burger_name"
  ], [
      req.body.burger_name
    ], function (data) {
      res.redirect("/");
    });
});


router.put("/burgers/:id", function (req, res) {
  console.log("Firing!");
  var condition = "id = " + req.params.id;
  burger.updateOne({
    devoured: true
  }, condition, function (data) {
    res.status(200).end();
  });
});

module.exports = router;