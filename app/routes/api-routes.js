var Sequelize = require("sequelize");
const Op = Sequelize.Op;
var TaskList = require('../models/todolist.js');

module.exports = function(app) {

  app.get("/api/all", function(req, res) {
    TaskList.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  app.post("/api/delete", function(req, res) {
    TaskList.destroy({
      where:  {
        id: req.body.id
      }
    });
  });

  app.post("/api/new", function(req, res) {
    TaskList.create({
      name: req.body.name,
      duedate: req.body.duedate
    });
  });

  app.get("/api/tasks/future", function(req, res) {
    TaskList.findAll({
      where: {
        duedate: {
          [Op.gt]: new Date()
        }
      },
      order: [["duedate"]]
    }). then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/tasks/overdue", function(req, res) {
    TaskList.findAll({
      where: {
        duedate: {
          [Op.lt]: new Date(new Date() - 24 * 60 * 60 * 1000)
        }
      },
      order: [["duedate"]]
    }). then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/tasks/today", function(req, res) {
    TaskList.findAll({
      where: {
        duedate: {
          [Op.between]: [new Date(new Date() - 24 * 60 * 60 * 1000), new Date()]
        }
      },
      order: [["name", "DESC"]]
    }). then(function(results) {
      res.json(results);
    });
  });






};
