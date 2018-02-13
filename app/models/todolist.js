// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

var TaskList = sequelize.define("list_items", {
  name: {
    type: Sequelize.STRING
  },
  duedate: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});

TaskList.sync();

module.exports = TaskList;
