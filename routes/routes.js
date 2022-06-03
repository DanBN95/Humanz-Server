const express = require('express');
const router = express.Router();
const userTableController = require('../App/UserTableController');

router.get('/', userTableController);

module.exports = router;