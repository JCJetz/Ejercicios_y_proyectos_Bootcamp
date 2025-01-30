import './style.css';

//function Greeting(props){}
function Greeting({nombre,years}){ // lo mismo pero utilizando deconstrucción de objetos

    return ( 
     
        <p> Hola soy {nombre}, tengo {years} años.</p>
        
    );
}
    export default Greeting;

