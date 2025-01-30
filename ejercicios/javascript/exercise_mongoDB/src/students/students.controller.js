import { ObjectId } from "mongodb";

// GET ALL
export const getAllStudentsCtrl = async (req, res) => {
    // ir a BBDD y devolver TODOS los estudiantes
    const db = req.app.locals.ddbbClient.db('demo'); // cojo la BBDD  // cambia los demos por hello para el ejercicio.
    const col = db.collection('students'); // cojo la collection 'students'
    const students = await col.find().toArray(); // busco TODOS y lo paso a array
    res.json(students); // devuelvo el resultado al cliente en formato JSON
}

export const createStudentCtrl = async (req, res) => {
    const db = req.app.locals.ddbbClient.db('demo'); // Conexión a la base de datos
    const col = db.collection('students'); // Selección de colección
    const r = await col.insertOne(req.body); // aqui falta VALIDAR el body
    res.json({ id: r.insertedId }); // devuelvo el ID insertado para que el cliente sepa
}

// Controller para obtener UN estudiante por su ID
// GET /students/:id
export const getStudentByIdCtrl = async (req, res) => {
    const { id } = req.params;   // Extraer ID de los parámetros
    const db = req.app.locals.ddbbClient.db('demo'); // cojo la BBDD
    const col = db.collection('students'); // cojo la collection
    if (id.length === 12 || id.length === 24 ) {
        const o_id = ObjectId(id); // genero un ObjectId de MongoDB. Controlar el pete del ID
        const student = await col.findOne(o_id); //en mi coleccion encuentra uno, el que tenga este ID
        if (student === null) {
            res.status(404).json({ error: 'No existe ese usuario' });
        } else {
            res.json(student);
        }
    }else{
        res.status(400).json({ error: 'El ID no tiene el formato correcto'});
    }

}

// Controller para ACTUALIZAR PARCIALMENTE un estudiante
// PATCH /students/:id
export const updateStudentCtrl = async (req, res) => {
    try {
        const { id } = req.params;
        const db = req.app.locals.ddbbClient.db('demo');
        const col = db.collection('students');

 // $set: actualiza solo los campos especificados en req.body       
        const result = await col.updateOne(
            { _id: new ObjectId(id) },
            { $set: req.body }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json({ message: 'Student updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller para REEMPLAZAR COMPLETAMENTE un estudiante
// PUT /students/:id
export const replaceStudentCtrl = async (req, res) => {
    try {
        const { id } = req.params;
        const db = req.app.locals.ddbbClient.db('demo');
        const col = db.collection('students');

// replaceOne: reemplaza todo el documento
        const result = await col.replaceOne(
            { _id: new ObjectId(id) },
            req.body
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json({ message: 'Student replaced successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Controller para ELIMINAR un estudiante
// DELETE /students/:id
export const deleteStudentCtrl = async (req, res) => {
    try {
        const { id } = req.params;
        const db = req.app.locals.ddbbClient.db('demo');
        const col = db.collection('students');
        
        const result = await col.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};