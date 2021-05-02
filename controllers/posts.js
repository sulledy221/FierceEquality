const Post = require('../models/posts');

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

        // on a query aka .find({}) you just call .exec() to execulate the .populate('user')
        const posts = await Post.find({flag:req.params.flag}).exec()
        // userSchema.set('toObject') gets invoked, to delete the password
        // when we populate the user so we don't have to worry about sending over the password!
        res.status(200).json({ posts })
    } catch (err) {
        res.json(err)
    }
}
async function deletePost(req, res) {
    try {

        // on a query aka .find({}) you just call .exec() to execulate the .populate('user')
        await Post.findByIdAndDelete(req.params.id).exec()
        const posts = await Post.find({flag:req.params.flag}).exec()
        // userSchema.set('toObject') gets invoked, to delete the password
        // when we populate the user so we don't have to worry about sending over the password!
        res.status(200).json({ posts })
    } catch (err) {
        res.json(err)
    }
}