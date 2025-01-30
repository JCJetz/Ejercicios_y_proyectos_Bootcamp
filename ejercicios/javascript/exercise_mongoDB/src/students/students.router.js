import express from 'express';
import { 
    getAllStudentsCtrl, 
    createStudentCtrl, 
    getStudentByIdCtrl,
    updateStudentCtrl,
    replaceStudentCtrl,
    deleteStudentCtrl 
} from './students.controller.js';


const router = express.Router(); // asi creo un router en una variable

// Rutas base, defino las rutas dentro del router
router.route('/')
    .get(getAllStudentsCtrl) // Obtener TODOS los estudiantes (R)
    .post(createStudentCtrl); // crear 1 estudiante (C)




// HAZ estos tres como ejercicio:

    router.route('/:id')
    .get(getStudentByIdCtrl) // Obtener UN estudiante con un ID concreto (R)
    .patch(updateStudentCtrl) // Actualizar UN estudiante (U)
    .put (replaceStudentCtrl) // Actualizar UN estudiante (U)
    .delete(deleteStudentCtrl); // Borrar UN estudiante (D)
   // .delete(() => {}) // Borrar UN estudiante (D)


export default router; // y lo exporto para que lo use el app u otro router