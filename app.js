const express =require('express')
const app=express()
const db=require('./config/db')
//importer le user router
const UserRouter= require('./Routes/userRoute')
const ArticleRouter=require('./Routes/articleRoute')
const AuthRouter=require('./Routes/AuthRouter')

//importer le body parse
const bodyParser= require ('body-parser')
//utilisation du middlware bodyparser
app.use(bodyParser.json())

//utilisation de nos routers
app.use(AuthRouter)
app.use(ArticleRouter)
app.use(UserRouter)


app.get('/',(req,res)=>{
    res.send('hello world')
})
app.listen(3004,()=>{
    console.log('server is running on port 3004')
})