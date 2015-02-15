// mailer.js

var mailer   = require("mailer")
  , username = "eleven.krsk@gmail.com"
  , password = "Dtkbrjktgbt1";

mailer.send(
  { host:           "smtp.mandrillapp.com"
  , port:           25
  , to:             "paveldenysov@gmail.com"
  , from:           "eleven.krsk@gmail.com"
  , subject:        "Mandrill knows Javascript!"
  , body:           "Hello from NodeJS!"
  , authentication: "login"
  , username:       username
  , password:       password
  }, function(err, result){
    if(err){
      console.log(err);
    }
  }
);
