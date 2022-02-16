const FORMULARIO = document.getElementById("task-form");
const LISTA_TAREFAS = document.getElementById("tasks");

//document.getElementById("").addEventListener("submit", teste)

FORMULARIO.onsubmit = function (e) {
    e.preventDefault();
    const INPUT_FIELD = document.getElementById("task-input");
    addtask(INPUT_FIELD.value);
    FORMULARIO.reset();
};

function addtask(descricao) {
    const TASK_CONTAINER = document.createElement("div");
    const NEW_TASK = document.createElement("input");
    const TASK_LABEL = document.createElement("label");
    const TASK_TEXT = document.createTextNode(descricao);

    NEW_TASK.setAttribute("type", "checkbox");
    NEW_TASK.setAttribute("id", descricao);
    NEW_TASK.setAttribute("name", descricao);

    TASK_LABEL.setAttribute("for", descricao);
    TASK_LABEL.appendChild(TASK_TEXT);

    TASK_CONTAINER.classList.add("item");
    TASK_CONTAINER.appendChild(NEW_TASK);
    TASK_CONTAINER.appendChild(TASK_LABEL);
    
    LISTA_TAREFAS.appendChild(TASK_CONTAINER);
}