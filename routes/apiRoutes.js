var tableData = require("../data/tableData.js");
var waitListData = require("../data/waitingListData.js");

// app is "express". 
module.exports = function(app){
    app.get("/api/tables", function(req,res){
        res.json(tableData);
    });

    app.get("/api/waitlist", function(req,res){
        res.json(waitListData);
    });

    app.post("/api/tables", function(req,res){
        if(tableData.length < 5 ){
            tableData.push(req.body);
            res.json(tableData)
        }
        else{
            waitListData.push(req.body)
            res.json(waitListData);
        }
    });

    app.post("/api/clear", function(req,res){
        
        tableData = [];
        waitListData = [];
    });
}