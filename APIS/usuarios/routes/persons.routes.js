// persons.routes.js
const { Router } = require('express');
const router = Router();

const {
    AddPersons,
    ShowPersons,
    ShowPerson,
    EditPersons,
    DeletePersons
} = require('../controllers/persons.controller'); // Verifica la ruta

router.post('/', AddPersons); // Agregar una persona
router.get('/', ShowPersons); // Mostrar todas las personas
router.get('/:id', ShowPerson); // Mostrar una persona específica
router.put('/:id', EditPersons); // Editar una persona
router.delete('/:id', DeletePersons); // Eliminar una persona

module.exports = router;
