var area = require('./../models/area');
var competition = require('./../models/competition');
var match = require('./../models/match');

function getpresets(res) {
    preset.find(function (err, presets) {
        if (err) {
            res.send(err);
        }
        res.json(presets)
    });
};

module.exports = function (app) {

    app.get('/api/presets', function (req, res) {
        getpresets(res);
    });

    app.post('/api/presets', function (req, res) {

      console.log("high band is " + req.body.hi_band)

        preset.create({
            name: req.body.name,
            low_band: req.body.low_band,
            low_mid_hi_low_q: req.body.low_mid_hi_low_q,
            low_mid_freq_hz: req.body.low_mid_freq_hz,
            low_mid_gain: req.body.low_mid_gain,
            hi_mid_band: req.body.hi_mid_band,
            hi_mid_freq_khz: req.body.hi_mid_freq_khz,
            hi_mid_gain: req.body.hi_mid_gain,
            hi_band: req.body.hi_band,
            hi_peak_shelf: req.body.hi_peak_shelf,
            hi_freq_khz: req.body.hi_freq_khz,
            hi_gain: req.body.hi_gain,
            low_peak_shelf: req.body.low_peak_shelf,
            low_freq_hz: req.body.low_freq_hz,
            low_gain: req.body.low_gain,
            low_mid_band: req.body.low_mid_band,
            done: false
        }, function (err, preset) {
            if (err)
                res.send(err);

            getpresets(res);
        });
    });

    app.delete('/api/presets/:preset_id', function (req, res) {
        preset.remove({
            _id: req.params.preset_id
        }, function (err, preset) {
            if (err)
                res.send(err);

            getpresets(res);
        });
    });

    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html')
    });
};
