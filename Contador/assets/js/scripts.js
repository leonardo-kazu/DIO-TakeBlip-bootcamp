document.getElementById("subtrair").addEventListener("click", decrement);
document.getElementById("adicionar").addEventListener("click", increment);

let count = 0;

const CURRENT_NUMBER = document.getElementById("currentNumber");

function decrement() {
    if (count > -10) {
        count--;
        CURRENT_NUMBER.innerHTML = count;
    }
    if (count < 0) {
        CURRENT_NUMBER.style.color = "red";
    } else if (count == 0) {
        CURRENT_NUMBER.style.color = "black";
    }
}

function increment() {
    if (count < 10) {
        count++;
        CURRENT_NUMBER.innerHTML = count;
    }
    if (count > 0) {
        CURRENT_NUMBER.style.color = "green";
    } else if (count == 0) {
        CURRENT_NUMBER.style.color = "black";
    }
}