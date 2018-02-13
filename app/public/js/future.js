$.get("/api/tasks/future", function(data) {
  for (var i = 0; i < data.length; i++) {
    var wellSection = $('<div>');
    wellSection.addClass("well");
    wellSection.attr("id", "task-well-" + i);
    $("#future").append(wellSection);
    $("#task-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].name + "</h2>");
    $("#task-well-" + i).append("<h3>Due Date: " + data[i].duedate + "</h3>");
  }
});
