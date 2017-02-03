var competition = require('./../models/competition');
var match = require('./../models/match');
var area = require('./../models/area');


  console.log("Cleaning Database...");

  match.remove({}, function(err) {
   console.log('match removed')
  });

  competition.remove({}, function(err) {
   console.log('competition removed')
  });

  area.remove({}, function(err) {
   console.log('area removed')
  });
