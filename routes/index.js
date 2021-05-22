const express = require('express');
const router = express.Router();
//controller access
const homeController = require('../Controllers/home_controller');

router.get('/', homeController.home);
router.use('/users', require('./users'));
router.use('/users', require('./posts'));

module.exports = router;

