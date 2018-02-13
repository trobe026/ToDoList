$("#add-btn").on("click", function(event) {
  console.log("test");
  event.preventDefault();

  var newTask = {
    name: $("#name").val().trim(),
    duedate: $("#duedate").val().trim()
  };
  $.post("/api/new", newTask)
  .then(function(data) {
    console.log(data);
  });

  $("#name").val("");
  $("#duedate").val("");

});
