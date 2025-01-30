# API REST de Estudiantes con MongoDB

API REST simple para gestionar estudiantes utilizando MongoDB y Express.js.

## Configuración Inicial

1. Inicializar proyecto:
```bash
npm init -y
```
2. Instalar dependencias:

npm i express mongodb
npm i nodemon -D

3. Configurar package.json:

"main": "index.js",
"type": "module",
{
 
  "scripts": {
    "start": "nodemon src/index.js"
  }
}


# Exercise

En students.router.js 

Haz estos tres como ejercicio:

```js
    router.route('/:id')
    .get(getStudentByIdCtrl) // Obtener UN estudiante con un ID concreto (R)
    .patch(() => {}) // Actualizar UN estudiante (U)
    .put(() => {}) // Actualizar UN estudiante (U)
    .delete(() => {}) // Borrar UN estudiante (D)


export default router; // y lo exporto para que lo use el app u otro router

```