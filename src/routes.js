var area = require('./../models/area');
var competition = require('./../models/competition');
var match = require('./../models/match');

  function getAreas(res) {
      area.find(function (err, areas) {
          if (err) {
              res.send(err);
          }
          res.json(areas)
      });
  }

  function getCompetitionsByAreaId(res, id) {
      competition.find({"area_id" : id}, function (err, competitions) {
          if (err) {
              res.send(err);
          }
          res.json(competitions)
      });
  }

  function getMatchesByCompetitionId(res, id) {
      match.find({"competition_id" : id}, function (err, matches) {
          if (err) {
              res.send(err);
          }
          res.json(matches)
      });
  };

module.exports = function (app) {

    app.get('/api/areas', function (req, res) {
        getAreas(res);
    });

    app.get('/api/areas/:id/competitions', function (req, res) {
        getCompetitionsByAreaId(res, req.params.id);
    });

    app.get('/api/competitions/:id/matches', function (req, res) {
        getMatchesByCompetitionId(res, req.params.id);
    });


    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html')
    });
};
