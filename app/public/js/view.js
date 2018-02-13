$.get("/api/all", function(data) {
  renderTasks(data);
})

function renderTasks(data) {
  if (data.length !== 0) {
    $("#tasks").empty();
    $("#tasks").show();

    for (var i = 0; i < data.length; i++) {
      var wellSection = $('<div>');
      wellSection.addClass("well");
      wellSection.attr("id", "task-well-" + i);
      $("#tasks").append(wellSection);
      $("#task-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].name + "</h2>");
      $("#task-well-" + i).append("<h3>Due Date: " + data[i].duedate + "</h3>");
      wellSection.append("<button class='delete' data-id='" + data[i].id + "'>DELETE TASK</button>");
    }

    $(".delete").click(function() {

      var info = {
        id: $(this).attr("data-id")
      };

      $.post("/api/delete", info)
        // On success, run the following code
        .then(function(deldata) {
          // Log the data we found
          console.log(deldata);
          console.log("Deleted Successfully!");
        });

      $(this).closest("div").remove();

    });

  }
}
