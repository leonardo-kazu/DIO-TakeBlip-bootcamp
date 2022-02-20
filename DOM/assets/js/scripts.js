const btn = document.getElementById("mode-selector");
const text = document.getElementById("page-title");
const footer = document.getElementsByTagName("footer")[0];
const body = document.getElementsByTagName('body')[0];


btn.addEventListener("click",changeMode);

function changeMode() {
    btn.classList.toggle("dark-mode");
    text.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");

    if(btn.classList.contains("dark-mode")) {
        btn.innerHTML = "Light Mode";
        text.innerHTML = "Dark Mode ON";
        return;
    }

    btn.innerHTML = "Dark Mode";
    text.innerHTML = "Light Mode ON";

}