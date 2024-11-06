const cadastroModel = require('../models/cadastroModel')

module.exports.getCadastros = async(req,res)=>{
    const cadastros = await cadastroModel.find()
    res.send(cadastros);
}
    
module.exports.saveCadastros = async(req,res)=>{
    const {name,email,voto} = req.body   
    cadastroModel
        .create({name,email,voto})
        .then((data)=>{
            console.log('Cadastro salvo com sucesso')
            console.log(data)
            res.send('Cadastro salvo com sucesso')
        })
        .catch((err)=>{
            console.log(err)            
            res.sendStatus(400)            
        });
}


// cadastroModel
//         .create({name,email,voto})
//         .then((data)=>{
//             console.log('Cadastro salvo com sucesso')
//             console.log(data);
//             res.send(data);
//         })
//         .catch((err)=>console.log(err));