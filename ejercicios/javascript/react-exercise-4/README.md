# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Exercises

1. Comunicación hijo padre
Crear un componente EmptyBox que sea un contenedor de 150px por 150px vacio.
Crear un componente FillBox que sea un contenedor de 150px por 150px con un background color red.
Crear un componente BoxContainer que use los dos componentes previos. 
Cuando haga hover sobre el componente EmptyBox deberá cambiar el color de fondo de FillBox a verde.


2. Un componente hijo que tiene un input. Cuando se escriba en el input, se debe enviar su valor al padre.
Un componente padre que tenga el hijo y debajo un p. Este p debe pintar lo que se escriba en el input del hijo.

3. Llamando a un API:   Crear un componente CountryList que realice una llamada al JSON de paises
(GET, https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json) y pinte la lista de países con la siguiente en card estructura (${name_es} ${dial_code})

const countryArray = [{name_es:"españa",dial_code:34},{name_es:"reino unido",dial_code:23}];

Añadir un input de tipo text antes de la lista. Cuando escriba en la lista, se debe ir filtrando y aparecer los países que su nombre en español contenga el texto del usuario. 




## DEMO Fetch
```js
import { useEffect, useState } from "react";



function DemoFetch(){
    console.log('Se repinta el componente'); // 
    const [products, updateProducts] = useState({});

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(d => updateProducts(d)); // 
    }, []);
    

    const handleClick = () => { // si es una función de un evento del usuario, NO hace falta el useEffect
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(d => updateProducts(d)); 
    }
    console.log('Antes del return'); // 
    return (
        <>
            <h1>{products.limit}</h1>
            {products.products?.map(p => <img key={p.id} src={p.thumbnail} alt=""></img>)}
        </>
    )
}


export default DemoFetch;
```