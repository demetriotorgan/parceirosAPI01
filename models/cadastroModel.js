const mongoose = require('mongoose')

const cadastroSchema = new mongoose.Schema({
    name:{
        type:String,        
    },
    email:{
        type:String,
        require: true,
        unique:true //Garante que o email será unico
    },
    voto:{
        type:String,        
    }
    // createdAt:{
    //     type:Date,
    //     default: Date.now
    // }
})

module.exports = mongoose.model('cadastro', cadastroSchema);