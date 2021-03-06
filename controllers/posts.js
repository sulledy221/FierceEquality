const Post = require('../models/posts');
const Flag = require('../models/flag')

module.exports = {
    create,
    index,
    delete: deletePost
}

async function create(req, res) {
    try {
        req.body.ownerName = req.user.ownerName
        req.body.ownerId = req.user._id
        const post = await Post.create(req.body)
        res.status(201).json({ post })

    } catch (err) {
        console.log(err)
        res.json({ data: err })
    }
}

async function index(req, res) {
    try {

        const posts = await Post.find({ flag: req.params.flag }).exec()
        const flagData = await Flag.findOne({ name: req.params.flag }).exec()
        res.status(200).json({ posts, flagData })

    } catch (err) {
        res.json(err)
    }
}
async function deletePost(req, res) {
    try {

        await Post.findByIdAndDelete(req.params.id).exec()
        const posts = await Post.find({ flag: req.params.flag }).exec()
        res.status(200).json({ posts })
    } catch (err) {
        res.json(err)
    }
}