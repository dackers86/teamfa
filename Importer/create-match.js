var match = require('./../models/match');

module.exports  = function(competition){

  console.log(competition);

  competition.season.forEach(function(season) {
        season.round.forEach(function(round) {
              round.match.forEach(function(match) {

                match.create({
                  id: match.match_id,
                  area_id: competition.area_id,
                  competition_id: competition.competition_id,
                  team_a_name: match.team_A_name,
                  team_b_name: match.team_B_name,
                  created_at: Date().getTime(),
                  updated_at: Date().getTime(),
                }, function (err, area) {
                    if (err)
                    {
                      console.log(err);
                    }
                });
             })
      })
    });
};
