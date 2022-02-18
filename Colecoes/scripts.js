const usuarios = new Map();

createUsers();
alert(getAdmins());

function createUsers() {
    let user = prompt("Insira o nome do usuario e sua role divididos por uma barra.").split(" ");
    usuarios.set(user[0], user[1]);
    let continuar = prompt("Insira 0 ou nada se terminou de terminar de inserir os usuários");
    if (continuar != 0) {
        createUsers();
    }
}

function getAdmins(){
    let admins = [];
    for (let [key, value] of usuarios) {
        if (value === "ADMIN") {
            admins.push(key);
        }
    }
    return admins;
}

let lista = [30, 30, 40, 5, 223, 2049, 3034, 5];
let listaUnica = new Set(lista);
alert(listaUnica);
