const express = require('express');
const roomController = require('./../controllers/roomController');

const router = express.Router();

router.route('/').get(roomController.getAllRooms);

module.exports = router;
