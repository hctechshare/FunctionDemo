const qs = require("querystring");
module.exports = async function (context, req) {
    context.log('==================TEXTBOT FUNCTION EXECUTED==================');
    // context.log("req.url:", req.url);
    // context.log("req.body:", req.body);
    const formValues = qs.parse(req.body);
    context.log("To:", formValues.To);
    context.log("From:", formValues.From);
    context.log("Body:", formValues.Body);
        
    var textBody = formValues.Body;
    
    if (formValues.From == "+6516516511") {
        context.log("Admin texted");
    }

    var msg = "";
    switch (textBody.toLowerCase()) {
        case "hello":
            msg = "Hello!"
            break;
        case "goodbye":
            msg = "Goodbye.  It was nice texting with you."
            break;
        case "good morning":
            msg = "Top of the morning to yah!"
            break;
        default:
            msg = "Welcome to TechShare TextBot";
    }

    if (textBody.toLowerCase().includes('meaning of life')) {
        msg = "According to Jean-Paul Sartre, existence precedes essence; the (essence) of one's life arises only after one comes to existence. ... Arthur Schopenhauer answered: 'What is the meaning of life?' by stating that one's life reflects one's will, and that the will (life) is an aimless, irrational, and painful drive.";
    }

    if (textBody.toLowerCase().includes('game of thrones')) {
        msg = "Spoiler alert: Everyone dies... just kidding...";
    }

    if (textBody.toLowerCase().includes('all men must die')) {
        msg = "All men must serve";
    }

    if (textBody.toLowerCase().includes('valar morghulis')) {
        msg = "Valar Dohaeris";
    }

    // Even if you want to use a hard coded message in the binding, you must at least
    // initialize the message binding.
    context.bindings.message = {};

    // A dynamic message can be set instead of the body in the output binding. The "To" number 
    // must be specified in code. 
    context.bindings.smsMessage = {
        body : msg,
        to : formValues.From
    }; 
    
    
};