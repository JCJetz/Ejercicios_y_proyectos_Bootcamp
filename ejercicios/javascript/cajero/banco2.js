import { argv } from 'process';
import { obtenerSaldo, modificarSaldo, borrarSaldo  } from './cajero.js'; 



// imprimir process.argv
//El segundo elemento será la ruta al archivo JavaScript que se está ejecutando

async function depositarOretirar (tipo,importe) {
    //console.log(`Llamar a la función depositar/retirar saldo: '${tipo}' => ${importe}`); 
    if (!isNaN(importe)) {
        tipo == "depositar" ? await modificarSaldo("depositar",parseInt(importe)) : await modificarSaldo("retirar",parseInt(importe))
    } else {
        console.log("Las funciones 'deposit' y 'withdraw' solo aceptan números como argumentos");
    }
};

const cajeroArguments = async () => {

    if(argv.length < 3 || argv.length > 4 ){
        console.log ("Uso: banco2.js [arguments]:\n 'get': (obtener saldo)\n 'deposit/withdraw + cantidad:' (depositar/retirar importe)\n 'clean': (vaciar cuenta)");   
    } else {
        switch(argv[2]) {
            case "get":
                console.log('Llamar a la función obtener Saldo...');
                await obtenerSaldo();
                break;
            case "deposit":
                argv[3] ? depositarOretirar("depositar",parseInt(argv[3])) : console.log("Esta función requiere introducir un importe")
                break;
            case "withdraw":
                argv[3] ? depositarOretirar("retirar",parseInt(argv[3])) : console.log("Esta función requiere introducir un importe")
                break;
            case "clean":
                borrarSaldo();    
                break
            default: 
                console.log('Operacion no reconocida, vuelva a introducir una opción');
        }    
        //console.log(`${index}: ${val}`);
    }
}

cajeroArguments();

