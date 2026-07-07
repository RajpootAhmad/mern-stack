$(function(){
    loadStories();
    $("#stories").on("click", ".btn-danger", handleDelete);
});

function handleDelete(){
    var btn =$(this);
    var parentDiv = btn.closest(".str");
    let id = parentDiv.attr("data-id");
    console.log(id);
    $.ajax({
        url: `https://usmanlive.com/wp-json/api/stories/`+id,
        method: "DELETE",
        success: function(){
            loadStories();
        }
    });
}

function loadStories(){
    $.ajax({
        url : "https://usmanlive.com/wp-json/api/stories",
        method : "GET",
        error: function(response){
            var story = $("#stories");
            story.empty();
            story.append("Error have occured");
        },
        success : function(response){
            console.log(response);
            var story = $("#stories");
            story.empty();
            for(var i=0; i<response.length; i++){
                var stry = response[i];
                story.append(`<div class="str" data-id = "${stry.id}"><h3> ${stry.title} </h3><p>${stry.id}</p><p><button class="btn btn-danger btn-sm float-right">Delete</button> <button class="btn btn-warning btn-sm float-right">Edit</button> ${stry.content} </p></div>`);
            }
        }

    });
}