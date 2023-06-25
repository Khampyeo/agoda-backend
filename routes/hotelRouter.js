const express = require('express');
const hotelController = require('./../controllers/hotelController');
const commentController = require('./../controllers/commentController');
const { getAllRoomsByHotel } = require('../controllers/roomController');

const router = express.Router();

router
  .route('/')
  .get(hotelController.getAllHotels)
  .post(hotelController.createHotel);

router.route('/:id').get(hotelController.getHotel);

router.route('/:id/rooms').get(getAllRoomsByHotel);

router
  .route('/:id/comments')
  .get(commentController.getAllCommentByHotel)
  .post(commentController.createComment);

module.exports = router;
