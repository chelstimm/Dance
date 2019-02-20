var express = require("express");
var router = express.Router();
var dance = require("../models/dance.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
 dance.selectAll(function(data) {
    var hbsObject = {
      dances: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  dance.insertOne([
    "dance", "queued"
  ], [
    req.body.dance, req.body.queued
  ], function() {
    // Send back the ID of the new quote
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  dance.updateOne({
    queued: req.body.queued
  }, condition, function() {
        res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  dance.delete(condition, function() {
   res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
