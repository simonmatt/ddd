const mongoose = require('mongoose');
const nodemon = require('nodemon');
const Schema = mongoose.Schema;

let AdUnit = new Schema({
  unit_name: {
    type: String
  },
  unit_price: {
    type: Number
  }
}, {
  collection: 'adunits'
});

module.exports = mongoose.model('AdUnit', AdUnit);
