## Exercises

1. Crea un componente Text que reciba por props un hola mundo, este hola mundo debe ser un state desde un componente padre.

2. En tu app react crea un componente que tenga un boton que al darle click se actualice el color del fondo del boton a verde.

3. Crea un componente que actualice en un p lo que el usuario vaya escribiendo en un input (onChan..).

4. Vamos a crear una lista de contactos como en la siguiente imagen, para eso nos vamos a crear un componente llamado Avatar que va a recibir por Props un array y deberá pintar los avatares, el color verde nos indicara el online, al darle click sobre la imagen nos deberá cambiar el opacity de la imagen y el color a rojo offline, para esto debemos valernos de los eventos en react y del state.

Al darle click de nuevo a un usuario en offline deberá cambiar a online de nuevo.
Modificar el componente para que tenga un input que cuando se escriba, se filtren los contactos cuyo nombre contenga lo que el usuario escribió.

Ahora haremos comunicación de hijo a padre, al darle click a la imagen para cambiar a offline, deberá aparecernos un mensaje desde nuestro componente padre que nos indique el nombre del usuario y que esta offline, el mensaje debe durar dos segundos y quitarse

```jsx
let contacts = [
  {
    img: `https://randomuser.me/api/portraits/men/1.jpg`,
    name: "pepe",
  },
  {
    img: `https://randomuser.me/api/portraits/women/2.jpg`,
    name: "carla",
  },
  {
    img: `https://randomuser.me/api/portraits/men/3.jpg`,
    name: "andres",
  },
  {
    img: `https://randomuser.me/api/portraits/women/4.jpg`,
    name: "andrea",
  },
  {
    img: `https://randomuser.me/api/portraits/men/5.jpg`,
    name: "victor",
  },
  {
    img: `https://randomuser.me/api/portraits/men/6.jpg`,
    name: "jose",
  },
];
```

## NOTAS

- Todos los componentes en React Tienen un ciclo de vida (LifeCycle):
- 1. Creación o Montado (MOUNT).
-      - Esta es la primera que un componente va a ser pintado en el DOM.
-      - Solo se ejecuta una vez
-      - Consiste en llamar a la función del componente (Lo hace React) --> StateExample()

- 2. Actualización
-      - En esta fase se queda el componente hasta que queremos eliminarlo de la web.
-      - Se ejecuta cada vez que se modifiquen algunos aspectos del componente (los vemos luego)
-      - Consiste en volver a llamar a la funcion del componente (lo hace react),
-        con los valores de esos "aspectos" actualizados.
-      - Se le conoce como re-pintado
-      - ¿Que aspectos son lo que lanzan un re-pintado?
-          * Cambio en una prop
-          * Cambio en el State del componente (Lo vemos ahora)

- 3. Muerte, mejor dicho, DESMONTADO (UNMOUNT)
-      - Queremos que el componente se deje de pintar, por tanto react lo elimina del DOM real
-      - ¿Cuando se produce esto?
-          * EN un renderizado condicional
-          * En un cambio de página (Todos los componentes de la página anterior se desmontan y todos los de la página nueva se montan)
-          * Cuando cerramos la pestaña
-      - Se utiliza para eliminar la "basura" que deja nuestro componente
-          ej: caso claro: eliminar un `setInterval`
-
- Ref: https://es.reactjs.org/docs/state-and-lifecycle.html

- Diagrama: https://blog.logrocket.com/wp-content/uploads/2021/05/react-hooks-lifecycle-diagram.png
-
-
- ----------- Hooks ---------------
-
- Son FUNCIONES, que nos ayuda a enganchar partes del ciclo de vida de un componente react.
-      - Podríamos verlo como un addEventListener, pero del ciclo de vida de reactJS
-
- Cosas importantes de los hooks:
-      - Su tipo de datos es FUNCTION
-      - Su nombre empieza por  `use` + Cualquier string Camel case
-      - Un hook SOLO se puede ejecutar en un Componente de ReactJS o EN otro hook
-
- Hay muchos hooks. React nos proporciona unos cuantos, pero luego podemos crearnos los nuestros propios
- o usar librerías que tienen sus propios hooks.
-
- --------- State --------
-
- Todos los componentes de React, tienen un estado interno.
- Este estado es de tipo **Object** y contienen información que cuando la modifiquemos
- queremos que el componte se refresque
-
- Regla de oro: Si hay una variable que queremos cambiar y que se refresque el componente, hay que meterla
-              en el State del componente.
-
- Para poder usar el State, necesito un hook llamado `useState`.
-
- ¿De donde saco la función useState?
- import {useState} from 'react';
- ¿Como creo una variable dentro del state?
-      - tengo que ejecutar la función de useState.
-      - cada vez que la ejecute me añade una prop al estado
-
- ¿Que devuelve la función useState?
- Devuel un array de dos elementos:
-      1. El valor ACTUAL de la prop del state. Estará actualizado cuando el componente se refresque.
-      2. Es una FUNCION para actual esa prop del state.
-         A esta función le pasamos el NUEVO valor que queramos que tenga
-
- ¿Como puedo darle un valor inicial a esa propiedad?
-      Es el primer parámetro del useState
  \*/

```jsx
import { useState } from "react";

function StateExample(props) {
  const [pColor, updateColor] = useState("green");
  const [counter, updateCounter] = useState(0); // pintar el numero de click en otra prop del state
  // let pColor = 'green';
  console.log("Repintando el componente", pColor);
  const handleClick = (e) => {
    /* NO SE PUEDE MODIFICAR EL DOM DIRECTAMENTE. */
    // pColor = 'red';
    updateColor("red");
    updateCounter(counter + 1);
  };

  return (
    <p style={{ color: pColor }} onClick={handleClick}>
      Numero de clicks: {counter}
    </p>
  );
}

export default StateExample;
```

///////////////Exercise 1////////////////

import React, { useState } from 'react';

function Example() {
// Declaración de una variable de estado que llamaremos "count"
const [count, setCount] = useState(0);

/////////////////////////////////////////

////////////Exercise 3 ///////////////

```jsx
const App = () => {
  /*  Initial State */
  let [Name, setname] = useState("");

  /* The handleChange() function to set a new state for input */
  const handleChange = (event) => {
    setname(event.target.value);
  };
  return (
    <>
      <form>
        {/* The handleChange() is triggered when text is entered */}
        <div>
          <h1>
            My Name is <span style={{ color: "red" }}>{Name}</span>
          </h1>

          {/* Controlled input component */}
          <input
            type="text"
            value={Name}
            onChange={handleChange}
            placeholder="Enter a text"
          />
        </div>
      </form>
    </>
  );
};

export default App;
```
