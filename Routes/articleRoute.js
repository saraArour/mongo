
const router = require('express').Router()
//importer l objet qui contient les controllers
// const UserController=require('../controllers/userController')
const {getAllArticles,createArticle,deleteArticle,updateArticle,getArticleById,likeArticle}=require('../controllers/ArticleController')
router.route('/articles').get(getAllArticles)
                         .post(createArticle)
router.route('/articles/:id').put(updateArticle)
                            .get(getArticleById) 
                             .delete(deleteArticle)    
router.route('/articles/likes/:id').put(likeArticle)
                     



module.exports= router