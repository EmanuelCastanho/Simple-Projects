/**
 * ToDo List Project
 * @author Emanuel Castanho
*/

const addButton = document.querySelector(".add");
var input = document.querySelector(".txtInput");
const taskContainer = document.querySelector(".TaskContainer");

class Task{
    constructor(TaskName){
        this.createDiv(TaskName);
    }
    createDiv(TaskName){
        let input = document.createElement("input");
        input.value = TaskName;
        input.disabled = true;
        input.classList.add("txtTask");
        input.type = "text";

        let TaskBox = document.createElement("div");
        TaskBox.classList.add("item");

        let removeButton = document.createElement("button");
        removeButton.classList.add("removeButton");
        removeButton.innerHTML = "🗑️";


        taskContainer.appendChild(TaskBox);
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