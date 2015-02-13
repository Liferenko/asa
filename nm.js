var nodemailer = require('nodemailer');


// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'eleven.krsk@gmail.com',
        pass: 'google.com-CyfxfkfGkfnbCt,t'
    }
});

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '10millionov✔ <paveldenysov@gmail.com>', // sender address
    to: 'paveldenysov@gmail.com, eleven.krsk@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: 'Hello world ✔' // html body;
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});
