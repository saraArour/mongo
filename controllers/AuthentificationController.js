const UserModel=require('../models/userModel')
const bcrypt= require('bcrypt')
// creation des tokens pour donner acces a mes services(get,post)
const jwt= require('jsonwebtoken')
//declarer la cle privee pour crypter l email
var my_secret= "shengriha forever"

// jwt.sign(payload, secretOrPrivateKey, [options, callback])
// payload: le mail ql va crypter
//secretOrPrivateKey c est la cle secret

// create user
const createUser=(req,res)=>{
    
    //destruction de req .body
    var {email,password,name}=req.body
// le hash du mot de passe
    bcrypt.hash(password,10,function(err,hash){
//mthd1: creer une instance a partir de la class usermodel
var newUser=new UserModel({
    email: email,
    password:hash,
    name:name
})
//save  de mongoose
newUser.save().then(data=>{
    res.json(data)
}).catch(err =>{
    res.json(err)
})
    })

    //si on a plusieurs
       // newUser.insertMany
    
}
//*******************loggin ***********************/
/// sign in
const signin =(req,res)=>{
    //recuperation des infosdepuis le body de la requete
    var {email,password}= req.body
    //on verifie si l utilisateur existe bien avec cet email
    UserModel.findOne({email:email}).then(result=>{
        //si le resultat est un objet vide "{}", on retourne une erreur
       if(Object.keys(result).length ==0){
        //    Object.keys(r) retourn un tab si il est vide donc l utilisateur n existe pas 
        res.json({
            messsage: "l utilisateur n existe pas verifier votre adresse mail"
        })
       }else{
           //sinon on compare le password entr2, et le password existant dans la bdd
           bcrypt.compare(password,result.password, (err,same)=>{
               // si les password ne sont pas pareil, retourner une erreur
               if(!same) res.json({message:" password incorrect"})//res.json is like return here
               // sinon, retourner le user et un message de bienvenu
            // le token une fois connecte
               jwt.sign(email, my_secret, (err,token)=>{
                   if (err) res.json(err)
                   res.json({user:result,message:"vous etes bien connecte", jwt:token})
               }
               )
           })
       }
    }).catch(err=>{
        res=>res.json(err)  
    })
}
module.exports={
    createUser,
    signin
}

// apres le login les users crees surpostman
// {
//     "name": "sara",
//     "articles": [],
//     "_id": "607aa93b0043b91eeb4ff981",
//     "email": "sara@hotmail.com",
//     "password": "$2b$10$tWGTvf78Zw/J3yOBSTpzAOje5lg2m0xZBbhpjSZXKOeAKPcoCJa0a", 123456
//     "__v": 0
// }
// {
//     "name": "rafik",
//     "articles": [],
//     "_id": "607aa98e0043b91eeb4ff982",
//     "email": "rafik@hotmail.com",
//     "password": "$2b$10$C7ShuycPZACufsxN9s1jtOuHdXRmGTiYtaDs.37LrTs5bMzFTBIgW",123456
//     "__v": 0
// }
// {
//     "name": "ikram",
//     "articles": [],
//     "_id": "607aa9ae0043b91eeb4ff983",
//     "email": "ikram@hotmail.com",
//     "password": "$2b$10$rQMISBgLXE7PTQa0M/v2P.r5aU6gWsuT7APc1jIGXf6lhj5z64dl.", 6789
//     "__v": 0
// }
// {
//     "name": "hind",
//     "articles": [],
//     "_id": "607aa9e30043b91eeb4ff984",
//     "email": "hind@hotmail.com",
//     "password": "$2b$10$aQ72A8uAJDybLwp0p4l3Ge/n4Kbmp2vNlGhVrFYVRi.v0Fd.hLbEW",1298
//     "__v": 0
// }
// {
//     "name": "asma",
//     "articles": [],
//     "_id": "607aacaeef0f5b203230902a",
//     "email": "asma@hotmail.com",
//     "password": "$2b$10$oIeaQmT57djPe6dYjRwqk.fQ.IH.Y/UPH1ZrdS8NfITt6TDGrpGKW", 4561
//     "__v": 0
// }