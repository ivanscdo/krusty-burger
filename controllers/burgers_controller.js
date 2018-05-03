const express = require("express"),
      router = express.Router();

let burger = require("../models/burger");

// 4. Create the `router` for the app, and export the `router` at the end of your file.
router.get("/", (req, res) => {
    console.log("router.get('/'): homepage");

    // res.json();
    // res.send("homepage");
    // res.send(burger.selectAll);
    // console.log(data);
    // res.json(burger.selectAll(req, res))
    // res.render("index", {burgers: data})
    
    // res.json(burger.selectAll())
    // res.send(burger.selectAll)

    // // // TEST: initial, .selectAll() returnining before data fetched, need callbacks
    console.log("burger_controller.js: ", burger.selectAll() );
    res.render("index", {burgers: burger.selectAll()})

    // // // TEST: callback
    // console.log("burger_controller.js: ", burger.callbackTest(burger.selectAll) );
    // console.log("burgers_controller.js: ", burger.callbackTest() );    
    // res.render("index", {burgers: burger.callbackTest()})
    
    
});

// router.get("/test", (req, res) => {
//     res.send("/test");
// })
// router.get("/test", burger.callbackTest() );
// router.get("/test", function(req, res, next) {
//     // next(burger.callbackTest());
//     burger.callbackTest();
//     next();
// }, function(req, res) {
//     res.send(data);
// } );

// router.get('/test2', function (req, res, next) {
//     console.log('the response will be sent by the next function ...')
//     burger.callbackTest();    
//     next()
//   }, function (req, res) {
//     res.send('Hello from B!')
//   })

//   var cb0 = function (req, res, next) {
//     console.log('CB0')
//     next()
//   }
  
//   var cb1 = function (req, res, next) {
//     console.log('CB1')
//     next()
//   }
  
//   var cb2 = function (req, res) {
//     res.send('Hello from C!')
//   }
  
//   router.get('/test3', [cb0, cb1, cb2])


module.exports = router;
