var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers = {

  'LaunchRequest': function () {
    this.emit(':ask', 'Welcome to B C NET 2018', 'Try saying hello');
  },

  'Hello': function () {
    this.emit(':tell', 'Hello there!');
  }

};
