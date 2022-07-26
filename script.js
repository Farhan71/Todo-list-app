let newTask = document.querySelector("#add-task");
let form = document.querySelector("form")
let incompleteTasks = document.querySelector("#incomplete-tasks ul");
let completeTasks = document.querySelector("#complete-tasks ul");


let createTask = function (task) {
    let createList = document.createElement("li");
    let paragraph = document.createElement("p");
    let spanRed = document.createElement("span");
    let spanYellow = document.createElement("span");
    let spanGreen = document.createElement("span");
    let editBtn = document.createElement("button");
    let completeBtn = document.createElement("button");

    createList.className = "taskBorder";
    spanRed.className ="red"; 
    spanGreen.className ="green";
    spanYellow.className ="yellow";
    editBtn.className ="edit";
    completeBtn.className ="completed";
    
    paragraph.innerText = task;
    editBtn.innerText = "Edit";
    completeBtn.innerText = "Completed";

    createList.append(paragraph, spanRed, spanGreen, spanYellow, editBtn, completeBtn);

    return createList;
    
}

let addTask = function (event) {
    event.preventDefault();
    taskItem = createTask(newTask.value);
    // console.log(taskItem)
    incompleteTasks.appendChild(taskItem);
    newTask.value ="";
    bindIncompleteTasks(taskItem, completedFunction, editFunction, redBtnFunction, greenBtnFunction, yellowBtnFunction  );
} 

let editFunction = function () {
    let taskItem = this.parentNode;
    let text = taskItem.querySelector("p");
    let input = document.createElement("input");
    let doneButton = document.createElement("button");
    input.value= text.innerText;
    taskItem.replaceChild(input, text);
    doneButton.innerText = "Done"
    doneButton.className = "done";
    taskItem.appendChild(doneButton);




    let spanRed = taskItem.querySelector(".red");
    let spanYellow = taskItem.querySelector(".yellow");
    let spanGreen = taskItem.querySelector(".green");
    let editBtn =taskItem.querySelector(".edit"); 
    let completeBtn = taskItem.querySelector(".completed");

    spanRed.remove();
    spanYellow.remove();
    spanGreen.remove();
    editBtn.remove();
    completeBtn.remove();

    doneButton.addEventListener("click", (e) => {
        editedText = taskItem.querySelector("input").value; 
        console.log(editedText);
        newTaskItem = createTask(editedText);
        incompleteTasks.appendChild(newTaskItem);
        bindIncompleteTasks(newTaskItem, completedFunction, editFunction, redBtnFunction, greenBtnFunction, yellowBtnFunction  );
        taskItem.remove();
        

    })

    // console.log(input.value);
}

let redBtnFunction = function () {
    let taskItem = this.parentNode;
    let text = taskItem.querySelector("p");
    text.style.backgroundColor = "red"; 
}

let greenBtnFunction = function () {
    let taskItem = this.parentNode;
    let text = taskItem.querySelector("p");
    text.style.backgroundColor = "green"; 
}

let yellowBtnFunction = function () {
    let taskItem = this.parentNode;
    let text = taskItem.querySelector("p");
    text.style.backgroundColor = "yellow"; 

}

let completedFunction = function () {
    // console.log(this)
    let taskItem = this.parentNode;
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className ="delete";
    taskItem.appendChild(deleteBtn);

    let spanRed = taskItem.querySelector(".red");
    let spanYellow = taskItem.querySelector(".yellow");
    let spanGreen = taskItem.querySelector(".green");
    let editBtn =taskItem.querySelector(".edit"); 
    let completeBtn = taskItem.querySelector(".completed");

    spanRed.remove();
    spanYellow.remove();
    spanGreen.remove();
    editBtn.remove();
    completeBtn.remove();

    // console.log(taskItem);

    completeTasks.appendChild(taskItem);
    bindCompleteTasks(taskItem, deleteFunction);
}

let deleteFunction = function () {
    let taskItem = this.parentNode;
    taskItem.remove();
    // let deleteBtn = taskItem.querySelector(".delete");
}

let bindIncompleteTasks = function (task, completeBtnClick, editBtnClick, redBtnClick, greenBtnClick, yellowBtnClick) {
    let completedBtn = task.querySelector(".completed");
    let redBtn = task.querySelector(".red");
    let greenBtn = task.querySelector(".green");
    let yellowBtn = task.querySelector(".yellow");
    let editBtn = task.querySelector(".edit");

    completedBtn.addEventListener("click", completeBtnClick);
    redBtn.addEventListener("click", redBtnClick);
    greenBtn.addEventListener("click", greenBtnClick);
    yellowBtn.addEventListener("click", yellowBtnClick);
    editBtn.addEventListener("click", editBtnClick);
}

let bindCompleteTasks = function (task, deleteBtnClick) {
    let deleteBtn = task.querySelector(".delete");
    deleteBtn.addEventListener("click", deleteBtnClick);

}
form.addEventListener('submit', addTask);
