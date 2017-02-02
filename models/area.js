var mongoose = require('mongoose');

module.exports = mongoose.model('Area', {
  id: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  }
});
