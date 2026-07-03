
window.onload =  function(){
    var btn = document.getElementById("btnAdd");
    btn.onclick = handleAdd;
};


function handleAdd(){
    var newToDo = document.getElementById("newToDo").value;
    console.log(newToDo);
    var todo = document.getElementById("todos");
    var newToDoText = document.createTextNode(newToDo);
    var newLi = document.createElement("li");
    newLi.appendChild(newToDoText);
     var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    newLi.appendChild(deleteBtn);
    todos.appendChild(newLi);
    
}

function handleDelete(e){
    var tag = e.target;
    var li = tag.parentNode
    li.parentNode.removeChild(li);
}