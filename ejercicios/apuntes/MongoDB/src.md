En carpeta students, que estará dentro de src, tendré students.router.js y students.controller.js:

## students.router.js

```js
import express from 'express';
import { getAllStudentsCtrl, createStudentCtrl, getStudentByIdCtrl } from './students.controller.js';

const router = express.Router(); // asi creo un router en una variable

// defino las rutas dentro del router

router.route('/')
    .get(getAllStudentsCtrl) // Obtener TODOS los estudiantes (R)
    .post(createStudentCtrl); // crear 1 estudiante (C)

router.route('/:id')
    .get(getStudentByIdCtrl) // Obtener UN estudiante con un ID concreto (R)
    .patch(() => {}) // Actualizar UN estudiante (U)
    .put(() => {}) // Actualizar UN estudiante (U)
    .delete(() => {}) // Borrar UN estudiante (D)


export default router; // y lo exporto para que lo use el app u otro router
```

## students.controller.js
```js

import { ObjectId } from "mongodb";

// GET ALL
export const getAllStudentsCtrl = async (req, res) => {
    // ir a BBDD y devolver TODOS los estudiantes
    const db = req.app.locals.ddbbClient.db('demo'); // cojo la BBDD
    const col = db.collection('students'); // cojo la collection
    const students = await col.find().toArray(); // busco TODOS y lo paso a array
    res.json(students); // devuelvo el resultado al cliente
}

export const createStudentCtrl = async (req, res) => {
    const db = req.app.locals.ddbbClient.db('demo'); // cojo la BBDD
    const col = db.collection('students'); // cojo la collection
    const r = await col.insertOne(req.body); // aqui falta VALIDAR el body
    res.json({ id: r.insertedId }); // devuelvo el ID insertado para que el cliente sepa
}

export const getStudentByIdCtrl = async (req, res) => {
    const { id } = req.params;
    const db = req.app.locals.ddbbClient.db('demo'); // cojo la BBDD
    const col = db.collection('students'); // cojo la collection
    if (id.length === 12 || id.length === 24 ) {
        const o_id = ObjectId(id); // genero un ObjectId de MongoDB. Controlar el pete del ID
        const student = await col.findOne(o_id);
        if (student === null) {
            res.status(404).json({ error: 'No existe ese usuario' });
        } else {
            res.json(student);
        }
    }else{
        res.status(400).json({ error: 'El ID no tiene el formato correcto'});
    }

}

```
# En app.js :

```js
import express from 'express';
import studentRouter from './students/students.router.js';

export const app = express();

app.use(express.json()); // permitimos que el app procese JSON en el body de la request

app.get('/ping', (_req,res) => res.send('pong'));

app.use('/students', studentRouter); // ahora en /students se encuentran TODAS las rutas y subrutas definidas por studentRouter

```


# En index.js :

```js
import { MongoClient } from 'mongodb';
import { app } from "./app.js";

const URI = 'mongodb+srv://demo_bootcamp:demo_bootcamp@learning.c7hty.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(URI);

async function start(){
    try{
        await client.connect(); // 1. conectamos el cliente
        app.locals.ddbbClient = client; // 2. lo guardamos en el locals para que se acceda desde las rutas
        app.listen(3001, () => console.log('Servidor levantado en el 3001'));
    }catch(err){
        console.err('Error en el servidor: ', err);
    }
}


async function stop(){
    console.log('Cerrando el servidor');
    await client.close(); // cerramos al conexión con la BBDD
}

process.on('SIGINT', stop); // eventos del SO cuando hacemos ctrl+c
process.on('SIGTERM', stop);

start(); // lamamos a la función start que inicia todo (BBDD y Server de express)




