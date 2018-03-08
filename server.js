const express = require("express");
const bodyParser = require("body-parser");
var path = require("path");

var PORT = process.env.PORT || 8080; // 8080 is for local, if we push it to heroku we need process.env
var app = express();

app.use(bodyParser.urlencoded({extended: true})); // Again, app is our express, and we are passing into it.
app.use(bodyParser.json()); //we need this bodyParser because of the form we are using in the UI app. body-parser converts that to JSON file.

require("./routes/apiRoutes.js")(app); 
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, function(){
    console.log("App started on port " + PORT);
});
