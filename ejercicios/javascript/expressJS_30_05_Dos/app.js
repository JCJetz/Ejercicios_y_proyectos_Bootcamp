import fs from "fs";
import express from 'express';
import tasks from "./index.js";



const app = express();
app.use(express.json())

app.get("/tasks",(req,res) => { 
const data = fs.readFile("./tasks.json","utf8", (err,data) => {

    res.json(JSON.parse(data))

})})

app.post("/tasks", (req, res) => {
    let newTasks = [];
    try {
        const data = fs.readFileSync('./tasks.json', { encoding: 'utf8' });
        newTasks = [...JSON.parse(data), req.body];
        fs.writeFile("./tasks.json", JSON.stringify(newTasks), (err) => {
            if (err) {
                return console.log(err);
            }
            res.status(200).send("ok");
        });
    } catch (err) {
        res.status(500).send("Error procesando la solicitud");
    }
});
export default app






