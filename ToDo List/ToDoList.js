/**
 * ToDo List Project
 * @author Emanuel Castanho
*/

const addButton = document.querySelector(".add");
var input = document.querySelector(".txtInput");
const taskContainer = document.querySelector(".Container");

class Task{
    constructor(TaskName){
        this.createDiv(TaskName);
    }
    createDiv(TaskName){

        let checkButton = document.createElement("input");
        checkButton.type = "checkbox";

        let TaskBox = document.createElement("div");
        TaskBox.classList.add("TaskContainer");

        let input = document.createElement("input");
        input.value = TaskName;
        input.disabled = true;
        input.classList.add("txtTask");
        input.type = "text";

        let removeButton = document.createElement("button");
        removeButton.classList.add("buttonTask");
        removeButton.innerHTML = "🗑️";

        taskContainer.appendChild(TaskBox);
        TaskBox.appendChild(checkButton);
        TaskBox.appendChild(input);
        TaskBox.appendChild(removeButton);

        removeButton.addEventListener("click", () => this.remove(TaskBox));
    }

    remove(Task){
        taskContainer.removeChild(Task);
    }
}

function check(){
    if (input.value != "") {
        new Task(input.value);
        input.value = "";
    }
}


addButton.addEventListener("click",check);