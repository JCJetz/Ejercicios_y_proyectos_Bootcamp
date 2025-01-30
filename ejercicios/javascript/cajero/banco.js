
import readline from 'readline';
import { obtenerSaldo, modificarSaldo, borrarSaldo  } from './cajero.js'; 


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
  });
  
const choice = `
    Bienvenido a tu banco NeoBank:
        1. Consultar saldo
        2. Depositar dinero
        3. Retirar dinero
        4. Vaciar cuenta
        5. Salir
    ¿Que opcion quiere realizar? `
//hacer una pregunta y escuchar la respuesta en un callback
let keepGoing = true;

const menuRecursivo = async () => {

    //rl.question('enter the second number : ', async (Y) => {
    rl.question(choice, async (res) => {
        switch(res){
            case '1': 
                await obtenerSaldo().then((s => menuRecursivo()));
                break;
            case '2': 
                console.log('Llamar a la función Depositar Saldo...'); 
                var cantidad = 'Introduce la cantidad a depositar: ';
                rl.question(cantidad, async (res2) =>{
                    isNaN(cantidad) ? await modificarSaldo("depositar",res2).then((s => menuRecursivo())) : console.log('Por favor introduce un número.') 
                });
                break;     
            case '3': 
                console.log('Llamar a la función Retirar Saldo...'); 
                var cantidad = 'Introduce la cantidad a retirar: ';
                rl.question(cantidad, async (res2) =>{
                    isNaN(cantidad) ? await modificarSaldo("fdfefefee",res2).then((s => menuRecursivo())) : console.log('Por favor introduce un número.') 
                });
                break;      
            case '4': 
                await borrarSaldo().then((s => menuRecursivo())); 
                break;
            case '5': 
                console.log("Saliendo");
                process.exit(0);
            default: console.log('Operacion no reconocida, vuelva a introducir una opción')
        }
    });


}


menuRecursivo();
  
  
  //export const choice = () => {
  //  rl.question('Introduzca número:', n => console.log(n**2));
  //}