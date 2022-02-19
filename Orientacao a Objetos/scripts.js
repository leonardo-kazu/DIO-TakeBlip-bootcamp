class ContaBancaria {
    constructor(agencia, numero, saldo, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this._saldo = saldo;
        this.tipo = tipo;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(valor) {
        this._saldo = valor;
    }
    sacar(valor) {
        if (valor > this._saldo) {
            return `Saldo insuficiente, saldo atual R$ ${this._saldo},00`;
        } else {
            this._saldo -= valor;

            return `Saldo atual R$ ${this._saldo},00, sacado R$ ${valor},00`;
        }
    }
    depositar(valor) {
        this._saldo += valor;
        return `Saldo Atual R$ ${this._saldo},00`;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, saldo);
        this.tipo = "Conta Corrente";
    }
    get cartaoCredito() {
        return this._cartaoCredito;
    }
    set cartaoCredito(nmrCartao) {
        this._cartaoCredito = nmrCartao;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo, tipo) {
        super(agencia, numero, saldo, tipo);
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo, tipo) {
        super(agencia, numero, saldo, tipo);
        
    }

    sacar(valor) {
        if (valor >= 500) {
            return "Proibidos saques maiores que R$ 500,00!";
        } else {
            return super.sacar(valor);
        }
    }
}

let universitario = new ContaUniversitaria("Banco do Brasil", 5497, 0, "Universitaria");

console.log(universitario.depositar(200));
console.log(universitario.sacar(700));
console.log(universitario.sacar(300));
