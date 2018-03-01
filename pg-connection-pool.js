var pg = require("pg");

var pool = new pg.Pool({
  user: "postgres",
  password: "password",
  host: "localhost",
  port: 5432,
  database: "tododb", //change to tododb in lab
  ssl: false
});

module.exports = pool;
