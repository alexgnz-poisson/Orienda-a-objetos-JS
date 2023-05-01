
/*Importacion de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js'

const cliente = new Cliente();
cliente.nombreCliente = 'Leonardo';
cliente.dniCliente = '1234567';
cliente.rfcCliente = '45678'

const cuentaDeLeonardo = new CuentaCorriente();
cuentaDeLeonardo.numero = '1';
cuentaDeLeonardo.agencia = '001';
cuentaDeLeonardo.cliente = cliente;


//cuentaDeLeonardo.saldo = 0;
let saldo = cuentaDeLeonardo.verSaldo();
//console.log('El saldo actual es ' +saldo);

saldo = cuentaDeLeonardo.depositoEnCuenta(150)
console.log('El saldo actual (CuentaLeonardo) ' +saldo);

const cliente2 = new Cliente();
cliente2.nombreCliente = 'Maria';
cliente2.dniCliente = '312415';
cliente2.rfcCliente = '12346';

const cuentaDeMaria = new CuentaCorriente();
cuentaDeMaria.numero = '2';
cuentaDeMaria.agencia = '002';
cuentaDeMaria.cliente = cliente2;

console.log(cuentaDeMaria.cliente);



/*cuentaDeLeonardo.transferirParaCuenta(100,cuentaDeMaria)
console.log('Cuenta de Maria',cuentaDeMaria);*/




/*
const saldoMaria = cuentaDeMaria.verSaldo();

console.log('El saldo actual (CuentaMaria) ' +saldoMaria);

const saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log('El saldo actual (CuentaLeonardo) ' +saldoLeonardo);

*/


/*saldo = cuentaDeLeonardo.retirarDeCuenta(100) //Se puede de ambas maneras 
console.log('El saldo actual es '+saldo);

cuentaDeLeonardo.depositoEnCuenta(100);
saldo = cuentaDeLeonardo.verSaldo(); //Se puede de ambas maneras 
console.log('El saldo actual es ' +saldo);*/