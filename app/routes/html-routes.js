var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });

  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add.html"));
  });

  app.get("/overdue", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/overdue.html"));
  });

  app.get("/future", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/future.html"));
  });

  app.get("/today", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/today.html"));
  });

};
