var mongoose = require('mongoose');

module.exports = mongoose.model('Competition', {
  id: {
    type: String,
    default: ''
  },
  area_id: {
    type: Number,
    default: 0
  },
  name: {
    type: String,
    default: ''
  }
});
