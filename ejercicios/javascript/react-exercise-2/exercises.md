## Exercises  PROPS  10/05/22
### son objetos para comunicar componentes de padre-hijo 

1. Crear una app de reactJS para practicar props:

.a Crear un componente greeting. Este componente debe recibir por props dos variables name y age. Y debe mostrar en un p el texto: Hola nombre, tengo edad años

b. Crea un componente que reciba un booleano. Si el booleano está a true pinta un circulo rojo y si está a false crea un triangulo verde. 
hint: mirad la propiedad clip-path y utilizar un generador.

c. Crear un componente UserCard que reciba un objeto que representa al usuario. El componente debe pintar la siguiente card. Aclaración: El fondo gradiente tiene que ir en el App.js no en el componente.

i. El objeto que se pone de ejemplo se puede pegar directamente en una variable dentro de la función App
Ejemplo del objeto del usuario:
{
  "id": 1,
  "firstName": "Terry",
  "lastName": "Medhurst",
  "maidenName": "Smitham",
  "age": 50,
  "gender": "male",
  "email": "atuny0@sohu.com",
  "phone": "+63 791 675 8914",
  "username": "atuny0",
  "password": "9uQFF1Lh",
  "birthDate": "2000-12-25",
  "image": "https://robohash.org/hicveldicta.png?size=50x50&set=set1",
  "bloodGroup": "A−",
  "height": 189,
  "weight": 75.4,
  "eyeColor": "Green",
  "hair": {
    "color": "Black",
    "type": "Strands"
  },
  "domain": "slashdot.org",
  "ip": "117.29.86.254",
  "address": {
    "address": "1745 T Street Southeast",
    "city": "Washington",
    "coordinates": {
      "lat": 38.867033,
      "lng": -76.979235
    },
    "postalCode": "20020",
    "state": "DC"
  },
  "macAddress": "13:69:BA:56:A3:74",
  "university": "Capitol University",
  "bank": {
    "cardExpire": "06/22",
    "cardNumber": "50380955204220685",
    "cardType": "maestro",
    "currency": "Peso",
    "iban": "NO17 0695 2754 967"
  },
  "company": {
    "address": {
      "address": "629 Debbie Drive",
      "city": "Nashville",
      "coordinates": {
        "lat": 36.208114,
        "lng": -86.58621199999999
      },
      "postalCode": "37076",
      "state": "TN"
    },
    "department": "Marketing",
    "name": "Blanda-O'Keefe",
    "title": "Help Desk Operator"
  },
  "ein": "20-9487066",
  "ssn": "661-64-2976",
  "userAgent": "Mozilla/5.0 ..."
}

d .Crear un componente UserList que reciba un array de usuario por props y pinte una lista de cards como la del punto c.
Podéis crear una variable en el App,js que tiene dentro el array de usuarios que podéis copiar y pegar de la siguiente URL https://dummyjson.com/users

El listado de cards deberían estar en un contenedor flex responsive



# Temario

 * Las props nos permiten pasar información del padre al hijo.
 * A esto se le llamada "Comunicación Padre-Hijo"
 * 
 * El tipo de datos de las props es Object
 *  y contiene tantos propiedades como le pase el padre


function Greeting(props){
function Greeting({name,nationality}){ // lo mismo pero utilizando deconstrucción de objetos

    return (
        <>
            <h1>Hello, {name ?? 'UNKNOWN'}</h1>
            {nationality ? <a href="Algun lado.com">ir</a> : '' }
            <p>Soy {nationality ?? 'DE LA TIERRA'}</p>
        </>
    )
};



export default Greeting;