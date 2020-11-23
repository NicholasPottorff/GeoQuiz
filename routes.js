var express = require("express");

var router = express.Router();

router.get("/", function(req,res){
    console.log("Hello I'm on the start page!");
    res.render("index");
    
});

//this is how node.js communicates between files
//this is how to export the router variable
module.exports = router;