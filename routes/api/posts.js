const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');
const likesCtrl = require('../../controllers/likes')

/*---------- Public Routes ----------*/

router.post('/:flag', postsCtrl.create)
router.get('/:flag', postsCtrl.index)
router.delete('/likes/:id', likesCtrl.deleteLike)
router.delete('/:flag/:id', postsCtrl.delete)
router.post('/:id/likes', likesCtrl.create)


/*---------- Protected Routes ----------*/




module.exports = router;