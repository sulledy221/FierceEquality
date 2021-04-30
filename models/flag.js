const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const {postSchema} = require('./posts')


const FlagSchema = new Schema({
    name: String,
    links: [{title: String, url: String}],
    posts: [postSchema]

})

module.exports = mongoose.model('Flag', FlagSchema)