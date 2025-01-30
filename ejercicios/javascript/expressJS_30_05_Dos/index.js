import fs from "fs";
import app from "./app.js";
const port = 3000


export default app
let tasks = []

//primero
fs.readFile("./task.json","utf8", (err,data) => {
    if (err){

        fs.writeFile("./tasks.json", "[]", (err)=>{
            app.listen(app.get('port'),() => { //como es sincrono lo mando aesperar
                console.log(`express listening at port ${app.get('port')}`);   
})
    })
     }
    app.listen(app.get('port'),() => {
        console.log(`express listening at port ${app.get('port')}`);

})
});
