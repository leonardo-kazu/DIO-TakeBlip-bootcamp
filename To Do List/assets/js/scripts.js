const formulario = document.getElementById("task-form");
const listaTarefas = document.getElementById("tasks");

//document.getElementById("").addEventListener("submit", teste)

formulario.onsubmit = function (e) {
    e.preventDefault();
    const inputField = document.getElementById("task-input");
    addtask(inputField.value);
    formulario.reset();
};

function addtask(descricao) {
    const taskContainer = document.createElement("div");
    const newTask = document.createElement("input");
    const taskLabel = document.createElement("label");
    const taskText = document.createTextNode(descricao);

    newTask.setAttribute("type", "checkbox");
    newTask.setAttribute("id", descricao);
    newTask.setAttribute("name", descricao);

    taskLabel.setAttribute("for", descricao);
    taskLabel.appendChild(taskText);

    taskContainer.classList.add("item");
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(taskLabel);
    
    listaTarefas.appendChild(taskContainer);
};