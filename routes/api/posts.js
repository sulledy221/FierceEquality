const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');

/*---------- Public Routes ----------*/

router.post('/:flag', postsCtrl.create)
router.get('/:flag', postsCtrl.index)
router.delete('/:flag/:id', postsCtrl.delete)


/*---------- Protected Routes ----------*/




module.exports = router;