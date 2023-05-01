export class CuentaCorriente{
    #cliente;
    numero;
    agencia;
    #saldo;

    set cliente(valor){
        this.#cliente = valor;
    }

    get cliente(){
        return this.#cliente;
    }

    constructor(){

        this.#cliente = null;
        this.numero = '';
        this.agencia = '';
        this.#saldo = 0;

    }
    //Al estar en el molde,deberiamos intentar acceder a la cuenta corriente actual que estamos manejando
    //Para generalizar el comportamiento debemos cambiar el nombre de la instancia , para que sea para esa cuenta corriente
    //This es una palabra reservada que nos permitia entrar a la cuenta actual. 
    depositoEnCuenta(valor){ 
        //Protecciones para que no puedan depositar valores negativos
        if(valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }
    retirarDeCuenta(valor){
        //Protecciones para que no pueda quedar saldo negativo
        if(valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo(){
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino){
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}

