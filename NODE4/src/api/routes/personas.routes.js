const express = require('express');
const router = express.Router();

const {
        getAllPersonas,
        setNewPersona,
        updatePersona, 
        deletePersona, 
        filterByCity,
        filterByNameOrder
    } = require('../controllers/personas.controller');



router.get('/', getAllPersonas); // muestra todas las personas en la base de datos
router.post('/', setNewPersona); // añade una nueva persona a la base de datos
router.put('/:id', updatePersona); // modifica una persona existente en la base de datos
router.delete('/:id', deletePersona); // elimina una persona existente en la base de datos
router.get('/city', filterByCity); // Selecciona en la base de datos según la ciudad
router.get('/filtername', filterByNameOrder);

module.exports = router;


 


