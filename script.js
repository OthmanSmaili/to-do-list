var input = document.getElementById("userinput");
var button = document.getElementById("add");
var list = document.getElementById("todolist");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");

    var taskText = document.createElement("span");
    taskText.appendChild(document.createTextNode(input.value));
    li.appendChild(taskText);

    var deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.appendChild(document.createTextNode("X"));
    deleteBtn.addEventListener("click", deleteTask);
    li.appendChild(deleteBtn);

    taskText.addEventListener("click", markDone);
    
    list.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0){
        createListElement();
    }
}

function addListAfterEnter(event) {
    if (event.key === "Enter") {
        addListAfterClick();
    }
}

function markDone(event) {
    event.target.classList.toggle("done");
}

function deleteTask(event) {
    event.stopPropagation();
    this.parentElement.remove();
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterEnter);
