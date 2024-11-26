const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

function addTask(){
    if(todoInput.value === ""){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = todoInput.value;
        todoList.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "&times";

        li.appendChild(span);
    }
    todoInput.value = "";
    saveTask();
}

todoList.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveTask();
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveTask();
    }
},false)

function saveTask(){
    localStorage.setItem("data", todoList.innerHTML);
}

function showTask(){
    todoList.innerHTML = localStorage.getItem("data");
}
showTask();