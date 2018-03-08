var tableData = require("../data/tableData.js");
var waitingListDate = require("../data/waitingListData.js");

module.exports = function(app){
    app.get("/api/tables", function(req,res){
        res.json(tableData);
    });
}