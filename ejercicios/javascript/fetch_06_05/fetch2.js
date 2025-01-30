/*
2. Jugando con Arrays. 
Realizar una llamada GET a la siguiente URL (https://jetzjc.free.beeceptor.com/square-divs) 
y pintar los divs de los colores de fondo que indica nuestro servidor.
*/

//pintar un div from fetch

/*
function square(){
    const r = await
    fetch('https://jetzjc.free.beeceptor.com/square-divs');
    const rd = await r.json();
    console.log(rd);
}
*/

fetch('https://jetzjc.free.beeceptor.com/square-divs')
.then(resp => resp.json() )
.then(squares => {
  for (const square of squares) {
    document.write(square.value);
    let div = document.createElement("div");
    div.style.backgroundColor = `${square.value}`;
    div.style.width = "100px";
    div.style.height = "100px";
    div.innerHTML = `Div ${square.color}`; 
    let target = document.getElementById("squares");
    //console.log(target);
    //console.log(div);
    target.appendChild(div);
  }
});