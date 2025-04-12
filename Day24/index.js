console.log("Welcome to my ToDos App");

let todos = [];

let todoDataList = document.getElementById("todo-data-list");
let saveButton = document.getElementById("save-todo");
let todoInputBar = document.getElementById("todo-input-bar");

// Enable or disable the Save button based on input length
todoInputBar.addEventListener("keyup", function toggleSaveButton() {
    let todotext = todoInputBar.value;
    if (todotext.length === 0) {
        if (saveButton.classList.contains("disabled")) return;
        saveButton.classList.add("disabled");
    } else if (saveButton.classList.contains("disabled")) {
        saveButton.classList.remove("disabled");
    }
});

// Save todo item and add it to the list
saveButton.addEventListener("click", function getTextAndTodo() {
    let todotext = todoInputBar.value;
    if (todotext.length === 0) return;
    let todo = { text: todotext, status: 'In progress', finshButtontext: 'Finished' };
    todos.push(todo);
    addTodo(todo, todos.length);
    todoInputBar.value = '';
});

// Re-render all todos
function reRenderTodos() {
    todoDataList.innerHTML = '';
    todos.forEach((element, idx) => {
        addTodo(element, idx + 1);
    });
}

// Remove a todo item
function removeToDo(event) {
    let deleteButtonPressed = event.target;
    let indexToBeRemoved = Number(deleteButtonPressed.getAttribute("todo-idx"));
    todos.splice(indexToBeRemoved, 1);
    reRenderTodos();
}

// Mark a todo item as finished or undo
function finishedTodo(event) {
    let finishedButtonPressed = event.target;
    let indexToBeFinished = Number(finishedButtonPressed.getAttribute("todo-idx"));

    // Toggle the status and button text
    if (todos[indexToBeFinished].status === "In progress") {
        todos[indexToBeFinished].status = "Finished";
        todos[indexToBeFinished].finshButtontext = "Undo";
    } else {
        todos[indexToBeFinished].status = "In progress";
        todos[indexToBeFinished].finshButtontext = "Finished";
        todos.sort(a,b) => {
            if(addTodo.status == 'Finished'){
                  return b < a;
            }
        }
    }

    
    reRenderTodos(); // Re-render the updated todos
}

// Add a todo item to the DOM
function addTodo(todo, todoCount) {
    let rowDiv = document.createElement("div");
    let todoitem = document.createElement("div");
    let todoNumber = document.createElement("div");
    let todoDetail = document.createElement("div");
    let todoStatus = document.createElement("div");
    let todoAction = document.createElement("div");
    let deleteButton = document.createElement("button");
    let finishedButton = document.createElement("button");
    let hr = document.createElement("hr");

    // Adding classes
    rowDiv.classList.add("row");
    todoitem.classList.add("todo-item", "d-flex", "flex-row", "justify-content-between", "align-items-center");
    todoNumber.classList.add("todo-no");
    todoDetail.classList.add("todo-detail", "text-muted");
    todoStatus.classList.add("todo-status", "text-muted");
    todoAction.classList.add("todo-action", "d-flex", "justify-content-start", "gap-2");
    deleteButton.classList.add("btn", "btn-danger", "delete-todo");
    finishedButton.classList.add("btn", "btn-success", "finish-todo");

    // Setting attributes and event handlers
    finishedButton.setAttribute("todo-idx", todoCount - 1);
    deleteButton.setAttribute("todo-idx", todoCount - 1);
    deleteButton.onclick = removeToDo;
    finishedButton.onclick = finishedTodo;

    // Setting text content
    todoNumber.textContent = `${todoCount}.`;
    todoDetail.textContent = todo.text; // Use the individual todo object
    todoStatus.textContent = todo.status; // Use the individual todo object
    deleteButton.textContent = "Delete";
    finishedButton.textContent = todo.finshButtontext; // Dynamically set the button text

    // Appending children
    todoAction.appendChild(deleteButton);
    todoAction.appendChild(finishedButton);
    todoitem.appendChild(todoNumber);
    todoitem.appendChild(todoDetail);
    todoitem.appendChild(todoStatus);
    todoitem.appendChild(todoAction);
    rowDiv.appendChild(todoitem);
    rowDiv.appendChild(hr);

    todoDataList.appendChild(rowDiv);
}
