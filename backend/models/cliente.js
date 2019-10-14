const mongoose = require ('mongoose');

const clienteSchema = mongoose.Schema({
        id: String,
        grupo: String,
        nombre: String,
        cuit: String,
        direccion: {direccion: String, localidad: String, codigoPostal: String},
        contactos: {nombre: String, telefono: String, mail: String},

});

module.exports = mongoose.model('Cliente', clienteSchema);
