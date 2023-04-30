class Cliente{
    nombreCliente;
    dniCliente;
    rfcCliente;   
}

class CuentaCorriente{
    numero;
    saldo;
    agencia;
    //Al estar en el molde,deberiamos intentar acceder a la cuenta corriente actual que estamos manejando
    //Para generalizar el comportamiento debemos cambiar el nombre de la instancia , para que sea para esa cuenta corriente
    depositoEnCuenta(valor){
        this.saldo += valor;
    }
}

const cliente1 = new Cliente();

cliente1.nombreCliente = "José";
cliente1.dniCliente = "12345";
cliente1.rfcCliente = "J2V345";

const cuentaCorriente1 = new CuentaCorriente();

cuentaCorriente1.agencia = 1001
cuentaCorriente1.numero = "456789";
cuentaCorriente1.saldo = 10000;

const cliente2 = new Cliente();

cliente2.nombreCliente = "Leonardo";
cliente2.dniCliente = "13804500";
cliente2.rfcCliente = "L2G531"

const cuentaCorriente2 = new CuentaCorriente();

cuentaCorriente2.agencia = 1002
cuentaCorriente2.numero = "123123123";
cuentaCorriente2.saldo = 2000 ;

console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(100); //Esto trae de CuentaCorriente depositoEnCuenta y le damos un valor(100)
console.log(cuentaCorriente2.saldo);




const cliente3 = new Cliente();

cliente3.nombreCliente = "Alex";
cliente3.dniCliente = "31621";
cliente3.rfcCliente = "A2L316";

const cuentaCorriente3 = new CuentaCorriente();

cuentaCorriente3.numero = "32143";
cuentaCorriente3.saldo = 5000;