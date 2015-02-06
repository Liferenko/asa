// using SendGrid's Node.js Library - https://github.com/sendgrid/sendgrid-nodejs
var sendgrid = require("sendgrid")(api_user, api_key);
var email = new sendgrid.Email();
 
email.addTo("test@sendgrid.com");
email.setFrom("you@youremail.com");
email.setSubject("Sending with SendGrid is Fun");
email.setHtml("and easy to do anywhere, even with Node.js");
 
sendgrid.send(email);
