class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    
    //Getter
    get saldo() {
        return this._saldo;
    }

    //Setter
    set saldo(valor) {
        this._saldo = valor;
    }

    //Método sacar
    sacar (valor) {
        if (valor>this._saldo){
            return 'Operação Negada';
        } else {
            this._saldo = this._saldo - valor;
        }
        return this._saldo;
    }

    //Método depositar
    depositar (valor) {
        return this._saldo = this._saldo + valor;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor (agencia, numero, cartaoCredito){
        super(agencia, numero);
        this._cartaoCredito = cartaoCredito;
        this.tipo = 'corrente';
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(cartao){
        this._cartaoCredito = cartao;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor (agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupaca';
    }

}

class ContaUniversitaria extends ContaBancaria {
    constructor (agencia, numero){
        super(agencia, numero)
        this.tipo = 'universitaria';
    }

    sacar (valor){
        if (valor>=500){
            return 'Operação negada';
        } else {
            this._saldo = this._saldo - valor;
        }
        return this._saldo;
    }
    
}