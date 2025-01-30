import { promises as fs } from 'fs';
import dialog from 'dialog-node';
//import popup from 'popups';
import readline from 'readline';


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
            // Maneja depósitos
            // Usa expresión regular para validar formato "deposit cantidad"
            // Extrae la cantidad y llama a modificarSaldo
            let cantidad = parseInt(retVal.split(" ")[1]);
            await modificarSaldo("depositar",cantidad);
            //console.log(cantidad);
            break
        
        case retVal.match(/^withdraw\s\d+/)?.input:
          // Maneja retiros
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

//dialog.entry("=====Menu=====\n get = obtener saldo\n deposit + cantidad = depositar cantidad\n withdraw + cantidad = retirar cantidad\n clean = vaciar cuenta\n",
// "entry prompt", 0, callback);

const file = "saldo.json"

export const obtenerSaldo = async () => {
    try {
      const objeto_saldo = await fs.readFile(file,"utf8");
      const string_saldo = JSON.parse(objeto_saldo)
      const saldo = string_saldo.dollars
      //devuelve esto si el archivo existe
      console.log("Saldo actual: ", saldo);
      return saldo;
    } catch (error) {
      return `Got an error trying to read the file`;
    }
}

export const modificarSaldo = async (operacion,cantidad) => {
  try {
    const string_saldo = await fs.readFile(file,"utf8");
    const objeto_saldo = JSON.parse(string_saldo);
    const saldo = objeto_saldo.dollars;
    if (operacion === "depositar") {
      var nuevosaldo = saldo+parseInt(cantidad);
      var salida = "Deposito: ";
    }else{
      var nuevosaldo = saldo-parseInt(cantidad);
      var salida = "Retiro: ";
    }
    console.log(`${salida} ${cantidad} dólares`);
    objeto_saldo.dollars = nuevosaldo;
    console.log(`Nuevo saldo: ${objeto_saldo.dollars} dólares`);
    await fs.writeFile(file, JSON.stringify(objeto_saldo), { flag: "w" }, (err) => {
      if (err) throw err;
    });
    //return r;
  } catch (error) {
    return `Got an error trying to read the file`;
  }
}

export const borrarSaldo = async () => {
  await fs.writeFile(file, JSON.stringify({"dollars":0}), { flag: "w" }, (err) => {
    if (err) throw err;
  });
  let m = 'Saldo reiniciado a 0';
  console.log('Saldo reiniciado a 0');
  return m;
}


async function depositaYcomprueba(deposito) {
  //await obtenerSaldo();
  await modificarSaldo("depositar",deposito);
  await obtenerSaldo();
  //await borrarSaldo();
  //await obtenerSaldo();
  //console.log(b);
}

//await depositaYcomprueba(8000);

