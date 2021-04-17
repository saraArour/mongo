

const router = require('express').Router()

const {createUser,signin}=require('../controllers/AuthentificationController')

router.route('/register').post(createUser)
router.route('/signin').post(signin)


module.exports= router