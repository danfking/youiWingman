var alexa = require('alexa-app');
var app = new alexa.app();

app.launch(function (request, response) {
    response.say("Hey there, i'm your wingman from Youi and I get you.");
    response.shouldEndSession(false);
})

app.intent('GetClaimIntent',
    {
        "slots": { "claimType": "CLAIMTYPE" },
        "utterances": [
            "my {-|claimType} is {broken|cracked|chiped}"
        ]
    },
    function (request, response) {
        var claimType = request.slot('claimType');
        if(!claimType)
            response.reprompt('Sorry, I don\'t understand what is broken, please try again.');
        response.say(`Ohh no, would you like Youi to organise repairing your ${claimType} now?`);
        response.send();   
    }
);

app.intent('YesIntent',
    {
        "slots": { },
        "utterances": [
            "{yes|yeah|ok}"
        ]
    },
    function (request, response) {
        response.say(`Ok great... finding service providers.`);
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