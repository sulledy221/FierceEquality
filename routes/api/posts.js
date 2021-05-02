const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');
const likesCtrl = require('../../controllers/likes')

/*---------- Public Routes ----------*/

router.post('/:flag', postsCtrl.create)
router.get('/:flag', postsCtrl.index)
router.delete('/:flag/:id', postsCtrl.delete)
router.post('/:id/likes', likesCtrl.create)
router.delete('/:postId/likes/:likeId', likesCtrl.deleteLike)


/*---------- Protected Routes ----------*/




module.exports = router;