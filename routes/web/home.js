var express = require("express");
var router = express.Router();

router.get("/", function(req,res){
    console.log("Hello I'm on the START page!");
    res.render("pages/index");
    
});

router.get("/home", function(req,res){
    console.log("Hello I'm on the HOME page!");
    res.render("pages/home");
});

module.exports = router;
