var nodemailer = require('nodemailer');
mandrill_client = new mandrill.Mandrill('2m6tATB3pEv6QVFvAzCGiA');
var template_name = "for-100k-10millionov-com";
var template_content = [{
        "name": "Main",
        "content": "Main"
    }];



// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Mandrill',
    auth: {
        user: 'eleven.krsk@gmail.com',
        pass: '2m6tATB3pEv6QVFvAzCGiA'
    }
});

//for-100k-10millionov-com



// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '10millionov✔ <eleven.krsk@gmail.com>', // sender address
    to: 'paveldenysov@gmail.com, eleven.krsk@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Новый вариант ✔', // plaintext body
    html: '<h1>Новый вариант</h1> ✔' // html body;
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});
mandrill_client.messages.sendTemplate({"template_name": template_name, "template_content": template_content, "message": message, "async": async, "ip_pool": ip_pool, "send_at": send_at}, function(result) {
    console.log(result);
    /*
    [{
            "email": "recipient.email@example.com",
            "status": "sent",
            "reject_reason": "hard-bounce",
            "_id": "abc123abc123abc123abc123abc123"
        }]
    */
}, function(e) {
    // Mandrill returns the error as an object with name and message keys
    console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
    // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
});