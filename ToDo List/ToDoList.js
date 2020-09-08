/**
 * ToDo List Project
 * @author Emanuel Castanho
*/

const AddButton = document.querySelector(".InputAdd");
var Input = document.querySelector(".InputTxt");
const TaskFrame = document.querySelector(".TaskContainer");

class Task{
    constructor(TaskName){
        this.createDiv(TaskName);
    }
    createDiv(TaskName){

        let CheckButton = document.createElement("input");
        CheckButton.type = "checkbox";

        let TaskBox = document.createElement("div");
        TaskBox.classList.add("TaskContainerChange");

        let InputBox = document.createElement("input");
        InputBox.value = TaskName;
        InputBox.disabled = true;
        InputBox.classList.add("TaskTxt");
        Input.type = "text";

        let RemoveButton = document.createElement("button");
        RemoveButton.classList.add("TaskRemove");
        RemoveButton.innerHTML = "🗑️";

        TaskFrame.appendChild(TaskBox);
        TaskBox.appendChild(CheckButton);
        TaskBox.appendChild(InputBox);
        TaskBox.appendChild(RemoveButton);

        RemoveButton.addEventListener("click", () => this.remove(TaskBox));
    }
    remove(Task){
        TaskFrame.removeChild(Task);
    }
}

function check(){
    if (Input.value != "") {
        new Task(Input.value);
        Input.value = "";
    }
}

AddButton.addEventListener("click",check);