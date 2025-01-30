import express from 'express';
import bodyParser from 'body-parser';
import { query } from 'express';
  
// create application/json parser
var jsonParser = bodyParser.json()

const app = express();
const port = 3000;

//app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Esto '/ acepta el metodo de delante, get en este caso, o post, patch, put...
//payload, info util sin metadata
app.get('/hello',(req,res) => {
    res.send('Hello World\n');
})

//let valuesArray = Object.values(myObject);
app.get('/demo-methods',(req,res) => {
    let queryValuescon = req.query;
    let returnArray = Object.values(queryValuescon);
    
    res.send(JSON.stringify(returnArray));
    //res.send({ type: 'GET'});
    //res.json
})
app.post('/demo-methods', jsonParser, function (req, res) {
    if (req.body.data) {
        res.send({ type: 'POST', payload: req.body.data });
    } else {
        res.status(400);
        res.send({ error: 'La propiedad payload es obligatoria' });
    }   
})

app.patch('/demo-methods', jsonParser, function (req, res) {
    if (req.body.data) {
        res.send({ type: 'PATCH', payload: req.body.data });
    } else {
        res.status(400);
        res.send({ error: 'La propiedad payload es obligatoria' });
    }   
})

app.put('/demo-methods', jsonParser, function (req, res) {
    if (req.body.data) {
        res.send({ type: 'PUT', payload: req.body.data });
    } else {
        res.status(400);
        res.send({ error: 'La propiedad payload es obligatoria' });
    }   
})


app.delete('/demo-methods', jsonParser, function (req, res) {
    res.send({ type: 'DELETE' });
})

app.listen(port, () => {

    console.log(`Hello World ${port}`);
    
})

