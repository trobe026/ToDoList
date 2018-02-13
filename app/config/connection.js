var Sequelize = require("sequelize");

var sequelize = new Sequelize("todolist_db", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  port: 8889,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;
