//nouvelle collection

//importer la bib mongo
const mongoose=require('mongoose')
//importer l objet schema qui permet de creer des schema de collection
const Schema=mongoose.Schema
//definition du schema de collection: creer un schema: 
//  schema c est un constructeur, on cree une instance de schema
const ArticleSchema= new Schema({
    titre:String,
    contenu:String,
    createdAt: {
        type:Date,
        default:new Date()
    },
    auteur:{
        //un article a un seul user 1*n donc objet
        ref:"users",
        type:Schema.Types.ObjectID
    },
    likedBy:[{
        ref:"users",
        type:Schema.Types.ObjectID
    }],
    commentedBy:[
        {ref:"users",
        type:Schema.Types.ObjectID

        }
    ]
})
// creation du model de la collection qui permettra l execution de requete
// creer un model prd en param le nom de la collection et son schema
const ArticleModel=mongoose.model('articles',ArticleSchema)

module.exports= ArticleModel


//add {
    //     "titre":"fourth article",
    //     "contenu":"this is the fourth article and it is verey very imporatnt to read ",
        
    //     "auteur":"607993c4864fb31285e5c41b",
    //     "likedBy":["60797c546542de0bd1234347","607993c4864fb31285e5c41b"],
    //     "commentedBy":["607993b9864fb31285e5c41a","607993ac864fb31285e5c419"]
            
    // }


// articles =[
//     {
//         "createdAt": "2021-04-16T13:36:23.834Z",
//         "likedBy": [
//             "607993ac864fb31285e5c419",
//             "607993b9864fb31285e5c41a"
//         ],
//         "commentedBy": [
//             "607993c4864fb31285e5c41b",
//             "60797c546542de0bd1234347"
//         ],
//         "_id": "60799472864fb31285e5c41c",
//         "contenu": "this is an article and it is verey very imporatnt to read ",
//         "auteur": {
//             "name": "sara",
//             "articles": [],
//             "_id": "60797c546542de0bd1234347",
//             "email": "sara@gmail.com",
//             "password": "322412345222",
//             "__v": 0
//         },
//         "__v": 0
//     },
//     {
//         "createdAt": "2021-04-16T13:36:23.834Z",
//         "likedBy": [
//             "607993ac864fb31285e5c419",
//             "607993c4864fb31285e5c41b"
//         ],
//         "commentedBy": [
//             "607993b9864fb31285e5c41a",
//             "60797c546542de0bd1234347"
//         ],
//         "_id": "607994b8864fb31285e5c41d",
//         "contenu": "this is the second article and it is verey very imporatnt to read ",
//         "auteur": {
//             "name": "ikram",
//             "articles": [],
//             "_id": "607993b9864fb31285e5c41a",
//             "email": "ikram@gmail.com",
//             "password": "198",
//             "__v": 0
//         },
//         "__v": 0
//     },
//     {
//         "createdAt": "2021-04-16T13:36:23.834Z",
//         "likedBy": [
//             "60797c546542de0bd1234347",
//             "607993c4864fb31285e5c41b"
//         ],
//         "commentedBy": [
//             "607993b9864fb31285e5c41a",
//             "607993ac864fb31285e5c419"
//         ],
//         "_id": "607994fb864fb31285e5c41e",
//         "contenu": "this is the third article and it is verey very imporatnt to read ",
//         "auteur": {
//             "name": "rafik",
//             "articles": [],
//             "_id": "607993ac864fb31285e5c419",
//             "email": "rafik@gmail.com",
//             "password": "98",
//             "__v": 0
//         },
//         "__v": 0
//     },
//     {
//         "createdAt": "2021-04-16T13:36:23.834Z",
//         "likedBy": [
//             "60797c546542de0bd1234347",
//             "607993c4864fb31285e5c41b"
//         ],
//         "commentedBy": [
//             "607993b9864fb31285e5c41a",
//             "607993ac864fb31285e5c419"
//         ],
//         "_id": "60799525864fb31285e5c41f",
//         "contenu": "this is the fourth article and it is verey very imporatnt to read ",
//         "auteur": {
//             "name": "hind",
//             "articles": [],
//             "_id": "607993c4864fb31285e5c41b",
//             "email": "hind@gmail.com",
//             "password": "2198",
//             "__v": 0
//         },
//         "__v": 0
//     }
// ]