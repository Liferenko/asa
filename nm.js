var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transport = nodemailer.createTransport(smtpTransport({
    host: 'smtp.mandrillapp.com',
    port: 587,
    auth: {
        user: 'paveldenysov@gmail.com',
        pass: 'VsNRE1c5hOgKZRGxkYusqQ'
    }
}));

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'Fred Foo ✔ <paveldenysov@gmail.com>', // sender address
    to: 'paveldenysov@gmail.com, eleven.krsk@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: '<b>Hello world ✔</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});
