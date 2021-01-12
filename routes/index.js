var express = require("express");
var router = express.Router();

const connection = require("../config/connection");
const orm = require("../config/orm");
const Burger = require("../models/burger");

router.get("/", function (req, res) {
  Burger.all(function (err, result) {
    if (err) return res.sendStatus(500);

    res.render("index", { burger: result });
  });

  // orm.all("burger", function (err, result) {
  //   if (err) {
  //     throw err;
  //   }
  //   res.render("index", { burger: result });
  // });

  // const qry = "select * from burger";
  // connection.query(qry, function (err, result) {
  //   if (err) throw err;

  //   console.log(result)
  //  res.render("index", { burger: result });
  // });
});

router.post("/api/burger", function (req, res) {
  Burger.create(req.body, function (err, result) {
    res.redirect("/");
  });
});

router.get("/api/burger/:id", function (req, res) {
  // update the record in DB then redirect to home
  console.log(req.params);
  console.log(req.query);
  Burger.updateById(req.params.id, req.query, function (err, result) {
    res.redirect("/");
  });
});

// const fs = require("fs");
// const path = require("path");
// const MAIN_PATH = path.join(__dirname , "/../views/layouts/main.handlebars");
// const DEMO_PATH = path.join(__dirname , "/../views/demo.handlebars");

// router.get("/", (req, res)=>{
//   const obj = {
//     title: "WOW",
//     descr: "awesome!"
//   }

//   fs.readFile(MAIN_PATH, 'utf8', (err, main) => {
//     if(err) throw err;

//     fs.readFile(DEMO_PATH, 'utf8', (err, page) => {
//       if(err) throw err;

//       main = main.replace("{{{ body }}}", page)

//       for(const key in obj){
//         main = main.replace("{{"+key+"}}", obj[key])
//       }

//       res.send(main)
//     })
//   })
// })

module.exports = router;
