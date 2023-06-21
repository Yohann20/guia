const express = require('express');
const PORT = 3000;  
//CRUD - Create, Read, Update, Delete 
//POST,GET,PUT/PATCH,DELETE
const app = express(); 

//peticion tipo GET
app.use(express.json());  
let list = [
    {id: 1, name: 'Persona 1', estado_salud_actual: 'sano'},
    {id: 2, name: 'Persona 2',estado_salud_actual: 'lesionado'},
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
//Como usuario quiero actualizar una tarea 
app.put('/:id/estado_salud_actual', (req, res) => { 
 const {id} = req.params; 
 const {estado_salud_actual} = req.body; 

 res.json({mensaje: `Se actualizo el estado de salud de la persona con id ${id} a ${estado_salud_actual}`});


});

app.listen(PORT, () => {    
    console.log(`Server running on port ${PORT}`);
}); 




