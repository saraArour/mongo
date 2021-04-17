//2 eme etape

//importer le model user
const ArticleModel=require('../models/ArticleModel')

//creation des fonction qui permettront de manipuler les donnees
const getAllArticles=(req,res)=>{
    //find :retourne les documents d une collection
    //asynch: sous forme de then catch
    ArticleModel.find().populate('auteur').populate('likedBy').then(articles=>{
        res.json(articles)
    }).catch(err=>{
        res.json({
            err:err,
            message:"une erreur s est produite"})})

}
//get article by id
const getArticleById=(req,res)=>{
    var id=req.params.id
    ArticleModel.findById(id).then((articles=>{
        res.json(articles)
    })).catch(err=>{
        res.json(err)
    })
}
// 
const createArticle=(req,res)=>{
    
    //destruction de req .body
    var {title,contenu,auteur,likedBy,commentedBy}=req.body
//mthd1: creer une instance a partir de la class usermodel
    var newArticle=new ArticleModel({
        title: title,
        contenu:contenu,
        auteur:auteur,
        likedBy:likedBy,
        commentedBy:commentedBy
    })
    //save  de mongoose
    newArticle.save().then(articles=>{
        res.json(articles)
    }).catch(err =>{
        res.json(err)
    })
    //si on a plusieurs
       // newUser.insertMany
    
}
////delet user
const deleteArticle = (req,res)=>{
    var id=req.params.id
    ArticleModel.findByIdAndDelete(id).then(articles=>{res.json(articles)}).catch(res=>res.json(err))
}
//update user
const updateArticle=(req,res)=>{
    var id=req.params.id
    ArticleModel.findByIdAndUpdate(id, req.body).then(articles=>{res.json(articles)}).catch(res=>res.json(err))
}
///like
const likeArticle=(req,res)=>{
    var id=req.params.id
    ArticleModel.findByIdAndUpdate(id,{$push:{likedBy:req.body.userLiking}}).then(articles=>{res.json(articles)}).catch(res=>res.json(err))
}


module.exports={
    getAllArticles,
    createArticle,
    deleteArticle,
    updateArticle,
    getArticleById,
    likeArticle
}

// headless cms :strapi, ghost