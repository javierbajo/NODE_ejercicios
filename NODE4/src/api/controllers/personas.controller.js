const Persona = require('../models/personas.model');
// Crear las funciones de conexión con la base de datos

// Función para buscar todas las personas existentes en la BD
const getAllPersonas = async (req,res) => {
    try{
        // Buscar todas las personas en mongo
        const allPersonas = await Persona.find();
        return res.json(allPersonas);
    }catch(error){
        console.log(error);
    }
};
// Función para añadir una persona a la base de datos
const setNewPersona = async (req,res) => {
    try{
        const newPersona = new Persona(req.body); // esto se llama instanciar
        const createdPerson = await newPersona.save();
        return res.status(200).json(createdPerson);
    }catch(error){
        console.log(error);
        return res.status(500).json(error)
    }
};
//Función para modificar una persona existente
const updatePersona = async (req,res) => {
    try{
        const {id} = req.params; // por el params me llega el identificador
        const putPersona = new Persona(req.body); // por el body me llega la información a cambiar
        putPersona._id = id;
        const updatedPersona = await Persona.findByIdAndUpdate(id, putPersona, {new: true});
        return res.status(200).json(updatedPersona);
    }catch(error){
        console.log(error);
        return res.status(500).json(error)
    }
};
// Función para eliminar una persona existente
const deletePersona = async (req,res) => {
    try{
        const {id} = req.params; // por el params me llega el identificador
        const deletedPersona = await Persona.findByIdAndDelete(id);
        if(!deletedPersona){
            return res.status(404).json({message: 'Persona no encontrada'});
        }
        return res.status(200).json(deletedPersona);
    }catch(error){
        console.log(error);
        return res.status(500).json(error)
    }
};
// Función parafiltrar por ciudad
const filterByCity = async (req,res) => {
    try{
        const {citySearch} = req.query;
        const personCity = await Persona.find({city: citySearch}).sort({lastname: 1});
        return res.status(200).json(personCity);
    }catch(error){
        console.log(error);
        return res.status(500).json(error)
    }
}
const filterByNameOrder = async (req,res) => {
        try{
            let {nameSearch, sort} = req.query;
            sort = sort === 'asc' ? 1 : -1;
            const personName = await Persona.find({name: nameSearch})
            .sort({
                lastname: sort
            });
            return res.status(200).json(personName);

        }catch(error){
            console.log(error);
            return res.status(500).json(error)
        }

};
module.exports = {
    getAllPersonas, 
    setNewPersona, 
    updatePersona, 
    deletePersona, 
    filterByCity,
    filterByNameOrder
}

