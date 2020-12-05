var express = require("express");
var router = express.Router();

const connection = require("../config/connection");
const orm = require("../config/orm");
const Burger = require("../models/burger");

router.get("/", function (req, res) {
  Burger.all(function (err, result) {
    if (err) return res.sendStatus(500);

    res.render("index", { burgers: result });
  });

  // Burger.all(function (result) {
  //   res.render("index", { burgers: result });
  // });

  // orm.all("burger", function (result) {
  //   res.render("index", { burgers: result });
  // });

  // const qry = "select * from burger";
  // connection.query(qry, function (err, result) {
  //   if (err) throw err;

  //   res.render("index", { burgers: result });
  // });
});

router.post("/api/burger", function (req, res) {
  console.log(req.body)
  // ADD req.body to DB
  res.redirect("/");
});

router.put("/", function (req, res) {
  // update the record in DB then redirect to home
  
  res.redirect("/");
});

module.exports = router;

