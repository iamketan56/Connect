const express = require('express');
const router = express.Router();
const PostController = require('../Controllers/PostController');
//user route
router.get('/posts', PostController.posts);

module.exports = router;