const express = require("express"),
      router = express.Router();

let burger = require("../models/burger");

// 4. Create the `router` for the app, and export the `router` at the end of your file.
router.get("/", (req, res) => {
    // res.json();
});

module.exports = router;