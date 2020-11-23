//Dependencies
var express = require("express");
var path = require("path");

//Import stuff here
var routes = require("./routes");

var app = express();

app.set("port", process.env.PORT || 3000);

//tell node where our views are
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(routes);

app.listen(app.get("port"),function(){
    console.log("Server started on port" + app.get("port"));
});