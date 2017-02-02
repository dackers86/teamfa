var DataExporter = require('./data-exporter');
var competition = require('./models/competition');


DataExporter((data) => {
  var parsedData  = JSON.parse(data);

  parsedData.gsmrs.competition.forEach(function(competition) {
    console.log(competition.competition_id);

    competition.create({
      id: req.body.name,
      area_id: req.body.low_band,
      name: req.body.low_mid_hi_low_q,
    }, function (err, preset) {
      if (err)
        console.log(err);
  });

})
