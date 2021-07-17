const mongoose = require('mongoose');

const HistorialCompras = require('./HistorialCompras');

const UserSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    apellidos: {type: String, required: true},
    correo : {type: String, required: true},
    contraseña : {type: String, required: true},
    esAdmin : {type: Boolean, required: true},
    HistorialCompras: {type: [HistorialCompras], required: false}

});

module.exports = mongoose.model('User',UserSchema);

