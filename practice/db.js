const mongoose = require('mongoose');
require("dotenv").config();


mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB_HOST);

module.exports = mongoose;
