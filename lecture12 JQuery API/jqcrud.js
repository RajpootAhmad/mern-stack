$(function(){
    loadStories();
});
function loadStories(){
    $.ajax({
        url : "https://usmanlive.com/wp-json/api/stories",
        method : "GET",
        success : function(response){
            console.log(response);
            var story = $("#stories");
            story.empty();
            for(var i=0; i<response.length; i++){
                var stry = response[i];
                story.append(`<div class="str"><h3> ${stry.title} </h3><p>${stry.id}</p><p><button class="btn btn-danger btn-sm float-right">Delete</button>${stry.content}</p></div>`);
            }
        }

    });
}