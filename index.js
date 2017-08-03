var alexa = require('alexa-app');
var app = new alexa.app();

app.launch(function (request, response) {
    response.say("Hey there, i'm your wingman from Youi and I get you.");
    response.shouldEndSession(false);
})

app.intent('GetClaimInformation',
    {
        "slots": { "claimType": "CLAIMTYPE", "yesNo": "YESNO" },
        "utterances": [
            "my {-|claimType} is {broken|cracked|chiped}"
        ]
    },
    function (request, response) {
        var claimType = request.slot('claimType');
        if(!claimType)
            response.reprompt('Sorry, I don\'t understand what is broken, please try again.');

        response.say(`Ohh no, your ${claimType} is damaged.`);

        //response.say(`Would you like to see who can repair the ${claimType} for you now? {-|yesNo}`);
        response.send();
        
    }
);


// Connect to lambda
exports.handler = app.lambda();

if (process.argv.length === 3
    && process.argv[2] === 'schema') {
    console.log(app.schema());
    console.log(app.utterances());
}