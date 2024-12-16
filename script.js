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

        let deleteSpan = document.createElement("span");
        deleteSpan.innerHTML = "&times";
        deleteSpan.className = "delete";

        li.appendChild(deleteSpan);

        let editSpan = document.createElement("span");
        editSpan.innerHTML = "   <i class='fas fa-edit'></i>";
        editSpan.className = "edit";
        li.appendChild(editSpan);

        todoList.appendChild(li);

        todoInput.value = "";
        saveTask();

    }

}

todoList.addEventListener("click", function(event){
    if(event.target.classList.contains("delete")){
        //Delete the task
        event.target.parentElement.remove();
        saveTask();
    }
    else if(event.target.classList.contains("edit")){
        //Edit the task
        const li = event.target.parentElement;
        const currentText = li.firstChild.textContent;

        const newText = prompt("Edit your task: ", currentText);
        if(newText !== null && newText.trim()!== ""){
            li.firstChild.textContent = newText;
            saveTask();
        }
    }
    else if(event.target.tagName == "LI"){
        // Toggle task completion
        event.target.classList.toggle("checked");
        saveTask();
    }

})

function saveTask(){
    localStorage.setItem("data", todoList.innerHTML);
}

function showTask(){
    todoList.innerHTML = localStorage.getItem("data") || "";
}
showTask();