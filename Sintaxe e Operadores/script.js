var num1, num2;

entraDados();
apresentarDados(igualdade(),comparaDados());

function entraDados() {
    num1 = Number(prompt("Insira o primeiro número"));
    num2 = Number(prompt("Insira o segundo número."));
    if (!num1 || !num2) {
        alert("Insira números válidos!!!");
        entraDados();
    }
}

function igualdade() {
    return (num1 == num2) ? (true) : (false) ;
}
function comparaDados() {
    let dez = "menor";
    let vinte = "menor";
    let soma = num1 + num2;

    if (soma > 20) {
        dez = "maior";
        vinte = "maior";
    } else if (soma > 10) {
        dez = "maior";
    }

    return `Sua soma é ${soma}, que é ${dez} que 10 e ${vinte} que 20.`;
}

function apresentarDados(condition, final) {
    switch (condition) {
        case true:
            alert(`Os números ${num1} e ${num2} são iguais. ${final}`);
            break;

        case false:
            alert(`Os números ${num1} e ${num2} não são iguais. ${final}`);
            break;
    }
}