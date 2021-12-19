const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost/pokedex';

const db = mongoose.connect(mongoUrl);

module.exports = db;