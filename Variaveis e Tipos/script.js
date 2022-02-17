let palavra = prompt("Insira uma palavra");

respostaPalindromo(verificaPalindromoUm(),verificaPalindromoDois());

 function verificaPalindromoUm() {
    return !palavra ? false : palavra.split("").reverse().join("") === palavra;
}

function verificaPalindromoDois() {
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] != palavra[palavra.length-i-1]) {
            return false;
        }
    }
    return true;  
}

function respostaPalindromo(primeiro, segundo) {
    if (primeiro){
        alert(`A palavra ${palavra} é um palindromo:
        Primeira verificação: ${primeiro}.
        Segunda verificação: ${segundo} `);
    } else if (primeiro == false){
        alert("Palavra inexistente");
    } else {
        alert(`A palavra ${palavra} não é um palindromo:
        Primeira verificação: ${primeiro}.
        Segunda verificação: ${segundo} `);
    }
}


let lista = criarLista();
iterarLista();
apresentarLista();

function criarLista() {
    let numeros = prompt("Insira os números separados por um espaço");
    /* if (numeros == "") {
        return [];
    }
    return numeros.split(" "); */
    return numeros == "" ? [] : numeros.split(" ");
}

function iterarLista() {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 == 0) {
            lista[i] = 0;
        }
    }
}

function apresentarLista() {
    return lista.length > 0 ? alert(lista) : alert("-1");
}
