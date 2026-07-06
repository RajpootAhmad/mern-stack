$(function(){
    //query will execute this function after page load
    // so do bindind here
    $("#addButton").click(handleddNewTodo);
    //$("#todos li").click(removeMe);
    $("#todos").on("click","li",removeMe)
});

function handleddNewTodo(){
    var newtodo = $("#newTodo").val();
    if(!newtodo){
        $("#newTodo").addClass("error");
        return;
    }
    $("#newTodo").removeClass("error");
    $("#newTodo").val("");
    $("#todos").append("<li>" + newtodo + "</li>");
    //$("#todos li").click(removeMe);
}

function removeMe(){
    $(this).fadeOut();
    //.remove();
}