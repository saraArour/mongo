//premiere etape

//importer la bib mongo
const mongoose=require('mongoose')
//importer l objet schema qui permet de creer des schema de collection
const Schema=mongoose.Schema
//definition du schema de collection: creer un schema: 
//  schema c est un constructeur, on cree une instance de schema
const UserSchema= new Schema({
    email:String,
    password:String,
    name:{
        type:String,
        default:"",
        required:true,
        unique:true
    },
    createdAt: Date,
    // un user a plusieurs articles
    articles:[{// tableau n*n
        ref:"articles",
        type:Schema.Types.ObjectID
    }]
})
// creation du model de la collection qui permettra l execution de requete
// creer un model prd en param le nom de la collection et son schema
const UserModel=mongoose.model('users',UserSchema)

module.exports= UserModel
