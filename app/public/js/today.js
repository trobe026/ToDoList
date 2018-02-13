$.get("/api/tasks/today", function(data) {
  for (var i = 0; i < data.length; i++) {
    var wellSection = $('<div>');
    wellSection.addClass("well");
    wellSection.attr("id", "task-well-" + i);
    $("#today").append(wellSection);
    $("#task-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].name + "</h2>");
    $("#task-well-" + i).append("<h3>Due Date: " + data[i].duedate + "</h3>");
  }
});
