const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    image : {type: String, required: true},
    token : {type: String, required: true},
    type : {type: String, required: true},
    price : {type: Number, required: true},
    User_id : {type: Number, required: false},
    createdAt: {type: Date, required: true},
    updateAt: {type: Date, required: false}

});

module.exports = mongoose.model('Producto',ProductoSchema);
