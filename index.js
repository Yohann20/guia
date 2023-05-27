const express = require('express');
const PORT = 3000;  
//CRUD - Create, Read, Update, Delete 
//POST,GET,PUT/PATCH,DELETE
const app = express(); 

//peticion tipo GET
app.use(express.json());  
let list = [
    {id: 1, name: 'TAREA 1'},
    {id: 2, name: 'TAREA 2'},
]; 
//Como usuario quiero poder leer las tareas
app.get('/', (req, res) => {
    res.send(list);
});
//Como usuario quiero crear una tarea 
app.post('/', (req, res) => { 
    const task = req.body; 
    list.push(task);
    res.status(201).send(task);
});

app.listen(PORT, () => {    
    console.log(`Server running on port ${PORT}`);
}); 




