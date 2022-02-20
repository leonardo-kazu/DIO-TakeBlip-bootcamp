const array = [1, 2, 3, 4, 5];
const triple = {
    fator: 3,
};

const itens = [
    {
        nome: "Maça",
        preco: 30,
    }, 
    {
        nome: "Laranja",
        preco: 20,
    }, 
    {
        nome: "Melancia",
        preco: 30, 
    }
];

const saldo = 100;

console.log(array);

console.log(array.map((elemento) => (elemento *= 2))); 
// Multiplica por dois todos os elementos do array.

console.log(array.map(function (elemento) {
    return elemento *= this.fator;
}, triple)); 
// Multiplica por 3 todos os elementos do arraky.

console.log(array.filter(function (elemento) {
    if (elemento % 2 == 0) {
        return elemento;
    }
}));
// Retorna os elementos pares de um array.

console.log(array.reduce((prev, prox) => prev + prox));
// Retorna a soma dos elementos de um array.

console.log(`Saldo final: R$ ${itens.reduce((acc, valor) => acc - valor.preco, saldo)},00`);
// Retorna a redução de um valor pelos os valores de um "array".
