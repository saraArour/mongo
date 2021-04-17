const jwt = require("jsonwebtoken");
//on exporte une fonction qui va checker si le token est valide
module.exports = function checkToken(req, res, next) {
  console.log('verifying...')
  // on recupere le token depuis la requete: req.headers.token ou req.headers['token]
  var token = req.headers["token"];
  //si le token existe et n est pas vide
  if (token) {
    // on essaye de recupererle token, en utilisant jwt.verify(payload,private-key,[options,callback])
    jwt.verify(token, "shengriha forever", (err, decode) => {
      //si il y a une erreur dans le decryptage on la retourne
      if (err) {
        res.json({
          status: 500,
          message: "invalid token",
          error: "err.message",
        });
      } else {
        //sinon on passeau middleware prochain
        next();
      }
    });
  } else {
    //si le token n existe pas,on retourneune erreur
    res.json({
      status: 500,
      message: "no token provide",
      error: "token must be providein header for endpoint acess",
    });
  }
};
