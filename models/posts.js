const mongoose = require('mongoose');

const likesSchema = mongoose.Schema({
  username: String,
  userId: { type: mongoose.Schema.Types.ObjectId }
})

const postSchema = new mongoose.Schema({
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    ownerName: String,
    comments: String,
    likes: [likesSchema]

  }, {
    timestamps: true
  });
 
module.postSchema = postSchema

module.exports = mongoose.model('Post', postSchema);