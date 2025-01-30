import express from 'express';
import bodyParser from 'body-parser';
//import { query } from 'express';
import { leerCreaArchivo, añadirTarea, borrarTarea } from '../src/tasks.js';
  
// create application/json parser
var jsonParser = bodyParser.json()

const app = express();
const port = 3002;

//app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/hello',(req,res) => {
    res.send('Hello Server\n');
})
app.listen(port, () => {

    console.log(`Hello Server ${port}`);
    
})

app.get('/tasks', (req, res) => {

    leerCreaArchivo().then((data) => {
        console.log(data);
        res.status(200).json({ "status": true, "result": data });
        //res.send(data);
    });
});


app.post('/tasks',(req,res) => {
    let queryValues = req.query;
    let returnArray = Object.values(queryValues);
    if (returnArray.length > 2) {
        añadirTarea(returnArray[0],returnArray[1],returnArray[2]);
        res.status(200).json({ "status": true, "result": returnArray });
    } else {
        res.status(400).json({ "status": false, "result": "Requiere 3 parametros" });
    }
    
});

app.get('/tasks/:id', (req, res) => {

    leerCreaArchivo().then((data) => {
        console.log(data);
        let reqid = req.params.id;
        let result = data.find(obj => {
            return obj.id === reqid;
        });
        result ? res.status(200).json({ "status": true, "result": result }) 
               : res.status(404).json({ "status": false})
        //res.send(data);
    });
});

app.delete('/tasks/:id', (req, res) => {

    leerCreaArchivo().then((data) => {
        console.log(data);
        let reqid = req.params.id;
        borrarTarea(reqid).then((result) =>{
            res.status(200).json({ "status": true, "result": result });
        });
    });
});

leerCreaArchivo();

