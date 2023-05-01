
/*Importacion de clases*/
import {CuentaCorriente} from './CuentaCorriente.js'

const cuentaDeLeonardo = new CuentaCorriente();
//cuentaDeLeonardo.saldo = 0;
let saldo = cuentaDeLeonardo.verSaldo();
console.log('El saldo actual es ' +saldo);

saldo = cuentaDeLeonardo.depositoEnCuenta(100)
console.log('El saldo actual es ' +saldo);

saldo = cuentaDeLeonardo.retirarDeCuenta(100) //Se puede de ambas maneras 
console.log('El saldo actual es '+saldo);

cuentaDeLeonardo.depositoEnCuenta(100);
saldo = cuentaDeLeonardo.verSaldo(); //Se puede de ambas maneras 
console.log('El saldo actual es ' +saldo);