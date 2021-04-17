//2 eme etape

//importer le model user
const UserModel=require('../models/userModel')
var bcrypt= require('bcrypt')
//creation des fonction qui permettront de manipuler les donnees
const getAllUsers=(req,res)=>{
    //find :retourne les documents d une collection
    //asynch: sous forme de then catch
    UserModel.find().populate('articles').then(data=>{
        res.json(data)
    }).catch(err=>{
        res.json({
            err:err,
            message:"une erreur s est produite"})})

}
//mthd2
//asynch: sous forme de callback
// UserModel.find((err,resultat)=>{
//     if(err)
//     throw err;
//     res.json(resultat)
// })
//******** //

// get user by id
const getUserById=(req,res)=>{
    var id=req.params.id
    UserModel.findById(id).then((data=>{
        res.json(data)
    })).catch(err=>{
        res.json(err)
    })
}

//delet user
const deleteUser = (req,res)=>{
    var id=req.params.id
    UserModel.findByIdAndDelete(id).then(data=>{res.json(data)}).catch(res=>res.json(err))
}
//update user
const updateUser=(req,res)=>{
    var id=req.params.id
    UserModel.findByIdAndUpdate(id, req.body).then(data=>{res.json(data)}).catch(res=>res.json(err))
}

// create user
// const createUser=(req,res)=>{
    
//     //destruction de req .body
//     var {email,password,name}=req.body
// // le hash du mot de passe
//     bcrypt.hash(password,10,function(err,hash){
// //mthd1: creer une instance a partir de la class usermodel
// var newUser=new UserModel({
//     email: email,
//     password:hash,
//     name:name
// })
// //save  de mongoose
// newUser.save().then(data=>{
//     res.json(data)
// }).catch(err =>{
//     res.json(err)
// })
//     })

    //si on a plusieurs
       // newUser.insertMany
    
// }
//*******************loggin ***********************/
/// sign in
// const signin =(req,res)=>{
//     var {email,password}= req.body
//     //verifier si l email existe dans la bdd
//     UserModel.findOne({email:email}).then(result=>{
//        if(Object.keys(result).length ==0){
//         //    Object.keys(r) retourn un tab si il est vide donc l utilisateur n existe pas 
//         res.json({
//             messsage: "l utilisateur n existe pas verifier votre adresse mail"
//         })
//        }else{
//            bcrypt.compare(password,result.password, (err,same)=>{
//                if(!same) res.json({message:" password incorrect"})//res.json is like return here
//                res.json({user:result,message:"vous etes bien connecte"})
//            })
//        }
//     }).catch(err=>{
//         res=>res.json(err)  
//     })
// }

module.exports={
    getAllUsers,
    getUserById,
   
    deleteUser,
    updateUser
    // signin
}
// creation users sur postman
// sara: 60797c546542de0bd1234347
// rafik:607993ac864fb31285e5c419
// ikram:607993b9864fb31285e5c41a
// hind:607993c4864fb31285e5c41b

