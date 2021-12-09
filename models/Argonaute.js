const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Rentrez un nom svp'],
        trim:true,
        maxlength:[20,'Le nom ne peut pas etre plus long'],
        minlength:[2,'Rentrez un nom valide']
    },
     
})

module.exports = mongoose.model('Name', Schema)