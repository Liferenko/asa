
mandrill_client = new mandrill.Mandrill('2m6tATB3pEv6QVFvAzCGiA');
var template_name = "for-100k-10millionov-com";
var template_content = [{
        "name": "Main",
        "content": "Main"
    }];
var message = {
    "html": "<p>Example HTML content</p>",
    "text": "Example text content",
    "subject": "example subject",
    "from_email": "10millionov@gmail.com",
    "from_name": "10millionov.com",
    "to": [{
            "email": "eleven.krsk@gmail.com, paveldenysov@gmail.com",
            "name": "Recipient Name",
            "type": "to"
        }],
    
    "important": true,
    "track_opens": true,
    "track_clicks": true,
    "auto_text": null,
    "auto_html": null,
    "inline_css": null,
    "url_strip_qs": null,
    "preserve_recipients": null,
    "view_content_link": null,
    "tracking_domain": null,
    "signing_domain": null,
    "return_path_domain": null,
    
};
var async = false;
var ip_pool = "Main Pool";
var send_at = "example send_at";
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