// importer la bib de mogodb
const mongoose=require('mongoose');
//se connecter a le bdd mongoose.connect (url,options,callback)
mongoose.connect('mongodb://localhost:27017/db',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
},(err)=>{
    if(err)
    console.log(err)
    else
      console.log("tout est bon")
})
//exporter une instance de la connection
module.exports= mongoose.connection