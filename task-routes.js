var express = require("express");
var router = express.Router();

var inMemoryDatabase = require("./in-memory-database")
var taskDb = inMemoryDatabase();
taskDb.init([
]);

router.get("/tasks", function(req, res){
  res.send(taskDb.readAll());
});

router.post("/tasks", function(req, res){
  var task = req.body;
  taskDb.create(task);
  res.status(201).send(task);
});

router.delete("/tasks/:id", function(req, res){
  var id = req.params.id;
  taskDb.delete(id);
  res.send("Deleted");
});

router.put("/tasks/:id", function(req, res){
  var id = req.params.id;
  var task = req.body;
  taskDb.update(id,task);
  res.send("Updated");
});

module.exports = router;
