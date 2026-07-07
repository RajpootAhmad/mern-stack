function handleAddNewTodo(){
    console.log("new todo add button");
}

function doBindings(){
    console.log("handle bindings");
    var btn = document.getElementById("btnAdd");
    btn.onclick = handleAddNewTodo;
}

window.onload =  doBindings;