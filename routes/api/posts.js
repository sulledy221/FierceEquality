const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts/');

/*---------- Public Routes ----------*/

router.post('/flagpage', postsCtrl.create)



/*---------- Protected Routes ----------*/




module.exports = router;