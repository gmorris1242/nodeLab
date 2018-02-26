var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var studentRoutes = require("./task-routes");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use("/", studentRoutes);

var server = app.listen(3001, function () {
var port = server.address().port;
console.log("App's server listening at http://localhost:%s", port);
});
