const mongoose = require('mongoose');

const likesSchema = mongoose.Schema({
    username: String,
    userId: { type: mongoose.Schema.Types.ObjectId }
  })
  

module.exports.likesSchema = likesSchema

module.exports = mongoose.model('Likes', likesSchema);