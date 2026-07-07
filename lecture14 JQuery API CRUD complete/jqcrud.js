$(function () {
  loadStories();
  $("#stories").on("click", ".btn-danger", handleDelete);
  $("#stories").on("click", ".btn-warning", handleUpdate);
  $("#addBtn").click(addStory);
  $("#updateSave").click(function () {
    var id = $("#updateId").val();
    var title = $("#updateTitle").val();
    var content = $("#updateBody").val();
    $.ajax({
      url: `https://usmanlive.com/wp-json/api/stories/` + id,
      data: { title, content },
      method: "PUT",
      success: function (response) {
        console.log(response.title);
        loadStories();
        $("#updateModal").modal("hide");
      },
    });
  });
});

function handleUpdate() {
  var btn = $(this);
  var parentDiv = btn.closest(".str");
  let id = parentDiv.attr("data-id");
  $.get(`https://usmanlive.com/wp-json/api/stories/` + id, function (response) {
    $("#updateId").val(response.id);
    $("#updateTitle").val(response.title);
    $("#updateBody").val(response.content);
    $("#updateModal").modal("show");
  });
}

function addStory() {
  var title = $("#title").val();
  var content = $("#body").val();
  $.ajax({
    url: "https://usmanlive.com/wp-json/api/stories",
    method: "POST",
    data: { title, content },
    success: function (response) {
      console.log(response);
      loadStories();
      title = $("#title").val("");
      content = $("#body").val("");
      $("#addModal").modal("hide");
    },
  });
}

function handleDelete() {
  var btn = $(this);
  var parentDiv = btn.closest(".str");
  let id = parentDiv.attr("data-id");
  console.log(id);
  $.ajax({
    url: `https://usmanlive.com/wp-json/api/stories/` + id,
    method: "DELETE",
    success: function () {
      loadStories();
    },
  });
}

function loadStories() {
  $.ajax({
    url: "https://usmanlive.com/wp-json/api/stories",
    method: "GET",
    error: function (response) {
      var story = $("#stories");
      story.empty();
      story.append("Error have occured");
    },
    success: function (response) {
      console.log(response);
      var story = $("#stories");
      story.empty();
      for (var i = 0; i < response.length; i++) {
        var stry = response[i];
        story.append(
          `<div class="str" data-id = "${stry.id}"><h3> ${stry.title} </h3><p>${stry.id}</p><p><button class="btn btn-danger btn-sm float-right">Delete</button> <button class="btn btn-warning btn-sm float-right">Edit</button> ${stry.content} </p></div>`,
        );
      }
    },
  });
}
