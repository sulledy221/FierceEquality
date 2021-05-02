const mongoose = require('mongoose');


const commentsSchema = mongoose.Schema({
  username: String,
  text: String,
  userId: { type: mongoose.Schema.Types.ObjectId }
}, {
  timestamps: true
});

const likesSchema = mongoose.Schema({
  ownerName: String,
  ownerId: { type: mongoose.Schema.Types.ObjectId }
})

const postSchema = new mongoose.Schema({
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    ownerName: String,
    text: String,
    flag: String,
    comments: [commentsSchema],
    likes: [likesSchema]
  }, {
    timestamps: true
  });
 
module.exports.postSchema = postSchema

module.exports = mongoose.model('Post', postSchema);