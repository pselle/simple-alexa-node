var Alexa = require('alexa-sdk')
// var config = { clientId: "YOUR_ID_HERE" }
var config = {}
var iopipe = require('iopipe')(config)

var handlers = {
    'LaunchRequest': function () {
        this.emit('SayHello');
    },
    'HelloWorldIntent': function () {
        this.emit('SayHello')
    },
    'SayHello': function () {
        this.emit(':tell', 'Hello Serverless Conf!');
    },
    'ErrorIntent': function() {
      this.emit('SayError')
    },
    'SayError': function() {
       this.emit(':tell', 'Error! Error! Oh no!')
       throw(new Error("Oh snap!"))
    }
}

exports.handle = iopipe(function(e, ctx, cb) {
  var alexa = Alexa.handler(e, ctx)
  alexa.registerHandlers(handlers)
  alexa.execute()
})