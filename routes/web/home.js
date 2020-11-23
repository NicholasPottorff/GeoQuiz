var express = require("express");
var router = express.Router();

router.get("/", function(req,res){
    res.render("pages/index");
    
});

router.get("/home", function(req,res){
    res.render("pages/home");
});

router.get("/login", function(req,res){
    res.render("pages/login");
});

router.get("/signup", function(req,res){
    res.render("pages/signup");
});

router.get("/study", function(req,res){
    res.render("pages/study");
});

router.get("/quiz", function(req,res){
    res.render("pages/quiz");
});

module.exports = router;
