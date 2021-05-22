const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');
//user route
router.get('/profile', UserController.profile);

module.exports = router;