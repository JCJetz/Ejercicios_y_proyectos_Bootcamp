import {obtenerSaldo,borrarSaldo,modificarSaldo} from './cajero.js'

it('resets balance back to 0', async () =>{

    expect(await borrarSaldo()).toBe('Saldo reiniciado a 0');
    
})

it('gives back current balance after typing "get" on input', async () =>{

    borrarSaldo();
    expect(await obtenerSaldo()).toBe(0);
    
})

it('adds the amount the user deposits using "deposit quantity" to the account\'s balance', async() =>{
    await modificarSaldo("depositar",500);
    expect(await obtenerSaldo()).toBe(500);
})

it('withdraws the amount the user requests using "withdraw quantity" from the account\'s balance', async() =>{
    await modificarSaldo("palabra_que_no_es_depositar",300);
    expect(await obtenerSaldo()).toBe(200);
})

it('withdrawls the entire balance', async() => {
    await borrarSaldo();
    expect(await obtenerSaldo()).toBe(0);
})

