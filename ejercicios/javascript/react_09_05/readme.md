
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



--------------------------------------------------------------------------------------
# Introducción

ReactJS es una librería para construir interfaces de usuario (front-end de una web en el navegador). Lo crea Facebook y lo libera en el año 2009.

Uno de sus competidores más fuertes es Angular, mantenida por Google y tambien sale en el año 2009.

Angular es un framework y reactJS es una librería.

- Un framework es un conjunto de utilizades que te permiten construir una aplicación sin necesidad de añadir nada más, es decir, con lo que el framework proporciona tu puedes construir toda la app.

- Una librería son una utilidades para solucionar un problema concreto dentro de una app.

¿Como puedo entonces construir aplicaciones con reactJS?

Podemos porque realmente lo que aprenderemos son varias librerías que juntas forman un "framework":

- **ReacJS**: librería base con funciones y gestión del estado de la aplicación
- **ReactDOM**: librería que gestiona el arbol DOM de una manera muy eficiente
- **React Router**: librería que nos permite crear páginas dentro de una aplicación web
- **npm**: gestor de librerías/paquetes. nos permite instalar, utilizar o desinstalar librerías en nuestro proyecto.
- **JSX**: librería que nos ayuda a escribir y enlazar el HTML, CSS con JavaScript. Nos ayuda a eliminar (createElement, appendChild, addEventListener, etc)
- **create-react-app**: librería que nos ayuda a construir el esqueleto base para empezar a desarrollar. CLI con las operaciones para levantantar servidor, parar, construir la app para desplegar, texting, etc...

## ¿Como se estructura reactjs?

ReactJS construye las aplicaciones componeniendo la interfaz con `subcomponentes`, juntando estos componentes se forma la página web.

El component principal padre es el `App.js` y el que sería como el tag `html` es el `Index.js`

## ¿Como creo una aplicación reactJS?

Tenemos que tener instalado `npm`, que se instala automáticamente con `nodejs`

1. Sacar un terminal en el directorio donde queramos crear la app.
2. Ejecutar el siguiente comando:
    > npx create-react-app _nombre-app_