const alunos =  [
    {
        nome: "Joao",
        nota: 10,
        turma: 3
    },
    {
        nome: "Maria",
        nota: 6,
        turma: 5
    },
    {
        nome: "Ana",
        nota: 9,
        turma: 12
    }
];

function aprovados(alunos, media) {
    let listAprovados = [];

    alunos.forEach(element => {
        if (element.nota >= media) {
            listAprovados.push(element.nome);
        }
    });

    return listAprovados;
}
alert(aprovados(alunos, 7));

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoas = [
    {
        nome: "Isabella",
        idade: 24
    },
    {
        nome: "Guilherme",
        idade: 18
    },
    {
        nome: "Matheus",
        idade: 30
    }
];

pessoas.forEach(element => {
    console.log(calculaIdade.call(element, 10));
});

pessoas.forEach(element =>{
    console.log(calculaIdade.apply(element, [20]));
});
