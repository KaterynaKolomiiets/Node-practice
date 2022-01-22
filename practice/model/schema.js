const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  url: String,
  name: String,
});

const Images = mongoose.model("images", schema);

module.exports = Images;
