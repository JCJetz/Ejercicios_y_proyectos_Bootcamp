import {obtenerSaldo, modificarSaldo, borrarSaldo} from './cajero.js';
import dialog from 'dialog-node';
//import popup from 'popups';

//will be called after user closes the dialog
var callback = async function(code, retVal, stderr)
{
    console.log("return value = <" + retVal + ">");
    //let input = Number.parseInt(retVal) - 1;
    // now use menu to determine which option was choosen
    switch (retVal) {
        case "get":
            // added an instruction so a user knows what to do
            obtenerSaldo();
            break
        //case /^deposit\s\d+/.test:
        //regex empieza con palabra deposit, espacio y un número ó mas
        case retVal.match(/^deposit\s\d+/)?.input:
            let cantidad = parseInt(retVal.split(" ")[1]);
            await modificarSaldo("depositar",cantidad);
            //console.log(cantidad);
            break
        
        case retVal.match(/^withdraw\s\d+/)?.input:
            let withdraw = parseInt(retVal.split(" ")[1]);
            await modificarSaldo("withdraw",withdraw);
            //console.log(cantidad);
            break       

        case "clean":
            borrarSaldo();    
            break
        //case "deposit":
        default:
            console.log("Por favor introduce 'get', 'deposit/withdraw + cantidad' o 'clean'");
            break;
    }
}

dialog.entry("=====Menu=====\n get = obtener saldo\n deposit + cantidad = depositar cantidad\n withdraw + cantidad = retirar cantidad\n clean = vaciar cuenta\n",
 "entry prompt", 0, callback);


