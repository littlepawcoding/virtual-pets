var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/pet/:id", function (req, res) {
  res.render("pets", { title: "Express" });
});

module.exports = router;