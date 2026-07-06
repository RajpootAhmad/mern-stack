$(function(){
    $("#load").click(sendAjax);
});

function sendAjax(){
    console.log("sending ajax request");
    //dend request here
    $.get("students.txt", handleResponse);
    console.log("request send");
}

function handleResponse(response){
    console.log("response");
    $("#result").empty();
    $("#result").append(response);
}