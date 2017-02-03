var mongoose = require('mongoose');

module.exports = mongoose.model('Match', {
  id: {
    type: String,
    default: ''
  },
  area_id: {
    type: Number,
    default: 0
  },
  competition_id: {
    type: Number,
    default: 0
  },
  team_a_name: {
    type: String,
    default: 0
  },
  team_b_name: {
    type: String,
    default: 0
  },
  created_at: {
    type: Date
  },
  updated_at: {
    type: Date
  }
});
