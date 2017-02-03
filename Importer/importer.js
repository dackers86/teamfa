var DataExporter = require('./data-exporter');
var DatabaseCleaner = require('./database-cleaner');
var competition = require('./../models/competition');
var match = require('./../models/match');
var area = require('./../models/area');
var CreateMatch = require('./create-match');

var mongoose = require('mongoose');
var database = require('./../config/database');
con = mongoose.connect(database.localUrl);


DataExporter((data) => {

  var parsedData  = JSON.parse(data);

  console.log("Retrived Data from  Api...");

  console.log("Starting Insert...");

  parsedData.gsmrs.competition.forEach(function(comp) {

    area.create({
      "id": comp.area_id,
      "name": comp.area_name,
    }, function (err, area) {
        if (err)
        {
          console.log(err);
        }
    });

    competition.create({
      "id": comp.competition_id,
      "area_id": comp.area_id,
      "name": comp.name,
    }, function (err, new_competition) {
          if (err)
          {
            console.log(err);
          }

          if(comp.season.round != undefined &&  comp.season.round.match != undefined && comp.season.round.match.length > 0){

            console.log(comp.season.round.match.length);

            comp.season.round.match.forEach(function(current_match) {
              match.create({
                id: current_match.match_id,
                area_id: new_competition.area_id,
                competition_id: new_competition.id,
                team_a_name: current_match.team_A_name,
                team_b_name: current_match.team_B_name,
                created_at: Date(),
                updated_at: Date(),
              }, function (err, area) {
                  if (err)
                  {
                    console.log(err);
                  }
              });
            });
          }

    });
  })
});
