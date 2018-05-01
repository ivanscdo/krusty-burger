const express = require("express"),
      router = express.Router();

let burger = require("../models/burger");

// 4. Create the `router` for the app, and export the `router` at the end of your file.
router.get("/", (req, res) => {
    // res.json();
    console.log("router.get('/'): homepage");
    // res.send("homepage");
    // res.send(burger.selectAll);
    // console.log(data);
    // res.json(burger.selectAll(req, res))

    // res.render("index", {burgers: data})
    console.log("burger_controller.js: ", burger.selectAll() );
    res.render("index", {burgers: burger.selectAll()})

    // // // callback tests
    // console.log("burger_controller.js: ", burger.callbackTest( burger.selectAll));      
    
    // res.json(burger.selectAll())
    // res.send(burger.selectAll)
});

// router.get("/test", (req, res) => {
//     res.send("/test");
// })

module.exports = router;
