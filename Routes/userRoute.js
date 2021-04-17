//3 em etape

const router = require('express').Router()
//importer l objet qui contient les controllers
// const UserController=require('../controllers/userController')
const {getAllUsers,getUserById, deleteUser,updateUser}=require('../controllers/userController')
//securiser toutes les routes
const checkToken=require('../config/secureRoute')
router.use(checkToken)

router.route('/users').get(getAllUsers)
                      
router.route('/users/:id').get(getUserById)
                          .delete(deleteUser)
                            .put(updateUser)

// router.route('/signin').post(signin)
module.exports= router