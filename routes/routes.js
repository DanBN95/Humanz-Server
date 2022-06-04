const express = require('express');
const deleteUser = require('../App/DeleteUser');
const router = express.Router();
const userTableController = require('../App/UserTableController');
const cors = require('cors');
const addUserController = require('../App/AddUserController');
const filterDataController = require('../App/FilterDataController');

router.use(cors());
router.get('/', userTableController);

router.put('/delete-user', deleteUser);

router.post('/add-user', addUserController);
router.post('/filter-data', filterDataController);

module.exports = router;