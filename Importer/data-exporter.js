var request = require('request');
var parser = require('xml2json');

module.exports  = function(callback){

  request('http://static.teamfa.com/tests/data.xml', function (error, response, body) {
    return callback(parser.toJson(body));
  });
}
