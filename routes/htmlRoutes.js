const path = require("path");

module.exports = function(app) {

    app.get("/tables", function(req, res){
        res.sendFile(path.join(__dirname, "../html/tables.html"))
    });
    
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../html/home.html"))
    });

    app.get("/reserve", function(req, res){
        res.sendFile(path.join(__dirname, "../html/reserve.html"))
    });
}

