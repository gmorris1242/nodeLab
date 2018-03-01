var express = require("express");
var router = express.Router();
var pool = require("./pg-connection-pool.js")

var inMemoryDatabase = require("./in-memory-database")
var taskDb = inMemoryDatabase();
taskDb.init([
]);

// router.get("/tasks", function(req, res){
//   res.send(taskDb.readAll());
// });

router.get("/tasks", function(req,res){
  pool.query("SELECT * FROM todos").then(function(result){
    res.send(result.rows);
  }).catch(function(err){
    console.log(err);
    res.status(500).send("ERROR");
  });
});

// router.post("/tasks", function(req, res){
//   var task = req.body;
//   taskDb.create(task);
//   res.status(201).send(task);
// });

router.post("/tasks", function(req, res){
  var task = req.body;
  var sql = "INSERT INTO todos(task) VALUES ($1::text)";
  var values = [task.task];
  pool.query(sql, values).then(function(result){
    res.status(201).send("Created");
  }).catch(function(err){
    console.log(err);
    res.status(500).send("ERROR");
  });
});

// router.delete("/tasks/:id", function(req, res){
//   var id = req.params.id;
//   taskDb.delete(id);
//   res.send("Deleted");
// });

router.delete("/tasks/:id", function (req, res) {
    var id = req.params.id;
    var sql = "DELETE FROM todos WHERE id=$1::int";
    pool.query(sql, [id]).then(function (result) {
        res.send("deleted");
    }).catch(function (err) {
        console.log(err);
        res.status(500).send("ERROR");
    });
});

// router.put("/tasks/:id", function(req, res){
//   var id = req.params.id;
//   var task = req.body;
//   taskDb.update(id,task);
//   res.send("Updated");
// });

router.put("/tasks/:id", function (req, res) {
    var id = req.params.id;
    var task = req.body;
    var values = [id,task.task];
    var sql = "UPDATE todos SET task=$2::text WHERE id=$1::int";
    pool.query(sql, values).then(function (result) {
        res.send(values);
    }).catch(function (err) {
        console.log(err);
        res.status(500).send("ERROR");
    });
});

module.exports = router;
