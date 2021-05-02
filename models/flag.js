const mongoose = require ('mongoose')
const Schema = mongoose.Schema


const FlagSchema = new Schema({
    name: String,
    posts: [],
    description: String

})

module.exports = mongoose.model('Flag', FlagSchema)