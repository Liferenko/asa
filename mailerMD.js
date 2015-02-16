// Сейчас это тот скрипт, который смог таки прислать шаблон письма. 
// С ним и стоит работать. Задача сейчас - сделать так, чтобы скрипт брал имейл
// с текстового файла и отправлял на него письмо


var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('2m6tATB3pEv6QVFvAzCGiA');

var template_name = "for-100k-10millionov-com";
var template_content = [{
        "name": "Main",
        "content": "Main"
    }];
var message = {
    "html": "<p>Хачимэле</p>",
    "text": "Это текстулька",
    "subject": "Как применять Активное Трудоустройство",
    "from_email": "10millionov@gmail.com",
    "from_name": "Активное Трудоустройство",
    "to": [{
            "email": "paveldenysov@gmail.com",
            "name": "Pavel",
            "type": "to"
        }],
    "headers": {
        "Reply-To": "paveldenysov@gmail.com"
    },
    "important": false,
    "track_opens": true,
    "track_clicks": true,
    "auto_text": null,
    "auto_html": null,
    "inline_css": null,
    "url_strip_qs": null,
    "preserve_recipients": null,
    "view_content_link": null,
    "bcc_address": "message.bcc_address@example.com",
    "tracking_domain": null,
    "signing_domain": null,
    "return_path_domain": null,
    "merge": true,
    "merge_language": "mailchimp",
    "global_merge_vars": [{
            "name": "merge1",
            "content": "merge1 content"
        }],
    
   
    
};
var async = false;
var ip_pool = "Main Pool";
mandrill_client.messages.sendTemplate({"template_name": template_name, "template_content": template_content, "message": message, "async": async, "ip_pool": ip_pool,}, function(result) {
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